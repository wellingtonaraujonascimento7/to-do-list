import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

const validateBodyMiddleware = (schema: ZodType) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        schema.parse(req.body);
        next();
    };
};

export default validateBodyMiddleware;
