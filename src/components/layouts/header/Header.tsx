"use client";

import { Bell, Search } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { toggleSidebar } from "@/redux/slices/layoutSlice";
import { HeaderLogo } from "./HeaderLogo";

const Header = () => {

  return (
    <header className="flex items-center justify-between gap-10  p-2 pr-4">
      <HeaderLogo />
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
