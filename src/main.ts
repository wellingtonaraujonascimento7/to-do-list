import AuthController from './modules/auth/auth.controller';
import AuthService from './modules/auth/auth.service';
import TaskController from './modules/task/task.controller';
import TaskRepository from './modules/task/task.repository';
import TaskService from './modules/task/task.service';
import UserController from './modules/user/user.controller';
import UserRepository from './modules/user/user.repository';
import UserService from './modules/user/user.service';
import prisma from './shared/database/prisma';

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const taskRepository = new TaskRepository(prisma);
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

export { userController, authController, taskController };
