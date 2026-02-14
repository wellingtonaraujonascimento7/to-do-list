import { Router } from 'express';
import { taskController } from '../../main';
import authencationMiddleware from '../../shared/middlewares/authentication.middleware';
import validateBodyMiddleware from '../../shared/middlewares/validate-body.middleware';
import { createTaskSchema, updateTaskSchema } from './task.schema';
import guaranteeParamId from '../../shared/middlewares/guarantee-param-id.middleware';

const taskRouter = Router();

taskRouter.use(authencationMiddleware);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createTask'
 *     responses:
 *       201:
 *         description: Return the created task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseTask'
 *       401:
 *         description: Unauthorized access.
 */
taskRouter.post(
    '/',
    validateBodyMiddleware(createTaskSchema),
    (req, res, next) => taskController.createTask(req, res, next),
);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks for a user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Return the tasks for the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/responseTask'
 *       401:
 *         description: Unauthorized access.
 */
taskRouter.get('/', (req, res, next) =>
    taskController.findAllTasks(req, res, next),
);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a specific task for a user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the task to retrieve.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Return the task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseTask'
 *       401:
 *         description: Unauthorized access.
 *       404:
 *         description: Task not found.
 */
taskRouter.get('/:id', guaranteeParamId, (req, res, next) =>
    taskController.findTaskById(req, res, next),
);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update a specific task for a user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the task to update.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateTask'
 *     responses:
 *       200:
 *         description: Return the updated task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseTask'
 *       401:
 *         description: Unauthorized access.
 *       404:
 *         description: Task not found.
 */
taskRouter.put(
    '/:id',
    guaranteeParamId,
    validateBodyMiddleware(updateTaskSchema),
    (req, res, next) => taskController.updateTask(req, res, next),
);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a specific task for a user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ID of the task to delete.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Return the deleted task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseTask'
 *       401:
 *         description: Unauthorized access.
 *       404:
 *         description: Task not found.
 */
taskRouter.delete('/:id', guaranteeParamId, (req, res, next) =>
    taskController.deleteTask(req, res, next),
);

export default taskRouter;
