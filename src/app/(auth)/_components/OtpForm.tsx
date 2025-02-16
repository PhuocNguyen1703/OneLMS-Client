"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const OtpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col mt-5 items-center"
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="h-[60px] gap-4">
                    <InputOTPSlot
                      className="h-full text-2xl border-l rounded-md"
                      index={0}
                    />
                    <InputOTPSlot
                      className="h-full text-2xl border-l rounded-md"
                      index={1}
                    />
                    <InputOTPSlot
                      className="h-full text-2xl border-l rounded-md"
                      index={2}
                    />
                    <InputOTPSlot
                      className="h-full text-2xl border-l rounded-md"
                      index={3}
                    />
                    <InputOTPSlot
                      className="h-full text-2xl border-l rounded-md"
                      index={4}
                    />
                    <InputOTPSlot
                      className="h-full text-2xl border-l rounded-md"
                      index={5}
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
            </FormItem>
          )}
        />

        <Button className="w-2/3 h-12 mt-5 text-base" type="submit">
          Verify Account
        </Button>
      </form>
    </Form>
  );
};

export default OtpForm;
