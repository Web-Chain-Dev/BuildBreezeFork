"use client";

import React from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { createDoc } from "@/lib/actions/docs.actions";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title must be at least 1 character.",
  }),
  content: z.string().min(1, {
    message: "Content must be at least 1 character.",
  }),
  library: z.string().min(1, {
    message: "Library must be at least 1 character.",
  }),
  filename: z.string().min(1, {
    message: "Filename must be at least 1 character.",
  }),
  description: z.string().min(1, {
    message: "Description must be at least 1 character.",
  }),
});

const DocumentationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      library: "",
      filename: "", // Add default value for filename
      description: "", // Add default value for description
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    let { title, content, library, filename, description } = data; // Destructure filename and description

    const success = await createDoc({
      title,
      content,
      library,
      filename,
      description,
    }); // Pass filename and description

    if (success) {
      form.reset({
        title: "",
        content: "",
        library: "",
        filename: "", // Reset filename
        description: "", // Reset description
      });
      router.push("/doc/starting-out");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col pb-2 items-center"
      >
        {/* Title and Library fields remain unchanged */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <FormLabel className="text-gray-300 text-center md:max-w-[18vw]">
                Documentation Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Documentation Title"
                  {...field}
                  className="border-blue-500 text-center p-6 text-[20px] text-gray-200 rounded-[18px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="library"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <FormLabel className="text-gray-300 text-center md:max-w-[18vw]">
                Library
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Library Name"
                  {...field}
                  className="border-blue-500 text-center p-6 text-[20px] text-gray-200 rounded-[18px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="filename"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <FormLabel className="text-gray-300 text-center md:max-w-[18vw]">
                File Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Filename"
                  {...field}
                  className="border-blue-500 text-center p-6 text-[20px] text-gray-200 rounded-[18px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <FormLabel className="text-gray-300 text-center md:max-w-[18vw]">
                Description
              </FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  className="border-blue-500 text-center p-6 text-[20px] text-gray-200 rounded-[18px] w-full"
                  rows={10} // Adjust the number of rows as needed
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content field now uses a textarea */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <FormLabel className="text-gray-300 text-center md:max-w-[18vw]">
                Documentation Content
              </FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  className="border-blue-500 text-center p-6 text-[20px] text-gray-200 rounded-[18px] w-full"
                  rows={10} // Adjust the number of rows as needed
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="p-6 bg-blue-500 hover:bg-blue-700 text-xl font-semibold rounded-xl text-white z-[10]"
        >
          Add Documentation
        </Button>
      </form>
    </Form>
  );
};

export default DocumentationForm;
