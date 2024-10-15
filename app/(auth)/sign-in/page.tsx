"use client";

import SignInForm from "@/components/auth/SignInForm";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

const SignIn = () => {
  return (
    <div className="relative w-[470px] p-10 rounded-md bg-white">
      <h1 className="text-4xl font-bold text-center">Sign in to Rainbow</h1>
      <p className="text-base text-center">
        Welcome back! Please sign in to continue.
      </p>
      <div className="flex items- gap-8 mt-5">
        <Button variant="outline" className="w-full gap-1 h-12 text-base">
          <Facebook />
          <p>Google</p>
        </Button>
        <Button variant="outline" className="w-full gap-1 h-12 text-base">
          <Facebook />
          <p>Facebook</p>
        </Button>
      </div>
      <div className="relative mt-5 text-center after:absolute after:top-1/2 after:left-0 after:h-[1px] after:w-full after:bg-muted-foreground">
        <span className="relative px-2 bg-white z-10 cursor-default select-none">
          or
        </span>
      </div>
      <SignInForm />
      <p className="block mt-5 text-center">
        Don&apos;t have an account? <strong>Sign up</strong>
      </p>
    </div>
  );
};

export default SignIn;
