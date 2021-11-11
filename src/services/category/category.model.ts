import { FindOneOptions } from "typeorm";
import Model from "../model";
import Category from "./category.entity";

class CategoryModel extends Model {
    constructor() {
        super(Category);
    }

    public readOneCategory = async (id: number) => {
        const select = [ "id", "name", "description", "created_at", "updated_at" ];
        const whereClause = { id } ;

        const option: FindOneOptions = { select: select, where: whereClause };
        return await this.repository.findOne(option);
    }

    public readManyCategories = async (order_by: string, order: string, page: number, size: number) => {
        return await this.repository.find(
            this.paginationOptions(order_by, order, page, size)
        )
    } 

    public removeCategory = async (id: number) => {
        const result = await this.repository.delete(id);
        return (result && result.affected && result.affected > 0) ? true : false
    }

}

export default CategoryModel;