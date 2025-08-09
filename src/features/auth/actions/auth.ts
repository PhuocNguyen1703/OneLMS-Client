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
import { setAuthCookie } from "@/libs/setAuthCookie";

type ServerAFormActionRes<T = any> = {
  success: boolean;
  type?: string;
  message?: string;
  data?: T;
  tokenExp?: number;
};

export async function handleFormAction<T extends object, R>(
  schema: ZodSchema<T>,
  formData: T,
  apiRequest: (data: T) => Promise<R>
): Promise<ServerAFormActionRes<R>> {
  const validatedFields = schema.safeParse(formData);

  if (!validatedFields.success) {
    const error = validatedFields.error.flatten().fieldErrors as Record<
      string,
      string[]
    >;

    const firstError = Object.values(error)[0]?.[0];
    return {
      success: false,
      type: "Validation",
      message: firstError || "Invalid input",
    };
  }

  try {
    const result = await apiRequest(validatedFields.data);
    const payload = (result as any)?.payload?.data ?? result;

    return {
      success: true,
      data: payload,
    };
  } catch (error: any) {
    const errors = error?.payload?.errors?.error;
    const errorMessage =
      errors?.fields?.[0]?.message ||
      errors?.message ||
      "An error occurred from the server.";

    return {
      success: false,
      type: "Server",
      message: errorMessage,
    };
  }
}

export const signIn = async (
  formData: SignInBodyType
): Promise<ServerAFormActionRes> => {
  const result = await handleFormAction(
    SignInSchema,
    formData,
    authApiRequest.signIn
  );

  const condition = result.success && (result.data as any).tokens;

  if (condition) {
    const { accessToken, refreshToken } = (result.data as any).tokens;

    if (accessToken && refreshToken) {
      const tokenExp = await setAuthCookie("accessToken", accessToken);
      await setAuthCookie("refreshToken", refreshToken);

      return {
        success: true,
        data: {
          tokenExp,
          user: (result.data as any).user,
        },
      };
    }
  }
  return result;
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
