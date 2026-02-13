import AppError from '../../shared/errors/app.erro';
import {
    CreateUserDTO,
    UpdateUserDTO,
    ResponseUserDTO,
} from './common/user.types';
import UserRepository from './user.repository';
import bcrypt from 'bcrypt';

class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(createUserDto: CreateUserDTO): Promise<ResponseUserDTO> {
        const userAlreadyExists = await this.userRepository.findUserByEmail(
            createUserDto.email,
        );

        if (userAlreadyExists) {
            throw new AppError('User with this email already exists', 400);
        }

        const passwordHash = await this.hashPassword(createUserDto.password);
        const userToCreate = { ...createUserDto, password: passwordHash };

        return this.userRepository.createUser(userToCreate);
    }

    async findAllUsers(): Promise<ResponseUserDTO[]> {
        return this.userRepository.findAllUsers();
    }

    async findUserById(id: string): Promise<ResponseUserDTO> {
        const user = await this.userRepository.findUserById(id);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        return user;
    }

    async updateUser(
        id: string,
        updateUserDto: UpdateUserDTO,
    ): Promise<ResponseUserDTO> {
        const userExists = await this.userRepository.findUserById(id);

        if (!userExists) {
            throw new AppError('User not found', 404);
        }

        if (updateUserDto.email) {
            const userWithEmail = await this.userRepository.findUserByEmail(
                updateUserDto.email,
            );

            if (userWithEmail && userWithEmail.id !== id) {
                throw new AppError('User with this email already exists', 400);
            }
        }

        const userToUpdate = { ...updateUserDto };

        if (updateUserDto.password) {
            userToUpdate.password = await this.hashPassword(
                updateUserDto.password,
            );
        }

        return this.userRepository.updateUser(id, userToUpdate);
    }

    async deleteUser(id: string): Promise<ResponseUserDTO> {
        const user = await this.userRepository.findUserById(id);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        await this.userRepository.deleteUser(id);

        return user;
    }

    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        return passwordHash;
    }
}

export default UserService;
