import { NextFunction, Request, Response, Router } from "express"
import validationMiddleware from "../middlewares/validation";
import { Method, Route } from "../types/route";


const initRoutes = async (routes: Route[], serverRouter: Router) => {
    for (const route of routes) {
        const { path, method, validator, middlewares, controller } = (route as Route);

        // Handle all middlewares
        const allMiddlewares: any = [];
        if ( validator ) allMiddlewares.push(validationMiddleware(validator));
        if ( middlewares && middlewares.length > 0) middlewares.map((middleware) => allMiddlewares.push(middleware));

        (serverRouter as any)[Method[method] as string](`/api${path}`, allMiddlewares, async (req: Request, res: Response, next: NextFunction) => {
            try {
                await controller(req, res, next)
            } catch(err) {
                next(err)
            }
        });

    }
}

export default initRoutes;