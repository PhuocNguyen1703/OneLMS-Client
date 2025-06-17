"use client";

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
import { cn } from "@/libs/utils";
import { useSignInForm } from "../hooks/useSignInForm";
import Link from "next/link";
import useAuthStore from "@/stores/auth.store";

const SignInForm = () => {
  const { isLoading, error } = useAuthStore();
  const { form, onSubmit } = useSignInForm();

  return (
    <>
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
                <FormLabel className="text-base text-primary">
                  Password
                </FormLabel>
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
          <Link
            href="/forgot-password"
            className="block w-fit mt-2 ml-auto underline-offset-2 hover:underline"
          >
            <span className=" text-sm font-medium">Forgot Password?</span>
          </Link>
          {error && error?.length > 0 && (
            <p className="mt-2 text-left text-sm font-medium select-none text-destructive">
              {error[0].message}
            </p>
          )}
          <Button className="w-full h-12 mt-10 text-base" type="submit">
            {isLoading ? "Loading" : "Sign In"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignInForm;
