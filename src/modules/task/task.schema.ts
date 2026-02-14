import z from 'zod';

const taskSchema = z.object({
    id: z.string(),
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']),
    createdAt: z.date(),
    updatedAt: z.date(),
});

const createTaskSchema = taskSchema.omit({
    id: true,
    status: true,
    createdAt: true,
    updatedAt: true,
});

const updateTaskSchema = createTaskSchema.partial().extend({
    status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']).optional(),
});

export type Task = z.infer<typeof taskSchema>;
export type CreateTaskDto = z.infer<typeof createTaskSchema>;
export type UpdateTaskDto = z.infer<typeof updateTaskSchema>;

export type ResponseTaskDto = z.infer<typeof taskSchema>;

export { taskSchema, createTaskSchema, updateTaskSchema };
