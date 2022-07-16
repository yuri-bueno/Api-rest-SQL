import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';

import homeRouters from './routes/homeRoutes';
import userRouters from './routes/userRoutes';
import tokenRouters from './routes/tokenRoutes';
import alunoRouters from './routes/alunoRoutes';
import fotoRouters from './routes/fotoRoutes';

import './database';

dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));
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