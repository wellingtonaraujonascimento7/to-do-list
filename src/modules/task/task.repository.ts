import { PrismaClient } from '../../shared/database/generated/client';
import { CreateTaskDto, ResponseTaskDto, UpdateTaskDto } from './task.schema';

class TaskRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async createTask(
        userId: string,
        createTaskDto: CreateTaskDto,
    ): Promise<ResponseTaskDto> {
        return this.prisma.task.create({
            data: {
                ...createTaskDto,
                userId,
            },
        });
    }

    async findAllTasks(userId: string): Promise<ResponseTaskDto[]> {
        return this.prisma.task.findMany({
            where: {
                userId,
            },
        });
    }

    async findTaskById(
        userId: string,
        taskId: string,
    ): Promise<ResponseTaskDto | null> {
        return this.prisma.task.findFirst({
            where: {
                id: taskId,
                userId,
            },
        });
    }

    async updateTask(
        userId: string,
        taskId: string,
        updateTaskDto: UpdateTaskDto,
    ): Promise<ResponseTaskDto> {
        return this.prisma.task.update({
            where: {
                id: taskId,
                userId,
            },
            data: updateTaskDto,
        });
    }

    async deleteTask(userId: string, taskId: string): Promise<ResponseTaskDto> {
        return this.prisma.task.delete({
            where: {
                id: taskId,
                userId,
            },
        });
    }
}

export default TaskRepository;
