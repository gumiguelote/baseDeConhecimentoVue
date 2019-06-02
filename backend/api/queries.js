module.exports = {
    categoryWithChildrens: `
        WITH RECURSIVE subcategories (id) as (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            SELECT c.id FROM subcategories, categories c
                WHERE parentID = subcategories.id
        )
        SELECT id from subcategories
    `
}
