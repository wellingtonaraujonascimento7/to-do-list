import AppError from '../../shared/errors/app.erro';
import TaskRepository from './task.repository';
import { CreateTaskDto, ResponseTaskDto, UpdateTaskDto } from './task.schema';

class TaskService {
    constructor(private readonly taskRepository: TaskRepository) {}

    async createTask(
        userId: string,
        createTaskDto: CreateTaskDto,
    ): Promise<ResponseTaskDto> {
        return this.taskRepository.createTask(userId, createTaskDto);
    }

    async findAllTasks(userId: string): Promise<ResponseTaskDto[]> {
        return this.taskRepository.findAllTasks(userId);
    }

    async findTaskById(
        userId: string,
        taskId: string,
    ): Promise<ResponseTaskDto> {
        const task = await this.taskRepository.findTaskById(userId, taskId);
        if (!task) {
            throw new AppError('Task not found', 404);
        }
        return task;
    }

    async updateTask(
        userId: string,
        taskId: string,
        updateTaskDto: UpdateTaskDto,
    ): Promise<ResponseTaskDto> {
        const updatedTask = await this.taskRepository.updateTask(
            userId,
            taskId,
            updateTaskDto,
        );
        if (!updatedTask) {
            throw new AppError('Task not found', 404);
        }
        return updatedTask;
    }

    async deleteTask(userId: string, taskId: string): Promise<ResponseTaskDto> {
        const deletedTask = await this.taskRepository.deleteTask(
            userId,
            taskId,
        );
        if (!deletedTask) {
            throw new AppError('Task not found', 404);
        }
        return deletedTask;
    }
}

export default TaskService;
