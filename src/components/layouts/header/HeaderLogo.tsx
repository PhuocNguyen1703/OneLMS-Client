import { toggleSidebar } from "@/redux/slices/layoutSlice";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../../Logo";
import { Menu } from "lucide-react";

export const HeaderLogo = () => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex items-center gap-4 shrink-0 ">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full shrink-0"
        onClick={handleToggleSidebar}
      >
        <Menu size={24} />
      </Button>
      <Link
        href="/"
        className="flex items-center shrink-0
        "
      >
        <Logo width={30} height={30} />
        <p className="ml-1 text-primary text-xl font-bold select-none">
          OneLMS
        </p>
      </Link>
    </div>
  );
};
