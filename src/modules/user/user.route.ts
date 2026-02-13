import { Router } from 'express';
import { userController } from '../../main';
import authencationMiddleware from '../../shared/middlewares/authentication.middleware';

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
 *             type: object
 *             required: [name, email, password]
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: User created successfully.
 */
userRouter.post('', (req, res, next) =>
    userController.createUser(req, res, next),
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
 * /users/{id}:
 *   get:
 *     summary: Return a user by ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: Dados do perfil
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized access.
 */
userRouter.get('/:id', authencationMiddleware, (req, res, next) =>
    userController.findUserById(req, res, next),
);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: newName
 *               email:
 *                 type: string
 *                 example: newEmail@example.com
 *               password:
 *                 type: string
 *                 example: newPassword123
 *
 *     responses:
 *       200:
 *         description: Dados do perfil
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized access.
 */
userRouter.put('/:id', authencationMiddleware, (req, res, next) =>
    userController.updateUser(req, res, next),
);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to delete.
 *     responses:
 *       200:
 *         description: Dados do perfil
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized access.
 */
userRouter.delete('/:id', authencationMiddleware, (req, res, next) =>
    userController.deleteUser(req, res, next),
);

export default userRouter;
