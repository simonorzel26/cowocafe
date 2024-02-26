"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/trpc/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EmailList() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const createEmail = api.emailList.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setEmail("");
    },
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createEmail.mutate({ email: email });
        }}
        className="flex flex-col gap-2"
      >
        <Input 
          className="max-w-lg flex-1" 
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <Button type="submit">
          {createEmail.isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        Sign up to get notified when we launch.
        <Link className="underline underline-offset-2" href="#">
          Terms & Conditions
        </Link>
      </p>
    </>
  );
}
