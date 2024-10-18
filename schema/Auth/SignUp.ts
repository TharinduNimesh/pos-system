import { z } from "zod";

enum EnumBusinessType {
  StockBased = "StockBased",
  ServiceBased = "ServiceBased",
}

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
  business_id: z
    .string({ message: "Business id is required" })
    .regex(
      /^[a-zA-Z0-9]+$/,
      "Business id should contain only letters and numbers"
    ),
  total_branches: z
    .number({ message: "Total branches is required and must be a number" })
    .min(1, "Total branches must be at least 1"),
  total_employees: z
    .number({ message: "Total cashiers is required and must be a number" })
    .min(1, "Total cashiers must be at least 1"),
  business_type: z.object(
    {
      id: z.number({ message: "Business type id is required" }),
      name: z.string({ message: "Business type is required" }),
      business_type: z.nativeEnum(EnumBusinessType),
    },
    { message: "Business type is required" }
  ),
  business_category: z
    .object(
      {
        id: z.string({ message: "Business category id is required" }),
        name: z.string({ message: "Business category is required" }),
      },
      { message: "Business category is required" }
    )
    .optional(),
});

export type SignUpSchemaType = z.output<typeof SignUpSchema>;
