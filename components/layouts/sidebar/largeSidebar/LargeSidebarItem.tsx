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
      <div className={cn("rounded-md select-none")}>
        <div
          className={cn(
            "flex items-center gap-[10px] p-2 rounded-sm whitespace-pre cursor-pointer hover:bg-slate-200",
            toggleSubMenu && "border bg-[#CCF4FE] hover:bg-[#68CDF9]"
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
          <div className="relative flex flex-col gap-1 ml-[18px] pl-2 pt-1 ">
            <div className="absolute top-0 left-0 w-2 h-[calc(100%-18px)]  rounded-bl-sm border-l border-b z-[2]" />
            {menu.subMenu.map((item: any, idx: number) => (
              <div key={idx} className="relative text-sm">
                <div className="absolute bottom-1/2 -left-2 h-1/2 w-2   border-b border-border rounded-bl-[3px]" />
                <NavigationLink item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <NavigationLink item={menu} />;
  }
};
