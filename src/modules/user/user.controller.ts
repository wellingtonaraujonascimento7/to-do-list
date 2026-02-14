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
            const { id } = req.user!;
            const user = await this.userService.findUserById(id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.user!;
            const updatedUser = await this.userService.updateUser(id, req.body);
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.user!;
            const deletedUser = await this.userService.deleteUser(id);
            res.status(200).json(deletedUser);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
