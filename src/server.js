import express from 'express';
import cors from "cors";
import categoriesRouter from './routers/categories.router.js';
import gamesRouter from './routers/games.router.js';

const server = express();

server.use(cors());
server.use(express.json());

server.use(categoriesRouter);
server.use(gamesRouter);

server.listen(4000, () => console.log('listening on port 4000'));