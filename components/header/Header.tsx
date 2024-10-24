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
    <header className="flex items-center justify-between p-2 bg-white">
      <div className="flex items-center">
        <Button
          variant="ghost"
          className="p-2 rounded-full"
          onClick={handleToggleSidebar}
        >
          <SquareMenu />
        </Button>
        <Link href="/" className="flex items-center">
          <Logo width={39} height={39} />
          <p className="ml-1 text-primary text-2xl font-bold select-none">
            OneLMS
          </p>
        </Link>
      </div>
      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          className="w-10 h-10 p-0 border border-gray-300 rounded-full"
        >
          <Search size={18} />
        </Button>
        <Button
          variant="ghost"
          className="relative w-10 h-10 p-0 border border-gray-300 rounded-full"
        >
          <Bell size={18} />
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white rounded-full bg-red-800">
            2
          </span>
        </Button>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
