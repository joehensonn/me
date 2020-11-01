import express from 'express';

import meController from '../controllers/meController';
import musicController from '../controllers/musicController';

const indexRouter = express.Router();

indexRouter.get('/', meController.hello);

indexRouter.get('/music/currently-listening', musicController.currentlyListening);
indexRouter.get('/music/top-songs', musicController.topSongs);

export default indexRouter;