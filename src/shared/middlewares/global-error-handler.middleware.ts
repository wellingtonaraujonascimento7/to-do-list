import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/app.erro';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { ZodError } from 'zod';

const globalErrorHandlerMiddleware = (
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    console.error('Global Error Handler:', err);

    if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            return res.status(400).json({
                error: 'Unique constraint failed. Duplicate value exists.',
                statusCode: 400,
            });
        }

        if (err.code === 'P2025') {
            return res.status(404).json({
                error: 'Record not found. The specified resource does not exist.',
                statusCode: 404,
            });
        }

        return res.status(500).json({
            error: 'Database error occurred. Please try again later.',
            statusCode: 500,
        });
    }

    if (err instanceof ZodError) {
        return res.status(400).json({
            error: 'Validation error. Invalid input data.',
            details: err.issues,
            statusCode: 400,
        });
    }

    if (err instanceof AppError) {
        return res
            .status(err.statusCode)
            .json({ error: err.message, statusCode: err.statusCode });
    }

    return res
        .status(500)
        .json({ error: 'Internal Server Error.', statusCode: 500 });
};

export default globalErrorHandlerMiddleware;
