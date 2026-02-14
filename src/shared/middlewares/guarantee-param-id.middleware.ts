import { Request, Response, NextFunction } from 'express';

const guaranteeParamId = (req: Request, _res: Response, next: NextFunction) => {
    let id = req.params.id;

    if (Array.isArray(id)) {
        id = id[0];
    }

    if (
        !id ||
        !id.match(
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
        )
    ) {
        throw new Error('Invalid or missing id parameter');
    }
    next();
};

export default guaranteeParamId;
