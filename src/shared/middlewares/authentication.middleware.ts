import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import AppError from '../errors/app.erro';

interface JwtPayload {
    id: string;
    iat: number;
    exp: number;
}

const authencationMiddleware = (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('Unauthorized access', 401);
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        throw new AppError('Unauthorized access', 401);
    }

    if (!process.env.JWT_SECRET) {
        throw new AppError('JWT secret not configured', 500);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        req.user = decoded;
        next();
    } catch {
        throw new AppError('Unauthorized access', 401);
    }
};

export default authencationMiddleware;
