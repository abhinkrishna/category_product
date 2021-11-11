import { NextFunction, Request, Response } from 'express';
import { Exception400, Exception404 } from '../../exceptions/exceptions';
import Controller from '../controller';
import SubCategory from './subcategory.entity';
import SubCategoryModel from './subcategory.model';

class SubCategoryController extends Controller {
    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, SubCategory, SubCategoryModel)
    }

    public create = async () => {
        const data = this.body;

        const newSubCategory = await this.repository.create(data);
        const subCategory = await this.repository.save(newSubCategory);

        if (!subCategory) throw new Exception400('Something went wrong.');

        this.success201({ sub_category: subCategory }, 'Successfully created.');
    }

    public readMany = async () => {
        const { order_by, order, page, size } = this.query;

        const subCategories = await (this.model as SubCategoryModel).readManySubCategories(order_by, order, page, size);

        this.success200({ sub_categories: subCategories }, 'Successfully fetched.');
    }

    public readOne = async () => {
        const { id } = this.params;

        const subCategory = await (this.model as SubCategoryModel).readOneSubCategory(id);
        if (!subCategory) throw new Exception404('Subcategory not found');

        this.success200({ sub_category: subCategory }, 'Successfully fetched.');
    }

    public update = async () => {
        const { id } = this.params;
        const data = this.body;

        const subCategory: SubCategory = await (this.model as SubCategoryModel).readOneSubCategory(id);
        if (!subCategory) throw new Exception404('Not found.');

        try {
            this.repository.merge(subCategory, data);
            await this.repository.save(subCategory);
        } catch (error) {
            throw new Exception400('Error on updating.');
        }

        const updatedCategory = await (this.model as SubCategoryModel).readOneSubCategory(id);
        this.success200(updatedCategory, "Successfully updated .");
    }

    public delete = async () => {
        const { id } = this.params;

        const subCategory: SubCategory = await (this.model as SubCategoryModel).readOneSubCategory(id);
        if (!subCategory) throw new Exception404('Not found.');
        
        const result: boolean = await (this.model as SubCategoryModel).removeSubCategory(id);
        if (!result) throw new Exception400('Failed to delete.');

        this.success200({}, 'Successfully deleted.');
    }

}

export default SubCategoryController;