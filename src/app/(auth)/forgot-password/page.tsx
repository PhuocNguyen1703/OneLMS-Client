import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link
          href="/sign-in"
          className="absolute top-5 left-5 flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
        >
          <ChevronLeft size={26} />
          <span className="text-base font-medium">Back</span>
        </Link>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <h1 className="text-3xl font-bold text-center">Find Your Account</h1>
          <p className="text-base text-center">
            Please enter your email address or mobile number to search for your
            account.
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </>
  );
};

export default ForgotPassword;
