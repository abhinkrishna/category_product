import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { Exception400 } from "../exceptions/exceptions";

const validationMiddleware = <T>(type: any, skipMissingProperties = false): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        validate(plainToClass(type, {...req.query,...req.body}), { skipMissingProperties }).then((errors: ValidationError[]) => {
            if (errors.length > 0) {
                const message = errors.map((error: ValidationError) => Object.values(error.constraints as any)).join(", ");
                next(new Exception400(message, errors));
            } else {
                next();
            }
        });
    };
}

export default validationMiddleware;