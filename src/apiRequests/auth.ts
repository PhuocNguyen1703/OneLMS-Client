import {
  ForgotPasswordBodyType,
  OTPBodyType,
  ResetPasswordBodyType,
  SignInBodyType,
} from "@/features/auth/schemas";
import http from "@/libs/http";

const authApiRequest = {
  signIn: (body: SignInBodyType) => http.post("/api/auth/login", body),
  auth: (body: { accessToken: string }) =>
    http.post("/api/auth", body, {
      baseUrl: "",
    }),
  verifyEmail: (body: OTPBodyType) =>
    http.post(`/api/auth/verify-email/${body._id}`, { code: body.code }),
  forgotPassword: (body: ForgotPasswordBodyType) =>
    http.post("/api/auth/forgot-password", body),
  resetPassword: (body: ResetPasswordBodyType) =>
    http.post(`/api/auth/reset-password/${body.token}`, {
      password: body.password,
    }),
};

export default authApiRequest;
