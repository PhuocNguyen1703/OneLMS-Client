import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
});

export type ForgotPasswordBodyType = z.infer<typeof ForgotPasswordSchema>;
