import { Router } from 'express';
import { authController } from '..';
import validateBodyMiddleware from '../../shared/middlewares/validate-body.middleware';
import { loginSchema } from './auth.schema';

const authRouter = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Authenticate a user and return a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: User authenticated successfully.
 *       401:
 *         description: Invalid credentials.
 */
authRouter.post(
    '/login',
    validateBodyMiddleware(loginSchema),
    (req, res, next) => authController.login(req, res, next),
);

export default authRouter;
