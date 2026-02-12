import { NextFunction, Request, Response } from 'express';
import UserService from './user.service';

class UserController {
    constructor(private readonly userService: UserService) {}

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    async findAllUsers(_req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userService.findAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }

    async findUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = this.getUserIdString(req.params.id);
            const user = await this.userService.findUserById(userId);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = this.getUserIdString(req.params.id);
            const updatedUser = await this.userService.updateUser(
                userId,
                req.body,
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = this.getUserIdString(req.params.id);
            await this.userService.deleteUser(userId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }

    private getUserIdString(id: string | string[]): string {
        if (Array.isArray(id)) {
            return id[0];
        }

        return id;
    }
}

export default UserController;
