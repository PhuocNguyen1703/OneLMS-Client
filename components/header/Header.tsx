"use client";

import { AlignStartVertical, Bell, Search, SquareMenu } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setSidebarCollapsed } from "@/redux/slices/layoutSlice";
import Link from "next/link";
import Logo from "../Logo";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(setSidebarCollapsed());
  };

  return (
    <header className="flex items-center justify-between h-navbar p-2 bg-white">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={handleToggleSidebar}
        >
          <SquareMenu size={20} />
        </Button>
        <Link href="/" className="flex items-center">
          <Logo width={39} height={39} />
          <p className="ml-1 text-primary text-2xl font-bold select-none">
            OneLMS
          </p>
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="outline" size="icon" className=" rounded-full">
          <Search size={20} />
        </Button>
        <Button variant="outline" size="icon" className="relative rounded-full">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-red-800"></span>
        </Button>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
