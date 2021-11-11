import { FindOneOptions } from "typeorm";
import Model from "../model";
import Product from "./product.entity";
import { GetProductByCategorySubCategoryAndProductNameQuery } from "./product.query";

class ProductModel extends Model {
    constructor() {
        super(Product);
    }

    public readOneProduct = async (id: number) => {
        const select = [ "id", "title", "description", "price", "subcategory_data", "created_at", "updated_at" ];
        const whereClause = { id } ;

        const option: FindOneOptions = { select: select, where: whereClause };
        return await this.repository.findOne(option);
    }

    public readOneProductByCategoryAndSubCategoryAndProductName = async (category: string, subcategory: string, product: string) => {
        console.log(category);
        console.log(subcategory);
        console.log(product);
        
        const query = await this.buildQuery(
            GetProductByCategorySubCategoryAndProductNameQuery,
            { 
                categoryName: category, 
                subcategoryName: subcategory, 
                productName: product,
            })
        console.log(query);
        
        return await this.queryManager.query(
            query
            // await this.buildQuery(GetProductByCategorySubCategoryAndProductNameQuery, { category, subcategory, product})
        )
    }

    public readManyProducts = async (order_by: string, order: string, page: number, size: number) => {
        return await this.repository.find(
            this.paginationOptions(order_by, order, page, size)
        )
    } 

    public removeProduct = async (id: number) => {
        const result = await this.repository.delete(id);
        return (result && result.affected && result.affected > 0) ? true : false
    }
}

export default ProductModel;