import AuthController from './modules/auth/auth.controller';
import AuthService from './modules/auth/auth.service';
import UserController from './modules/user/user.controller';
import UserRepository from './modules/user/user.repository';
import UserService from './modules/user/user.service';
import prisma from './shared/database/prisma';

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

export { userController, authController };
