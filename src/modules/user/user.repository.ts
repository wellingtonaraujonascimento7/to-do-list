import { PrismaClient } from '../../shared/database/generated/client';
import { userSelect } from './common/user-select';
import {
    CreateUserDTO,
    ResponseUserDTO,
    UpdateUserDTO,
    UserModel,
} from './common/user.types';

class UserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async createUser(createUserDTO: CreateUserDTO): Promise<ResponseUserDTO> {
        return this.prisma.user.create({
            data: createUserDTO,
            select: userSelect,
        });
    }

    async findAllUsers(): Promise<ResponseUserDTO[]> {
        return this.prisma.user.findMany({
            select: userSelect,
        });
    }

    async findUserByEmail(email: string): Promise<UserModel | null> {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }

    async findUserById(id: string): Promise<ResponseUserDTO | null> {
        return this.prisma.user.findUnique({
            where: { id },
            select: userSelect,
        });
    }

    async updateUser(
        id: string,
        updateUserDTO: UpdateUserDTO,
    ): Promise<ResponseUserDTO> {
        return this.prisma.user.update({
            where: { id },
            data: updateUserDTO,
            select: userSelect,
        });
    }

    async deleteUser(id: string): Promise<ResponseUserDTO> {
        return this.prisma.user.delete({
            where: { id },
            select: userSelect,
        });
    }
}

export default UserRepository;
