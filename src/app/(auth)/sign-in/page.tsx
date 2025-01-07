import SignInForm from "@/features/auth/components/SignInForm";

const SignIn = () => {
  return (
    <div className="relative">
      <h1 className="text-4xl font-bold text-center">Welcome</h1>
      <p className="mt-2 text-base text-center">
        Welcome back! Please sign in to continue.
      </p>
      <SignInForm />
    </div>
  );
};

export default SignIn;
