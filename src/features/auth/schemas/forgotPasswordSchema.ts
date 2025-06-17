import { z } from "zod";

const phoneRegex = /^(0|\+)[0-9]{8,13}$/;

export const ForgotPasswordSchema = z.object({
  email_or_phone: z
    .string()
    .trim()
    .refine(
      (val) => {
        const isEmail = z.string().email().safeParse(val).success;
        const isPhoneNumber = phoneRegex.test(val);

        return isEmail || isPhoneNumber;
      },
      { message: "Email or Phone number invalid" }
    ),
});

export type ForgotPasswordBodyType = z.infer<typeof ForgotPasswordSchema>;
