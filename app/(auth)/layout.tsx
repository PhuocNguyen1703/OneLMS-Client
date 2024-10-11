const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen background-auth">
      {children}
    </div>
  );
};

export default AuthLayout;
