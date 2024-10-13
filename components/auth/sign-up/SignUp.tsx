import SignUpForm from "@/components/auth/sign-up/SignUpForm";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";

const SignUp = () => {
  return (
    <Modal>
      <section className="relative w-[470px] p-10 rounded-md bg-white">
        <Button
          variant="ghost"
          className="absolute top-4 right-4 w-fit h-fit p-0 rounded-full"
        >
          <CircleX />
        </Button>
        <h1 className="text-4xl font-bold text-center">Create Your Account</h1>
        <p className="text-base text-center">
          Welcome! Please fill in the details to get started.
        </p>
        <SignUpForm />
        <span className="block mt-5 text-center">
          Already have an account? <strong>Sign In</strong>
        </span>
      </section>
    </Modal>
  );
};

export default SignUp;
