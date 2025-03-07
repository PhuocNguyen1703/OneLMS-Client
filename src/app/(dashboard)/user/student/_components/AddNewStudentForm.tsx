"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeInfo, GraduationCap, MapPinHouse } from "lucide-react";
import { useForm } from "react-hook-form";
import { object, string, z } from "zod";

const PersonalInfoSchema = object({
  test: string(),
});

const AddNewStudentForm = () => {
  const form = useForm<z.infer<typeof PersonalInfoSchema>>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: z.infer<typeof PersonalInfoSchema>) => {};

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="lg:w-[350px]">
          <CardContent className="flex flex-col items-center mt-12">
            <div className="w-fit p-2 border rounded-full">
              <Avatar className="w-32 h-32">
                <AvatarImage src="" alt="avatar" className="object-cover" />
                <AvatarFallback>Avatar</AvatarFallback>
              </Avatar>
            </div>
            <span className="mt-6 text-sm text-gray-500 text-center">
              Allowed *.jpeg, *.jpg, *.png, *.gif
              <br /> max size of 3 Mb
            </span>
            <div className="flex-center justify-between space-x-3 w-full mt-10">
              <Label htmlFor="verify-email" className="flex flex-col">
                <span className="text-base">Email verified</span>
                <span className="text-gray-500 font-normal">
                  Disabling this will automatically send the user a verification
                  email
                </span>
              </Label>

              <Switch id="verify-email" />
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="py-4 border-b bg-blue-50">
            <span className="flex-center gap-2 font-semibold text-xl">
              <BadgeInfo />
              Personal Information
            </span>
          </CardHeader>
          <CardContent className="pt-6">
            <Form {...form}>
              <form
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-5"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader className="py-4 border-b bg-blue-50">
          <span className="flex-center gap-2 font-semibold text-xl">
            <MapPinHouse />
            Address
          </span>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form
              className="flex flex-col 2xl:flex-row gap-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col 2xl:flex-row gap-5 flex-1">
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Current Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Permanent Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader className="py-4 border-b bg-blue-50">
          <span className="flex-center gap-2 font-semibold text-xl">
            <GraduationCap />
            Academic
          </span>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="test"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Academic Year</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="test"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Admission Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddNewStudentForm;
