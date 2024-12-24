import OtpForm from "@/features/auth/components/OtpForm";

const VerifyAccount = () => {
  return (
    <div className="relative">
      <h1 className="text-3xl font-bold text-center">
        Please check your email.
      </h1>
      <p className="text-base text-center">
        We&apos;ve emailed a 6-digit confirmation code. Please enter the code in
        below box to verify your email.
      </p>
      <OtpForm />
      <span className="block mt-5 text-center">
        Don&apos;t receive code? <strong>Resend code</strong>
      </span>
    </div>
  );
};

export default VerifyAccount;
