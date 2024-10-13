import SignInForm from "@/components/auth/sign-in/SignInForm";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";

const SignIn = () => {
  return (
    <Modal>
      <section className="relative w-[470px] p-10 rounded-md bg-white">
        <Button
          variant="ghost"
          className="absolute top-4 right-4 w-fit h-fit p-0 rounded-full"
        >
          <CircleX />
        </Button>
        <h1 className="text-4xl font-bold text-center">Welcome</h1>
        <SignInForm />
      </section>
    </Modal>
  );
};

export default SignIn;
