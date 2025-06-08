import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpBodyType } from "../schemas/signUpSchema";
import { SignUp } from "../actions/auth";

export const useSignUpForm = () => {
  const form = useForm<SignUpBodyType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = SignUp();

  return { form, onSubmit };
};
