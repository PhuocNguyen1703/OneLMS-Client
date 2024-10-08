import SignInForm from "@/components/auth/SignInForm";

const SignIn = () => {
  return (
    <section className="w-[470px] p-10 border">
      <h1 className="text-4xl font-bold text-center">Welcome</h1>
      <SignInForm />
    </section>
  );
};

export default SignIn;
