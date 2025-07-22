"use server";

import { ZodSchema } from "zod";
import authApiRequest from "@/apiRequests/auth";
import {
  ForgotPasswordBodyType,
  ForgotPasswordSchema,
  OTPBodyType,
  OTPSchema,
  ResetPasswordBodyType,
  ResetPasswordSchema,
  SignInBodyType,
  SignInSchema,
} from "../schemas";

export async function handleFormAction<T extends object, R>(
  schema: ZodSchema<T>,
  formData: T,
  apiRequest: (data: T) => Promise<R>
) {
  const validatedFields = schema.safeParse(formData);

  if (!validatedFields.success) {
    const error = validatedFields.error.flatten().fieldErrors as Record<
      string,
      string[]
    >;
    return {
      success: false,
      type: "Validation in server action.",
      message: Object.values(error)[0]?.[0] || "Invalid input",
    };
  }

  try {
    const result: any = await apiRequest(formData);
    return {
      success: true,
      data: result.payload?.data ?? result,
    };
  } catch (error: any) {
    const errors = error?.payload?.errors?.error;

    return {
      success: false,
      type: "server",
      message:
        errors?.fields?.[0]?.message ||
        errors?.message ||
        "Something went wrong!",
    };
  }
}

export const signIn = async (formData: SignInBodyType) => {
  return handleFormAction(SignInSchema, formData, authApiRequest.signIn);
};

export const verifyEmail = async (formData: OTPBodyType) => {
  return handleFormAction(OTPSchema, formData, authApiRequest.verifyEmail);
};

export const forgotPassword = async (formData: ForgotPasswordBodyType) => {
  return handleFormAction(
    ForgotPasswordSchema,
    formData,
    authApiRequest.forgotPassword
  );
};

export const resetPassword = async (formData: ResetPasswordBodyType) => {
  return handleFormAction(
    ResetPasswordSchema,
    formData,
    authApiRequest.resetPassword
  );
};
