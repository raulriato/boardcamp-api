import { connection } from "../database/db.js";

async function listCategories(req, res) {
    try {
        const categories = await connection.query("SELECT * FROM categories;");
        res.status(200).send(categories.rows);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

async function createCategory(req, res) {
    const name = res.locals.name;

    try {
        connection.query("INSERT INTO categories (name) VALUES ($1);", [name]);
        res.sendStatus(201)
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

export {
    listCategories,
    createCategory
}