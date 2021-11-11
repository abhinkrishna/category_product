
export const GetProductByCategorySubCategoryAndProductNameQuery = `
SELECT
    p.id as id,
    p.title as title,
    sc.name as subcategory,
    c.name as category
FROM products p
LEFT JOIN subcategory sc on sc.id = p.subcategory_data
LEFT JOIN category c on c.id = sc.category_data
WHERE c.name ILIKE ':categoryName' 
AND sc.name ILIKE ':subcategoryName' 
AND p.title ILIKE '%:productName%' 
`