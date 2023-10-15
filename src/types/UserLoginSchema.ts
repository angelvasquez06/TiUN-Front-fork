import {z} from 'zod';

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export type LoginDataType = z.infer<typeof loginSchema>;
