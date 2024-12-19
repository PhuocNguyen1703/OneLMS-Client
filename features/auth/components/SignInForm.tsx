"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import authApiRequest from "@/apiRequests/auth";

const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    try {
      const result: any = await authApiRequest.signIn(data);
      await authApiRequest.auth({
        accessToken: (result as any).payload.data.accessToken,
      });
      console.log(result);
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form className="mt-10" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
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
            <FormItem className="mt-5">
              <FormLabel className="text-base">Password</FormLabel>
              <FormControl>
                <PasswordInput
                  className="text-base pr-10"
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
