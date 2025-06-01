"use client";

import { zodResolver } from "@/hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { SignInSchema } from "../schemas";
import { useSignInHandler } from "@/features/auth/hooks/useAuth";
import { cn } from "@/libs/utils";

const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useSignInHandler();

  return (
    <Form {...form}>
      <form className="mt-10" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-base text-primary">Email</FormLabel>
              <FormControl>
                <Input
                  className={form.formState.errors?.email && "input-err"}
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-5 space-y-1">
              <FormLabel className="text-base text-primary">Password</FormLabel>
              <FormControl>
                <PasswordInput
                  className={cn(
                    "pr-10",
                    form.formState.errors?.password && "input-err"
                  )}
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-2 text-right text-sm font-medium select-none">
          Forgot Password?
        </p>
        <Button className="w-full h-12 mt-10 text-base" type="submit">
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
