import { NextFunction, Request, Response } from "express";
import { Method, Route } from "../../types/route";
import ProductController from "./product.controller";
import { CreateProductDTO, ReadManyProductsDTO, UpdateProductDTO } from "./product.dto";


const productsRoutes: Route[] = [
    {
        path: '/products',
        method: Method.post,
        validator: CreateProductDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ProductController(req, res, next).create();
        }
    },
    {
        path: '/products',
        method: Method.get,
        validator: ReadManyProductsDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ProductController(req, res, next).readMany();
        }
    },
    {
        path: '/products/:id',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ProductController(req, res, next).readOne();
        }
    },
    {
        path: '/products/:id',
        method: Method.patch,
        validator: UpdateProductDTO,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ProductController(req, res, next).update();
        }
    },
    {
        path: '/products/:id',
        method: Method.delete,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ProductController(req, res, next).delete();
        }
    },
    {
        path: '/category/:category/:subcategory/:product_name',
        method: Method.get,
        controller: async (req: Request, res: Response, next: NextFunction) => {
            await new ProductController(req, res, next).readOneByCategorySubCategory();
        }
    },
    
]

export default productsRoutes;