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
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

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
  const result = await handleFormAction(
    SignInSchema,
    formData,
    authApiRequest.signIn
  );

  if (result.data?.tokens) {
    const cookieStore = await cookies();
    const { accessToken, refreshToken } = result.data.tokens;

    const accessTokenExp = jwtDecode(accessToken).exp as number;
    const refreshTokenExp = jwtDecode(refreshToken).exp as number;

    if (accessToken) {
      cookieStore.set("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: accessTokenExp - Math.floor(Date.now() / 1000),
      });
    }
    if (refreshToken) {
      cookieStore.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: refreshTokenExp - Math.floor(Date.now() / 1000),
      });
    }

    result.data.tokenExp = accessTokenExp;
    delete result.data.tokens;
  }
  console.log(result);

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
