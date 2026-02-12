import { PrismaClient } from '../../shared/database/generated/client';

export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface UpdateUserDTO {
    name?: string;
    email?: string;
    password?: string;
}

export interface UserModel {
    name: string;
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

class UserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async createUser(createUserDTO: CreateUserDTO): Promise<UserModel> {
        return this.prisma.user.create({
            data: createUserDTO,
        });
    }

    async findAllUsers(): Promise<UserModel[]> {
        return this.prisma.user.findMany();
    }

    async findUserByEmail(email: string): Promise<UserModel | null> {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }

    async findUserById(id: string): Promise<UserModel | null> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async updateUser(
        id: string,
        updateUserDTO: UpdateUserDTO,
    ): Promise<UserModel> {
        return this.prisma.user.update({
            where: { id },
            data: updateUserDTO,
        });
    }

    async deleteUser(id: string): Promise<UserModel> {
        return this.prisma.user.delete({
            where: { id },
        });
    }
}

export default UserRepository;
