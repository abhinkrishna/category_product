import express, { Router } from "express";

const parserMiddleware = (serverRouter: Router) => {
    // for parsing application/json
    serverRouter.use(express.json({ limit: "50mb" }));
}

export default parserMiddleware; 