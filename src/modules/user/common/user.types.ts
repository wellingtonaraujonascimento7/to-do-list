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

export interface ResponseUserDTO {
    name: string;
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserModel {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
