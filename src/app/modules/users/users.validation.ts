import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    phoneNumber: z.string({
      required_error: 'Phone Number is required',
    }),
    role: z.string({
      required_error: 'Role is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    name: z.object({
      firstName: z.string({
        required_error: 'First Name is required',
      }),
      lastName: z.string({
        required_error: 'Last Name is required',
      }),
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    budget: z.string({
      required_error: 'Budget is required',
    }),
    income: z.string({
      required_error: 'Income is required',
    }),
  }),
});

export const userValidation = {
  createUserZodSchema,
};
