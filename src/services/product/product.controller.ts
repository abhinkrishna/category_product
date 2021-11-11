import { NextFunction, Request, Response } from 'express';
import { Exception400, Exception404 } from '../../exceptions/exceptions';
import Controller from '../controller';
import Product from './product.entity';
import ProductModel from './product.model';

class ProductController extends Controller {
    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, Product, ProductModel)
    }

    public create = async () => {
        const data = this.body;

        const newProduct = await this.repository.create(data);
        const product = await this.repository.save(newProduct);

        if (!product) throw new Exception400('Something went wrong.');

        this.success201({ product }, 'Successfully created.');
    }

    public readMany = async () => {
        const { order_by, order, page, size } = this.query;

        const products = await (this.model as ProductModel).readManyProducts(order_by, order, page, size);

        this.success200({ products }, 'Successfully fetched.');
    }

    public readOne = async () => {
        const { id } = this.params;

        const product = await (this.model as ProductModel).readOneProduct(id);
        if (!product) throw new Exception404('Product not found');

        this.success200({ product }, 'Successfully fetched.');
    }

    public readOneByCategorySubCategory = async () => {
        const { category, subcategory, product_name } = this.params;

        const product = await (this.model as ProductModel).readOneProductByCategoryAndSubCategoryAndProductName(category, subcategory, product_name);
        if (!product) throw new Exception404('Product not found');

        this.success200({ product }, 'Successfully fetched.');
    }

    public update = async () => {
        const { id } = this.params;
        const data = this.body;

        const product: Product = await (this.model as ProductModel).readOneProduct(id);
        if (!product) throw new Exception404('Not found.');

        try {
            this.repository.merge(product, data);
            await this.repository.save(product);
        } catch (error) {
            throw new Exception400('Error on updating.');
        }

        const updatedProduct = await (this.model as ProductModel).readOneProduct(id);
        this.success200(updatedProduct, "Successfully updated .");
    }

    public delete = async () => {
        const { id } = this.params;

        const product: Product = await (this.model as ProductModel).readOneProduct(id);
        if (!product) throw new Exception404('Not found.');
        
        const result: boolean = await (this.model as ProductModel).removeProduct(id);
        if (!result) throw new Exception400('Failed to delete.');

        this.success200({}, 'Successfully deleted.');
    }


}

export default ProductController;