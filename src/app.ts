import express from 'express';
import userRouter from './modules/user/user.route';
import globalErrorHandlerMiddleware from './shared/middlewares/global-error-handler.middleware';
import swaggerSpec from './shared/config/swagger';
import swaggerUi from 'swagger-ui-express';
import authRouter from './modules/auth/auth.route';
import taskRouter from './modules/task/task.route';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/tasks', taskRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(globalErrorHandlerMiddleware);

export default app;
