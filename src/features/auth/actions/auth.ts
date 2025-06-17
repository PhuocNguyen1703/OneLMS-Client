import { SignInBodyType } from "@/features/auth/schemas/signInSchema";
import { SignUpBodyType } from "../schemas/signUpSchema";
import authApiRequest from "@/apiRequests/auth";
import { useRouter } from "next/navigation";
import { OTPBodyType } from "../schemas/otpSchema";
import { toast } from "sonner";
import { useState } from "react";
import { useAlertDialog } from "@/hooks/showAlertDialog";
import { ForgotPasswordBodyType } from "../schemas/forgotPasswordSchema";
import useAuthStore from "@/stores/auth.store";

type FieldError = { field: string; message: string };

export const SignIn = () => {
  const { setAuthState } = useAuthStore();
  const showAlertDialog = useAlertDialog();
  const router = useRouter();

  const onSubmit = async (data: SignInBodyType) => {
    console.log(data);

    setAuthState({ isLoading: true, error: null });
    try {
      const result: any = await authApiRequest.signIn(data);

      const { _id, verify, accessToken } = result.payload.data;

      if (!verify.status) {
        showAlertDialog({
          onAction: () => {
            router.push(`/verify/${_id}`);
          },
        });
        setAuthState({ isLoading: false });
      } else {
        await authApiRequest.auth({
          accessToken,
        });
        router.push("/");
        setAuthState({ isAuthenticated: true, isLoading: false });
      }
    } catch (error: any) {
      const errors = error?.payload?.errors?.error?.fields as
        | FieldError[]
        | undefined;
      setAuthState({
        isLoading: false,
        error: errors || [
          { field: "unknown", message: "Something went wrong!" },
        ],
      });
    }
  };
  return onSubmit;
};

export const SignUp = () => {
  const onSubmit = async (data: SignUpBodyType) => {
    console.log(data);
  };
  return onSubmit;
};

export const VerifyAccount = () => {
  const router = useRouter();
  const onSubmit = async (data: OTPBodyType) => {
    console.log(data);

    try {
      // const result: any = await authApiRequest.verifyAccount(data);
      // console.log(result);
      toast.success("Account verified successfully", {
        description: "You can now login to your account",
      });
      router.push("/sign-in");
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };
  return onSubmit;
};

export const ForgotPassword = () => {
  const onSubmit = async (data: ForgotPasswordBodyType) => {
    console.log(data);
  };

  return onSubmit;
};
