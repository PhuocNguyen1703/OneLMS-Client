"use client";

import Link from "next/link";
import Logo from "../Logo";
import { menu } from "@/data/sidebar";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { sidebarCollapsed } = useSelector((state: any) => state.layout);

  const sidebarAnimation = {
    open: {
      width: "226px",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "52px",
      transition: {
        damping: 40,
      },
    },
  };

  return (
    <motion.section
      variants={sidebarAnimation}
      animate={sidebarCollapsed ? "closed" : "open"}
      className={cn("sticky h-screen w-[226px] p-1 bg-white z-[999]")}
    >
      <Link href="/" className="flex items-center gap-2 p-1">
        <Logo width={36} height={36} />
        <p className="text-primary text-lg font-bold select-none">OneLMS</p>
      </Link>
      <div className="flex flex-col h-full gap-1 overflow-x-hidden">
        {menu.map((menuGroup: any) => (
          <div key={menuGroup.title} className="p-1">
            <div className="relative h-6">
              <span className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-300 rounded-full"></span>
              {!sidebarCollapsed && (
                <span className="relative pl-1 pr-3 text-slate-400 text-sm font-semibold leading-none bg-white select-none">
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
    </motion.section>
  );
};

export default Sidebar;
