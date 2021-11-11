import corsMiddleware from "./cors";
import parserMiddleware from "./parser";

const middlewares = [
    parserMiddleware,
    corsMiddleware,
];

export default middlewares;