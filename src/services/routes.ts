import categoryRoutes from "./category/category.routes";
import subCategoryRoutes from "./subcatogory/subcategory.routes";
import productsRoutes from "./product/product.routes";

export default [
    ...categoryRoutes,
    ...subCategoryRoutes,
    ...productsRoutes,
]