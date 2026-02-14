import z from 'zod';

export const loginSchema = z.object({
    email: z.email({ error: 'Invalid email address' }),
    password: z.string().min(6),
});

export type LoginDto = z.infer<typeof loginSchema>;
