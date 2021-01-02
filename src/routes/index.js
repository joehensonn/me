import express from 'express';

import meController from '../controllers/meController';
import musicController from '../controllers/musicController';
import homeController from '../controllers/homeController';

const indexRouter = express.Router();

indexRouter.get('/', meController.hello);

indexRouter.get('/music/currently-listening', musicController.currentlyListening);
indexRouter.get('/music/top-songs', musicController.topSongs);

indexRouter.get('/home/outside', homeController.outside);

export default indexRouter;