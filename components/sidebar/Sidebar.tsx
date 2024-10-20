"use client";

import Link from "next/link";
import Logo from "../Logo";
import { menu } from "@/data/sidebar";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const { sidebarCollapsed } = useSelector((state: any) => state.layout);

  return (
    <section
      className={cn(
        "sticky top-0 left-0 h-screen w-[225px] flex flex-col shrink-0 p-1 border-r-2 ",
        sidebarCollapsed && "w-fit"
      )}
    >
      <Link
        href="/"
        className="relative flex items-center justify-center shrink-0 gap-2 m-1"
      >
        <Logo width={36} height={36} />
        {!sidebarCollapsed && (
          <p className="text-primary text-lg font-bold select-none">OneLMS</p>
        )}
      </Link>
      <div className="flex flex-col flex-1 gap-1">
        {menu.map((menuGroup: any) => (
          <div key={menuGroup.title} className="p-1">
            <div className="relative h-6">
              <span className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-300 rounded-full"></span>
              {!sidebarCollapsed && (
                <span className="relative pl-1 pr-3 text-sm font-bold leading-none bg-white">
                  {menuGroup.title}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              {menuGroup.menuItems.map((menu: any) => (
                <SidebarItem key={menu.label} menu={menu} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
