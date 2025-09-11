"use client";

import { zodResolver } from "@/hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { object, string, z } from "zod";

import { Modal } from "@/components/modal";
import ModalHeader from "@/components/modal/ModalHeader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { noImagePlaceholder } from "@/public/images";
import { Label } from "@/components/ui/label";
import { ImageUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const CreateCampus = () => {
  const CampusSchema = object({
    campusId: string(string({
        error: (issue) => issue.input === undefined ? "" : undefined
    }).min(1)),
    phoneNumber: string(string({
        error: (issue) => issue.input === undefined ? "" : undefined
    }).min(1)),
    campusName: string({
        error: (issue) => issue.input === undefined ? "" : undefined
    }).min(1).max(32),
    address: string({
        error: (issue) => issue.input === undefined ? "" : undefined
    }).min(1).max(32),
  });

  const form = useForm<z.infer<typeof CampusSchema>>({
    resolver: zodResolver(CampusSchema),
    defaultValues: {
      campusId: "",
      phoneNumber: "",
      campusName: "",
      address: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CampusSchema>) => {
    console.log(data);
  };

  return (
    <Modal>
      <div className="w-[700px] p-4 rounded-lg bg-white">
        <ModalHeader />

        <Form {...form}>
          <form className="mt-10 w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-5">
              <div className="flex flex-col select-none">
                <span className="text-base font-semibold">Campus Image</span>
                <Image
                  src={noImagePlaceholder}
                  priority
                  style={{ width: "220px", height: "auto" }}
                  alt="cover"
                />
                <Label
                  htmlFor="upload-image"
                  className="flex-center w-fit px-3 py-2 mt-2 gap-1 border rounded-sm cursor-pointer hover:bg-gray-200"
                >
                  <ImageUp size={16} />
                  Upload
                </Label>
                <Input id="upload-image" type="file" className="hidden" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="campusId"
                    render={({ field }) => (
                      <FormItem className="w-[170px] space-y-0">
                        <FormLabel>Campus ID</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-0">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="campusName"
                  render={({ field }) => (
                    <FormItem className="mt-5 space-y-0">
                      <FormLabel>Campus Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="mt-5 space-y-0">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="w-fit ml-auto space-x-2">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateCampus;
