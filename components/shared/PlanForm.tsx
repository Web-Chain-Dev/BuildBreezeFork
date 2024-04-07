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
import { addUserToGitHubRepo } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

type PlanFormType = {
  repoName: string;
  repoOwner: string;
  buyerId: string;
};

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const PlanForm = ({ repoName, repoOwner, buyerId }: PlanFormType) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Extract the username from the form data
    const { username } = data;

    // Call addUserToGitHubRepo with the extracted username, repoOwner, and repoName
    const success = await addUserToGitHubRepo(
      buyerId,
      username,
      repoOwner,
      repoName,
    );

    if (success) {
      form.reset({
        username: "", // Reset the username field to an empty string
      });
    }

    router.push("/profile");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col pb-2 items-center"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center">
              <FormLabel className="text-gray-300 text-center">
                Make sure to enter your correct username
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your github username"
                  {...field}
                  className="border-blue-500  text-center p-6 text-[20px] text-gray-200 rounded-[18px]"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="p-6  bg-blue-500 hover:bg-blue-700 text-xl font-semibold rounded-xl text-white z-[10]"
        >
          Get Github Access
        </Button>
      </form>
    </Form>
  );
};

export default PlanForm;
