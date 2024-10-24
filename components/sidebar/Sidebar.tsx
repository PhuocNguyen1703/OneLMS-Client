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
      width: "220px",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "58px",
      transition: {
        damping: 40,
      },
    },
  };

  return (
    <motion.section
      variants={sidebarAnimation}
      animate={sidebarCollapsed ? "closed" : "open"}
      className={
        "w-[220px] h-[calc(100vh-64px)] p-2 pt-0 space-y-3 bg-white border-r overflow-x-hidden overflow-y-auto"
      }
    >
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
          <div className="flex flex-col space-y-1">
            {menuGroup.menuItems.map((menu: any) => (
              <SidebarItem key={menu.label} menu={menu} />
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default Sidebar;
