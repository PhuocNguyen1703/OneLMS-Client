"use client";

import { AlignStartVertical, Bell } from "lucide-react";
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
    <header className="flex items-center justify-between p-4 pl-1">
      <div className="flex items-center">
        <Button
          variant="outline"
          className=" w-10 h-10 p-2"
          onClick={handleToggleSidebar}
        >
          <AlignStartVertical />
        </Button>
        <SearchBar />
      </div>
      <div className="flex items-center gap-5">
        <div className="relative p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300">
          <Bell />
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white rounded-full bg-red-800">
            2
          </span>
        </div>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
