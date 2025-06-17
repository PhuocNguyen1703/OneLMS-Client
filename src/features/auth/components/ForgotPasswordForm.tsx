"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForgotPasswordForm } from "../hooks/useForgotPasswordForm";

const ForgotPasswordForm = () => {
  const { form, onSubmit } = useForgotPasswordForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col mt-5 w-full"
      >
        <FormField
          control={form.control}
          name="email_or_phone"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormControl>
                <Input
                  className={
                    form.formState.errors?.email_or_phone && "input-err"
                  }
                  placeholder="Email address or mobile number."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-fit mt-5 mx-auto text-base" type="submit">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
