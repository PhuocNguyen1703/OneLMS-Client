"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { Label } from "@/components/ui/label";
import { FileUp, ImageUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { noImagePlaceholder } from "../../../../../public/images";
import { Separator } from "@/components/ui/separator";

const AddNewNoticeForm = () => {
  const CampusSchema = object({
    title: string(string({ required_error: "" }).min(1)),
    notice_date: string(string({ required_error: "" }).min(1)),
    publish_on: string(string({ required_error: "" }).min(1)),
  });

  const form = useForm<z.infer<typeof CampusSchema>>({
    resolver: zodResolver(CampusSchema),
    defaultValues: {
      title: "",
      notice_date: "",
      publish_on: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CampusSchema>) => {
    console.log(data);
  };

  return (
    <Modal>
      <div className="w-[500px] rounded-lg bg-white">
        <div className="flex-center justify-between p-4 border-b">
          <h3>New Notice</h3>
          <Button variant="outline" className="size-fit p-1">
            <X size={16} />
          </Button>
        </div>
        <Form {...form}>
          <form
            className="flex flex-col gap-5 w-full h-[700px] px-4 py-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notice_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notice Date</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="publish_on"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Publish On</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="p-4 rounded-sm bg-secondary">
              <h5>Attachment</h5>
              <span className="text-sm">
                Upload size of 4MB, accepted format PDF
              </span>
              <Label
                htmlFor="upload-file"
                className="flex-center w-fit px-3 py-2 mt-4 gap-1 border rounded-sm cursor-pointer hover:bg-gray-200"
              >
                <FileUp size={16} />
                Upload
              </Label>
              <Input id="upload-file" type="file" className="hidden" />
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default AddNewNoticeForm;
