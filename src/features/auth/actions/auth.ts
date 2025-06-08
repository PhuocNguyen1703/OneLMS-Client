import { SignInBodyType } from "@/features/auth/schemas/signInSchema";
import { SignUpBodyType } from "../schemas/signUpSchema";
import authApiRequest from "@/apiRequests/auth";
import { useRouter } from "next/navigation";
import { OTPBodyType } from "../schemas/otpSchema";

export const SignIn = () => {
  const router = useRouter();
  const onSubmit = async (data: SignInBodyType) => {
    console.log(data);

    try {
      const result: any = await authApiRequest.signIn(data);

      // if (!result.payload.data.verify.status) {
      //   const userId = result.payload.data._id;
      //   router.push(`/verify/${userId}`);
      // } else {
      //   await authApiRequest.auth({
      //     accessToken: (result as any).payload.data.accessToken,
      //   });
      //   router.push("/");
      // }
      console.log(result);
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
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
  const onSubmit = async (data: OTPBodyType) => {
    console.log(data);
  };
  return onSubmit;
};