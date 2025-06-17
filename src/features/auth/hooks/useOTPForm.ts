import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OTPSchema, OTPBodyType } from "../schemas/otpSchema";
import { VerifyAccount } from "../actions/auth";

export const useOTPForm = () => {
  const form = useForm<OTPBodyType>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      _id: "",
      pin: "",
    },
  });

  const verifyAccount = VerifyAccount();

  const onSubmit = (data: OTPBodyType, userId: string) => {
    verifyAccount({ ...data, _id: userId });
  };

  return { form, onSubmit };
};
