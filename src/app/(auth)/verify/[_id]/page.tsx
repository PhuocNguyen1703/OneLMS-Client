import OtpForm from "@/features/auth/components/OtpForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const VerifyAccount = async ({
  params,
}: {
  params: Promise<{ _id: string }>;
}) => {
  const { _id } = await params;
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
          <h1 className="text-3xl font-bold text-center">Verify Account</h1>
          <p className="text-base text-center">
            We&apos;ve emailed a 6-digit confirmation code. Please enter the
            code in below box to verify your account.
          </p>
        </div>
        <OtpForm userId={_id} />
        <span className="block mt-5 text-center">
          Don&apos;t receive code? <strong>Resend code</strong>
        </span>
      </div>
    </>
  );
};

export default VerifyAccount;
