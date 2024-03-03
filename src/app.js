import 'dotenv/config';

import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import compression from 'compression';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';

import * as configs from '@/config';
import { errorHandler } from '@/middlewares/errorHandler';
import { responseHandler } from '@/middlewares/responseHandler';

const app = express();

// Required middleware list
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(configs.corsConfig));
app.use(compression(configs.compressionConfig));
app.use(cookieParser());

// Load custom middlewares
app.use(responseHandler);

// Load router paths
configs.routerConfig(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

export default app;
