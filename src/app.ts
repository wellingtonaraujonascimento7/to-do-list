import express from 'express';
import userRouter from './modules/user/user.route';
import globalErrorHandlerMiddleware from './shared/middlewares/global-error-handler.middleware';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use(globalErrorHandlerMiddleware);

export default app;
