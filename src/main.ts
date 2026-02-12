import UserController from './modules/user/user.controller';
import UserRepository from './modules/user/user.repository';
import UserService from './modules/user/user.service';
import prisma from './shared/database/prisma';

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userController };
