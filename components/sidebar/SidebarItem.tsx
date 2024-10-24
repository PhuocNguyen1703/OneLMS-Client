"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import NavigationLink from "./NavigationLink";
import { useSelector } from "react-redux";

const SidebarItem = ({ menu }: any) => {
  const { sidebarCollapsed } = useSelector((state: any) => state.layout);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);
  const handleToggleSubMenu = () => {
    setToggleSubMenu((prevState) => !prevState);
  };

  if (menu.subMenu) {
    return (
      <div
        className={cn(
          "rounded-md select-none",
          toggleSubMenu && " bg-gray-100",
          sidebarCollapsed && "w-[38px]"
        )}
      >
        <div
          className={cn(
            "flex items-center p-2 h-[38px] rounded-sm cursor-pointer hover:bg-slate-200",
            toggleSubMenu && "border-b"
          )}
          onClick={handleToggleSubMenu}
        >
          <span>{menu.icon}</span>

          {!sidebarCollapsed && (
            <span
              className={cn(
                "flex flex-1 items-center justify-between ml-[10px] whitespace-pre"
              )}
            >
              {menu.label}
              <ChevronRight
                size={18}
                className={cn(toggleSubMenu && "rotate-90")}
              />
            </span>
          )}
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

export default SidebarItem;
