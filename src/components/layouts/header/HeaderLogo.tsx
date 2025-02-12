import Link from "next/link";
import Logo from "../../Logo";

export const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-4 shrink-0 ">
      <Link
        href="/"
        className="flex items-center gap-1 shrink-0
        "
      >
        <Logo width={40} height={40} />
        <p className="text-2xl font-extrabold">OneLMS</p>
      </Link>
    </div>
  );
};
