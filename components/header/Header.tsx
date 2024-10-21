"use client";

import { AlignStartVertical, Bell, Search } from "lucide-react";
import SearchBar from "./Search";
import UserMenu from "./UserMenu";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setSidebarCollapsed } from "@/Redux/slices/layoutSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(setSidebarCollapsed());
  };

  return (
    <header className="flex items-center justify-between py-3 mx-4 border-b">
      <div className="flex items-center">
        <Button
          variant="outline"
          className="w-10 h-10 p-2"
          onClick={handleToggleSidebar}
        >
          <AlignStartVertical />
        </Button>
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
