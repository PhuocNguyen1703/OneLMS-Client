"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import NavigationLink from "./NavigationLink";
import { useSelector } from "react-redux";
import { layoutSelector } from "@/redux/slices/layoutSlice";

export const LargeSidebarItem = ({ menu }: any) => {
  const { isLargeSidebarOpen, isSmallSidebarOpen } =
    useSelector(layoutSelector);
  const [toggleSubMenu, setToggleSubMenu] = useState<Boolean>(false);
  const handleToggleSubMenu = () => {
    setToggleSubMenu((prevState) => !prevState);
  };

  useEffect(() => {
    setToggleSubMenu(false);
  }, [isLargeSidebarOpen, isSmallSidebarOpen]);

  if (menu.subMenu) {
    return (
      <div
        className={cn("rounded-md select-none", toggleSubMenu && "bg-gray-100")}
      >
        <div
          className={cn(
            "flex items-center gap-[10px] p-2 rounded-sm whitespace-pre cursor-pointer hover:bg-slate-200",
            toggleSubMenu && "border-b"
          )}
          onClick={handleToggleSubMenu}
        >
          {menu.icon}
          {menu.label}
          <ChevronRight
            size={18}
            className={cn("ml-auto", toggleSubMenu && "rotate-90")}
          />
        </div>

        {toggleSubMenu && (
          <div>
            {menu.subMenu.map((item: any) => (
              <NavigationLink key={item.label} item={item} subMenu={true} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <NavigationLink item={menu} />;
  }
};
