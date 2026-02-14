import z from 'zod';

const userSchema = z.object({
    id: z.uuid(),
    name: z.string().min(3).max(80),
    email: z.email(),
    password: z.string().min(6).max(80),
    createdAt: z.date(),
    updatedAt: z.date(),
});

const createUserSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});

const updateUserSchema = createUserSchema.partial();

export type UserSchema = z.infer<typeof userSchema>;
export type CreateUserDto2 = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;

export { userSchema, createUserSchema, updateUserSchema };
