import { z } from "zod";

export const SignInSchema = z.object({
  nic: z
    .string({ message: "NIC number is required" })
    .min(9, "NIC must be at least 9 characters long")
    .max(12, "NIC must not exceed 12 characters"),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Must be at least 8 characters"),
});

export type SignInSchemaType = z.output<typeof SignInSchema>;
