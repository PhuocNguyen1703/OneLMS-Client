import SignUpForm from "@/components/auth/SignUpForm";

const SignUp = () => {
  return (
    <section className="w-[470px] p-10 border">
      <h1 className="text-4xl font-bold text-center">Create New Account</h1>
      <SignUpForm />
    </section>
  );
};

export default SignUp;
