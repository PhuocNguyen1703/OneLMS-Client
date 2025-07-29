import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInBodyType } from "../schemas/signInSchema";
import { useRouter } from "next/navigation";
import { useAlertDialog } from "@/hooks/showAlertDialog";
import { useState } from "react";
import { signIn } from "../actions/auth";

export const useSignIn = () => {
  const router = useRouter();
  const showAlertDialog = useAlertDialog();
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<SignInBodyType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: SignInBodyType) => {
    if (isPending) return;

    setIsPending(true);
    try {
      const res = await signIn(formData);

      if (!res.success) {
        form.setError("root", {
          type: res.type,
          message: res.message,
        });
        return;
      }

      const { _id, isActive, tokenExp } = res.data;

      if (!isActive) {
        showAlertDialog({
          title: `Verify It's You`,
          description:
            "For your security, we need to verify your identity before you can proceed. Please complete the next step.",
          onAction: () => {
            router.push(`/verify-email/${_id}`);
          },
        });
      } else {
        if (tokenExp) {
          localStorage.setItem("tokenExp", tokenExp);
        }

        router.push("/");
      }
    } catch (error: any) {
      form.setError("root", {
        type: "server",
        message: "Something went wrong!",
      });
    } finally {
      setIsPending(false);
    }
  };

  return { form, isPending, onSubmit };
};
