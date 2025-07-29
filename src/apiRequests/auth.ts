import {
  ForgotPasswordBodyType,
  OTPBodyType,
  ResetPasswordBodyType,
  SignInBodyType,
} from "@/features/auth/schemas";
import http from "@/libs/http";

const authApiRequest = {
  signIn: (body: SignInBodyType) => http.post("/api/auth/login", body),
  verifyEmail: (body: OTPBodyType) =>
    http.post(`/api/auth/verify-email/${body._id}`, { code: body.code }),
  forgotPassword: (body: ForgotPasswordBodyType) =>
    http.post("/api/auth/forgot-password", body),
  resetPassword: (body: ResetPasswordBodyType) =>
    http.post(`/api/auth/reset-password/${body.token}`, {
      password: body.password,
    }),
  signOutFromNextServerToServer: (accessToken: string) =>
    http.post(
      "/api/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ),
  signOutFromNextClientToNextServer: () =>
    http.post(
      "/api/auth/sign-out",
      {},
      {
        baseUrl: "",
      }
    ),
};

export default authApiRequest;
