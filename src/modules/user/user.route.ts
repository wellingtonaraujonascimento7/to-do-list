import { Router } from 'express';
import { userController } from '../../main';

const userRouter = Router();

userRouter.post('', (req, res) => userController.createUser(req, res));
userRouter.get('', (req, res) => userController.findAllUsers(req, res));
userRouter.get('/:id', (req, res) => userController.findUserById(req, res));
userRouter.put('/:id', (req, res) => userController.updateUser(req, res));
userRouter.delete('/:id', (req, res) => userController.deleteUser(req, res));

export default userRouter;
