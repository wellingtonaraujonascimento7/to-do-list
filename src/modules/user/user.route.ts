import { Router } from 'express';
import { userController } from '../../main';
import authencationMiddleware from '../../shared/middlewares/authentication.middleware';
import validateBodyMiddleware from '../../shared/middlewares/validate-body.middleware';
import { createUserSchema, updateUserSchema } from './user.schema';

const userRouter = Router();

// Public routes

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createUser'
 *     responses:
 *       201:
 *         description: User created successfully.
 *       400:
 *         description: User already exists or invalid data.
 */
userRouter.post(
    '',
    validateBodyMiddleware(createUserSchema),
    (req, res, next) => userController.createUser(req, res, next),
);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Return a list of users.
 *     responses:
 *       200:
 *         description: List of users.
 */
userRouter.get('', (req, res, next) =>
    userController.findAllUsers(req, res, next),
);

// Routes protected by authentication middleware

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Return a user by ID.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Return the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseUser'
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized access.
 */
userRouter.get('/me', authencationMiddleware, (req, res, next) =>
    userController.findUserById(req, res, next),
);

/**
 * @swagger
 * /users/me:
 *   put:
 *     summary: Update a user by ID.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateUser'
 *     responses:
 *       200:
 *         description: Return the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseUser'
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized access.
 *       400:
 *         description: User already exists or invalid data.
 */
userRouter.put(
    '/me',
    authencationMiddleware,
    validateBodyMiddleware(updateUserSchema),
    (req, res, next) => userController.updateUser(req, res, next),
);

/**
 * @swagger
 * /users/me:
 *   delete:
 *     summary: Delete a user by ID.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Return the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/responseUser'
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized access.
 */
userRouter.delete('/me', authencationMiddleware, (req, res, next) =>
    userController.deleteUser(req, res, next),
);

export default userRouter;
