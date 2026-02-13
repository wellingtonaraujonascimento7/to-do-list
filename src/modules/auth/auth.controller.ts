import { NextFunction, Request, Response } from 'express';
import AuthService from './auth.service';

class AuthController {
    constructor(private readonly authService: AuthService) {}

    async login(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const { email, password } = req.body;
            const token = await this.authService.login(email, password);
            res.status(200).json(token);
        } catch (error) {
            next(error);
        }
    }
}

export default AuthController;
