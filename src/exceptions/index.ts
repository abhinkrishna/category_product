import { NextFunction, Request, Response, Router } from "express";
import { Exception } from "./exceptions";

export const ExceptionClientHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Exception) {
        res.status(err.statusCode).json({
            data: (err.error) ? err.error : {},
            message: err.message,
            statusCode: err.statusCode,
            statusMessage: err.statusMessage,
            type: "exception"
        });
    } else {
        next(err);
    }
};

export const ExceptionServerHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    res.status((err as any).statusCode || 500).json({
        data: ((err as any).error) ? (err as any).error : {},
        message: (err as any).message,
        statusCode: ((err as any).statusCode) ? (err as any).statusCode : 500,
        statusMessage: ((err as any).statusMessage) ? (err as any).statusMessage : "Internal Server Error",
        type: "error"
    });
};

export const ExceptionNotFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        data: {},
        message: "Method not found",
        statusCode: 404,
        statusMessage: "Method Not found",
        type: "error"
    });
};

const handleClientExceptions = (serverRouter: Router) => {
    serverRouter.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        ExceptionClientHandler(err, req, res, next);
    });
};

const handleServerExceptions = (serverRouter: Router) => {
    serverRouter.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        ExceptionServerHandler(err, req, res, next);
    });
};

const handleNotFoundExceptions = (serverRouter: Router) => {
    serverRouter.use((req: Request, res: Response, next: NextFunction) => {
        ExceptionNotFoundHandler(req, res, next);
    });
};

export default [handleClientExceptions, handleServerExceptions, handleNotFoundExceptions];
