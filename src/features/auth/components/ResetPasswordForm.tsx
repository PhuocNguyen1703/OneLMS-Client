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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const ResetPasswordForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="mt-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
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
        <Button className="w-full h-12 mt-10 text-base" type="submit">
          Send OTP
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
