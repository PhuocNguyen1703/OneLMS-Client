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
      width: "56px",
      transition: {
        damping: 40,
      },
    },
  };

  return (
    <motion.section
      variants={sidebarAnimation}
      animate={sidebarCollapsed ? "closed" : "open"}
      className={cn("sticky h-screen w-[226px] p-2 bg-white")}
    >
      <Link href="/" className="flex items-center">
        <Logo width={40} height={40} />
        <p className="ml-4 text-primary text-lg font-bold select-none">
          OneLMS
        </p>
      </Link>
      <div className="flex flex-col h-full mt-3 space-y-2 overflow-x-hidden">
        {menu.map((menuGroup: any) => (
          <div key={menuGroup.title}>
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
