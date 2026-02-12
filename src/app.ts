import express from 'express';
import prisma from './shared/database/prisma';

const app = express();

app.use(express.json());

app.get('/', async (_, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

export default app;
