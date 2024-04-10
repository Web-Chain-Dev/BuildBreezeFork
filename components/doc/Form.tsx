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

type DocumentationFormType = {
  title: string;
  content: string;
};

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title must be at least 1 character.",
  }),
  content: z.string().min(1, {
    message: "Content must be at least 1 character.",
  }),
});

const DocumentationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    let { title, content } = data;

    // Call createDocumentation with the extracted title and content
    const success = await createDoc({ title, content });

    if (success) {
      form.reset({
        title: "", // Reset the title field to an empty string
        content: "", // Reset the content field to an empty string
      });
      router.push("/documentation"); // Redirect to the documentation page or wherever you want
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col pb-2 items-center"
      >
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
          name="content"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <FormLabel className="text-gray-300 text-center md:max-w-[18vw]">
                Documentation Content
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Documentation Content"
                  {...field}
                  className="border-blue-500 text-center p-6 text-[20px] text-gray-200 rounded-[18px]"
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
