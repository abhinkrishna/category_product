import { NextFunction, Request, Response } from 'express';
import { Exception400, Exception404 } from '../../exceptions/exceptions';
import Controller from '../controller';
import Category from './category.entity';
import CategoryModel from './category.model';

class CategoryController extends Controller {
    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, Category, CategoryModel)
    }

    public create = async () => {
        const data = this.body;

        const newCategory = await this.repository.create(data);
        const category = await this.repository.save(newCategory);

        if (!category) throw new Exception400('Something went wrong.');

        this.success201({ category }, 'Successfully created.');
    }

    public readMany = async () => {
        const { order_by, order, page, size } = this.query;

        const categories = await (this.model as CategoryModel).readManyCategories(order_by, order, page, size);

        this.success200({ categories }, 'Successfully fetched.');
    }

    public readOne = async () => {
        const { id } = this.params;

        const category = await (this.model as CategoryModel).readOneCategory(id);
        if (!category) throw new Exception404('Category not found');

        this.success200({ category }, 'Successfully fetched.');
    }

    public update = async () => {
        const { id } = this.params;
        const data = this.body;

        const category: Category = await (this.model as CategoryModel).readOneCategory(id);
        if (!category) throw new Exception404('Not found.');

        try {
            this.repository.merge(category, data);
            await this.repository.save(category);
        } catch (error) {
            throw new Exception400('Error on updating.');
        }

        const updatedCategory = await (this.model as CategoryModel).readOneCategory(id);
        this.success200(updatedCategory, "Successfully updated .");
    }

    public delete = async () => {
        const { id } = this.params;

        const category: Category = await (this.model as CategoryModel).readOneCategory(id);
        if (!category) throw new Exception404('Not found.');
        
        const result: boolean = await (this.model as CategoryModel).removeCategory(id);
        if (!result) throw new Exception400('Failed to delete.');

        this.success200({}, 'Successfully deleted.');
    }

}

export default CategoryController;