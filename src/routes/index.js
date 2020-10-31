import express from 'express';

import welcomeController from '../controllers/welcomeController';

const indexRouter = express.Router();

indexRouter.get('/', welcomeController.view);

export default indexRouter;