import { resolve } from 'path';

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRouters from './routes/homeRoutes';
import userRouters from './routes/userRoutes';
import tokenRouters from './routes/tokenRoutes';
import alunoRouters from './routes/alunoRoutes';
import fotoRouters from './routes/fotoRoutes';

import './database';

dotenv.config();

const whiteList = [

  '34.95.240.28',
  'http://localhost:3000/',

];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRouters);
    this.app.use('/alunos', alunoRouters);
    this.app.use('/users', userRouters);
    this.app.use('/token', tokenRouters);
    this.app.use('/fotos', fotoRouters);
  }
}
export default new App().app;
