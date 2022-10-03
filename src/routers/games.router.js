import { Router } from "express";
import { gamesMiddleware } from "../middlewares/games.middleware.js";
import { listGames, createGame } from "../controllers/games.controller.js";

const router = Router();

router.get('/games', listGames);
router.post('/games', gamesMiddleware, createGame);

export default router;