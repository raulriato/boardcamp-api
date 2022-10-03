import { connection } from "../database/db.js";
import { gameSchema } from "../schemas/game.schema.js";

async function gamesMiddleware(req, res, next) {
    const game = req.body;

    const gameValidation = gameSchema.validate(game, { abortEarly: false });

    if (gameValidation.error) {
        const messages = gameValidation.error.details.map(detail => detail.message);
        return res.status(422).send(messages);
    };

    try {
        const category = await connection.query('SELECT * FROM categories WHERE id = $1;', [game.categoryId]);
        const categoryId = category.rows[0].id;

        if (!categoryId) {
            return res.sendStatus(400);
        };

        res.locals.game = game;
        next();
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    };
};

export { gamesMiddleware };