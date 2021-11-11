import { Connection, EntityManager, getConnection, getManager, getRepository } from "typeorm";
import Pagination from "../types/pagination";

class Model {
    public repository: any;
    public pagination: Pagination;
    public connection: Connection;
    public queryManager: EntityManager;
    public tableName: string;

    constructor(entity?: any) {
        this.connection = getConnection("default");
        this.queryManager = getManager("default");
        if (entity) {
            this.repository = getRepository(entity);
            this.tableName = this.connection.getMetadata(entity).tableName;
        }
    }
    
    public paginationOptions = (order_by: string, order: string, page: number, size: number) => {
        const column_name: string = order_by ?? this.pagination.column_name;
        const sort_direction: string = order ?? this.pagination.sort_direction;
        const page_number: number = Number(page) ?? this.pagination.page;
        const take: number = Number(size) ?? this.pagination.size;

        const options = {
            order: { [column_name]: sort_direction },
            skip: ( (page_number - 1) * take),
            take,
        };
        return options;
    }

    public buildQuery = async (query: string, params: any): Promise<string> => {
        if (Object.prototype.toString.call(params) === "[object Object]") {
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    const regExp = new RegExp(`:${key}`, "g");
                    query = query.replace(regExp, params[key]);
                }
            }
            return query;
        } else {
            return "";
        }
    }
}
export default Model;