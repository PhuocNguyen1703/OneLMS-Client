"use client";

import authApiRequest from "@/apiRequests/auth";
import { SignInSchema } from "@/features/auth/validation";
import { useRouter } from "next/navigation";
import { z } from "zod";

export const useSignInHandler = () => {
  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    console.log(data);

    // try {
    //   const result: any = await authApiRequest.signIn(data);

    //   if (!result.payload.data.verify.status) {
    //     const userId = result.payload.data._id;
    //     router.push(`/verify/${userId}`);
    //   } else {
    //     await authApiRequest.auth({
    //       accessToken: (result as any).payload.data.accessToken,
    //     });
    //     router.push("/");
    //   }
    //   console.log(result);
    // } catch (error) {
    //   console.log("An unexpected error occurred. Please try again.");
    // }
  };
  return onSubmit;
};

export const useSignOutHandler = () => {};
