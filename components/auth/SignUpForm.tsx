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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="mt-10" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center gap-5">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">First Name</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 rounded-[8px] text-base"
                    placeholder="First Name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Last Name</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 rounded-[8px] text-base"
                    placeholder="last Name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel className="text-base">Email</FormLabel>
              <FormControl>
                <Input
                  className="h-12 rounded-[8px] text-base"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
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
                <Input
                  className="h-12 rounded-[8px] text-base"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex items-center space-x-2 mt-5 text-sm leading-none">
          <Checkbox id="remember" />
          <span>
            I agree to the <strong>Terms &amp; Conditions</strong>
          </span>
        </div>
        <Button className="w-full h-12 mt-10 text-base" type="submit">
          Sign Up
        </Button>
        <span className="block mt-5 text-center">
          Already have an account? <strong>Sign In</strong>
        </span>
      </form>
    </Form>
  );
};

export default SignUpForm;
