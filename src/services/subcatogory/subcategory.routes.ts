import { NextFunction, Request, Response } from "express";
import { Method, Route } from "../../types/route";
import SubCategoryController from "./subcategory.controller";
import { CreateSubCategoryDTO, ReadManySubCategoryDTO, UpdateSubCategoryDTO } from "./subcategory.dto";


const subCategoryRoutes: Route[] = [
    {
        path: '/subcategory',
        method: Method.post,
        validator: CreateSubCategoryDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new SubCategoryController(req, res, next).create();
        }
    },
    {
        path: '/subcategory',
        method: Method.get,
        validator: ReadManySubCategoryDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new SubCategoryController(req, res, next).readMany();
        }
    },
    {
        path: '/subcategory/:id',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new SubCategoryController(req, res, next).readOne();
        }
    },
    {
        path: '/subcategory/:id',
        method: Method.patch,
        validator: UpdateSubCategoryDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new SubCategoryController(req, res, next).update();
        }
    },
    {
        path: '/subcategory/:id',
        method: Method.delete,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new SubCategoryController(req, res, next).delete();
        }
    },
]

export default subCategoryRoutes;