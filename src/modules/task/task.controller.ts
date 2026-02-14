import { Response, Request, NextFunction } from 'express';
import { CreateTaskDto } from './task.schema';
import TaskService from './task.service';

class TaskController {
    constructor(private readonly taskService: TaskService) {}

    async createTask(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            const data: CreateTaskDto = req.body;
            const task = await this.taskService.createTask(userId, data);
            res.status(201).json(task);
        } catch (error) {
            next(error);
        }
    }

    async findAllTasks(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            const tasks = await this.taskService.findAllTasks(userId);
            res.status(200).json(tasks);
        } catch (error) {
            next(error);
        }
    }

    async findTaskById(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            const taskId = this.getTaskId(req.params.id);
            const task = await this.taskService.findTaskById(userId, taskId);
            res.status(200).json(task);
        } catch (error) {
            next(error);
        }
    }

    async updateTask(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            const taskId = this.getTaskId(req.params.id);
            const data = req.body;
            const updatedTask = await this.taskService.updateTask(
                userId,
                taskId,
                data,
            );
            res.status(200).json(updatedTask);
        } catch (error) {
            next(error);
        }
    }

    async deleteTask(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user!.id;
            const taskId = this.getTaskId(req.params.id);
            const deletedTask = await this.taskService.deleteTask(
                userId,
                taskId,
            );
            res.status(200).json(deletedTask);
        } catch (error) {
            next(error);
        }
    }

    private getTaskId(id: string | string[]): string {
        if (Array.isArray(id)) {
            return id[0];
        }

        return id;
    }
}

export default TaskController;
