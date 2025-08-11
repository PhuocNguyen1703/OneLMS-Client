"use client";

import { zodResolver } from "@/hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, ChevronLeftIcon, FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/libs/utils";
import { format } from "date-fns";
import Link from "next/link";

const CreateNoticePage = () => {
  const CampusSchema = z.object({
    title: z.string().min(1),
    notice_date: z.date(),
    publish_on: z.date(),
  });

  const form = useForm<z.infer<typeof CampusSchema>>({
    resolver: zodResolver(CampusSchema),
    defaultValues: {
      title: "",
      notice_date: undefined,
      publish_on: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof CampusSchema>) => {
    console.log(data);
  };

  return (
    <section>
      <header className="flex items-center justify-between p-4">
        <Link href="/notice" className="flex items-center gap-1 w-fit">
          <ChevronLeftIcon strokeWidth={2} />
          Back
        </Link>
        <h1>Create New Notice</h1>
        <Button>Save Notice</Button>
      </header>
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
          <div className="flex gap-4 w-full">
            <FormField
              control={form.control}
              name="notice_date"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Notice Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "px-2 justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 opacity-50" size={18} />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="publish_on"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Publish Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "px-2 justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 opacity-50" size={18} />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
          </div>
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
    </section>
  );
};

export default CreateNoticePage;
