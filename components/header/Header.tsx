"use client";

import { Bell } from "lucide-react";
import SearchBar from "./Search";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-4">
      <SearchBar />
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
