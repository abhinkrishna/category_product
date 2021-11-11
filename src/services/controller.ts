import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { SuccessResponses } from "../utils/success";

class Controller extends SuccessResponses {
    protected params: any;
    protected body: any;
    protected query: any;
    protected repository: any
    protected model: any;
    protected req: Request;
    protected res: Response;
    protected next: NextFunction;
    constructor(req: Request, res: Response, next: NextFunction, entity?: any, model?: any) {
        super();
        this.req = req;
        this.res = res;
        this.next = next;
        this.params = req.params;
        this.body = req.body;
        this.query = req.query;
        if (entity) this.repository = getRepository(entity);
        if (model) this.model = new model();
    }

    protected success200 = async (data: any, message?: string) => {
        this.res.status(200).json(this.getObject(200, data, message));
    }

    protected success201 = async (data: any, message?: string) => {
        this.res.status(201).json(this.getObject(201, data, message));
    }
}

export default Controller;