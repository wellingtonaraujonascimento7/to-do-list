import prisma from '../shared/database/prisma';
import AuthController from './auth/auth.controller';
import AuthService from './auth/auth.service';
import TaskController from './task/task.controller';
import TaskRepository from './task/task.repository';
import TaskService from './task/task.service';
import UserController from './user/user.controller';
import UserRepository from './user/user.repository';
import UserService from './user/user.service';

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const taskRepository = new TaskRepository(prisma);
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

export { userController, authController, taskController };
