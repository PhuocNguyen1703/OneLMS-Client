"use client";

import { Bell, BookMarked, House, LayoutList, Search } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { HeaderLogo } from "./HeaderLogo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MenuList = [
  {
    title: "Home",
    icon: <House size={30} />,
    path: "/",
  },
  {
    title: "Student",
    icon: <BookMarked size={30} />,
    path: "/",
  },
  {
    title: "Teacher",
    icon: <BookMarked size={30} />,
    path: "/",
  },
  {
    title: "Guardian",
    icon: <BookMarked size={30} />,
    path: "/",
  },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-10 py-1.5 px-4 border-b">
      <div className="flex items-center gap-2">
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
      </div>
      <TooltipProvider>
        <div className="flex items-center gap-3">
          {MenuList.map((item) => (
            <Tooltip key={item.title}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="w-20">
                  {item.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <LayoutList size={20} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Menu</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative rounded-full"
              >
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-red-800"></span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
          <UserMenu />
        </div>
      </TooltipProvider>
    </header>
  );
};

export default Header;
