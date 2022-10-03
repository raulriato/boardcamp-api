import { connection } from "../database/db.js";

async function listGames(req, res) {
    try {
        const games = await connection.query(
            `SELECT games.id, games.name, games."stockTotal", games."categoryId", games."pricePerDay", categories.name as "categoryName"
            FROM games JOIN categories ON games."categoryId" = categories.id;`
        );
        res.status(200).send(games.rows);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

async function createGame(req, res) {
    const { name, image, stockTotal, categoryId, pricePerDay } = res.locals.game;

    console.log(`INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay")
    VALUES (${name}, ${image}, ${stockTotal}, ${categoryId}, ${pricePerDay});`);

    try {
        await connection.query(
            `INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay")
            VALUES ('${name}', '${image}', ${stockTotal}, ${categoryId}, ${pricePerDay});`
        );

        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

export {
    listGames,
    createGame
}