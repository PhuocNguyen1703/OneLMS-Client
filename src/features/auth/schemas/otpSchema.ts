import { z } from "zod";

export const OTPSchema = z.object({
  _id: z.string(),
  pin: z
    .string()
    .min(6, {
      message: "Your one-time password must be 6 characters.",
    })
    .max(6, {
      message: "Your one-time password must be 6 characters.",
    }),
});

export type OTPBodyType = z.infer<typeof OTPSchema>;
