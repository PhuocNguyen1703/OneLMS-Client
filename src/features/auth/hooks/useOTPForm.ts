import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OTPSchema, OTPBodyType } from "../schemas/otpSchema";
import { VerifyAccount } from "../actions/auth";

export const useOTPForm = () => {
  const form = useForm<OTPBodyType>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = VerifyAccount();

  return { form, onSubmit };
};
