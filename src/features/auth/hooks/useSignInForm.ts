import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInBodyType } from "../schemas/signInSchema";
import { SignIn } from "../actions/auth";

export const useSignInForm = () => {
  const form = useForm<SignInBodyType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = SignIn();

  return { form, onSubmit };
};
