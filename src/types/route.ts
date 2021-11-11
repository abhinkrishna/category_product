import { NextFunction, Request, Response } from "express";

export enum Method {
    'get',
    'post',
    'patch',
    'put',
    'delete',
}

export type Route = {
    path: string,
    method: Method,
    validator?: any,
    middlewares?: ((req: Request, res: Response, next: NextFunction) => any)[],
    controller: ((req: Request, res: Response, next: NextFunction) => Promise<void> | void)
}
