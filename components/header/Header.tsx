"use client";

import { Bell, Menu, Search } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setSidebarCollapsed } from "@/redux/slices/layoutSlice";
import Link from "next/link";
import Logo from "../Logo";
import { Input } from "../ui/input";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(setSidebarCollapsed());
  };

  return (
    <header className="flex items-center justify-between gap-10  p-2 pr-4">
      <div className="flex items-center gap-4">
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
      <div className="flex items-center grow max-w-[500px] border rounded-full">
        <Input
          type="text"
          placeholder="Search..."
          className="border-none rounded-l-full focus-visible:ring-0"
        />
        <Button
          variant="secondary"
          className="p-0 px-4 border-l rounded-r-full"
        >
          <Search size={20} />
        </Button>
      </div>
      <div className="flex items-center space-x-3">
        {/* <Button variant="outline" size="icon" className=" rounded-full">
          <Search size={20} />
        </Button> */}
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
