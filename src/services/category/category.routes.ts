import { NextFunction, Request, Response } from "express";
import { Method, Route } from "../../types/route";
import CategoryController from "./category.controller";
import { CreateCategoryDTO, ReadManyCategoryDTO, UpdateCategoryDTO } from "./category.dto";


const categoryRoutes: Route[] = [
    {
        path: '/category',
        method: Method.post,
        validator: CreateCategoryDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new CategoryController(req, res, next).create();
        }
    },
    {
        path: '/category',
        method: Method.get,
        validator: ReadManyCategoryDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new CategoryController(req, res, next).readMany();
        }
    },
    {
        path: '/category/:id',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new CategoryController(req, res, next).readOne();
        }
    },
    {
        path: '/category/:id',
        method: Method.patch,
        validator: UpdateCategoryDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new CategoryController(req, res, next).update();
        }
    },
    {
        path: '/category/:id',
        method: Method.delete,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new CategoryController(req, res, next).delete();
        }
    },
]

export default categoryRoutes;