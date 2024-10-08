import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import SignInForm from "@/components/auth/SignInForm";

const SignIn = () => {
  return (
    <>
      {/* <section className="w-[470px] p-10 border">
        <h1 className="text-4xl font-bold text-center">Welcome</h1>
        <SignInForm />
      </section> */}
      <section className="w-[470px] p-10 border">
        <h1 className="text-4xl font-bold text-center">Password Recovery</h1>
        <p className="m-2 text-gray-400">
          Enter your registered email address. We&apos;ll send you a code to
          reset your password.
        </p>
        <ResetPasswordForm />
      </section>
    </>
  );
};

export default SignIn;
