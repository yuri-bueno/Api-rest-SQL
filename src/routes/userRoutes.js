import { Router } from 'express';
import UserController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// n deveria existir exemplo de CRUD
// router.get('/', UserController.index); // Lista usuários
// router.get('/:id', UserController.show); // Lista usuário

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
