import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPassword } from "../actions/auth";
import {
  ForgotPasswordBodyType,
  ForgotPasswordSchema,
} from "../schemas/forgotPasswordSchema";

export const useForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordBodyType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email_or_phone: "",
    },
  });

  const onSubmit = ForgotPassword();

  return { form, onSubmit };
};
