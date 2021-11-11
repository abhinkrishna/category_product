import { Router } from "express";
import cors, { CorsOptions } from 'cors';

const corsMiddleware = (serverRouter: Router) => {
    const options: CorsOptions = {
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "x-access-token"],
        credentials: true,
        methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        origin: "*",
        preflightContinue: false
    };
    // use cors middleware
    serverRouter.use(cors(options))
    // enable pre-flight
    serverRouter.options("*", cors(options) as any)
}

export default corsMiddleware;