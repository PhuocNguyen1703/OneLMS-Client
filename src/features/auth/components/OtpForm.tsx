"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useOTPForm } from "../hooks/useOTPForm";

const OtpForm = ({ userId }: { userId: string }) => {
  const { form, onSubmit } = useOTPForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data, userId))}
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
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-2/3 h-12 mt-5 text-base" type="submit">
          Send OTP
        </Button>
      </form>
    </Form>
  );
};

export default OtpForm;
