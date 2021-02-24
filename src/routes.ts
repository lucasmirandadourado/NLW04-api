import { Router } from 'express';
import { useContainer } from 'typeorm';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();

router.post('/users', userController.create);

export { router };