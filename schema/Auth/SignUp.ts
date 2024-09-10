import { z } from "zod";

export const SignUpSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, "Name must be at least 3 characters long"),
  nic: z
    .string({ message: "NIC number is required" })
    .min(9, "NIC must be at least 9 characters long")
    .max(12, "NIC must not exceed 12 characters"),
  mobile: z
    .string({ message: "Mobile number is required" })
    .min(10, "Mobile number must be at least 10 characters long"),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address"),
  business_name: z.string({ message: "Business name is required" }),
  total_cashiers: z.number({ message: "Total cashiers is required" })
});

export type SignUpSchemaType = z.output<typeof SignUpSchema>;
