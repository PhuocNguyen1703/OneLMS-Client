import SignInForm from "@/components/auth/SignInForm";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  return (
    <div className="relative w-[470px] p-10  ">
      <h1 className="text-4xl font-bold text-center">Welcome</h1>
      <p className="mt-2 text-base text-center">
        Welcome back! Please sign in to continue.
      </p>
      {/* <div className="flex items- gap-8 mt-5">
        <Button variant="outline" className="w-full gap-1 h-12 text-base">
          <Facebook />
          <p>Google</p>
        </Button>
        <Button variant="outline" className="w-full gap-1 h-12 text-base">
          <Facebook />
          <p>Facebook</p>
        </Button>
      </div>
      <div className="relative mt-5 text-center after:absolute after:top-1/2 after:left-0 after:h-[1px] after:w-full after:bg-gray-300">
        <span className="relative px-2 bg-primary-foreground z-10 cursor-default select-none">
          or
        </span>
      </div> */}
      <SignInForm />
      <p className="block mt-5 text-center">
        Don&apos;t have an account? <strong>Sign up</strong>
      </p>
    </div>
  );
};

export default SignIn;
