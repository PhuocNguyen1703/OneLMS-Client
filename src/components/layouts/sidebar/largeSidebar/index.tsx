"use client";

import { menu } from "@/data/sidebar";
import { LargeSidebarItem } from "./LargeSidebarItem";
import { cn } from "@/lib/utils";
import { HeaderLogo } from "@/components/layouts/header/HeaderLogo";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
import useSidebarStore from "@/store/sidebar";

export const LargeSidebar = () => {
  const { isLargeSidebarOpen, isSmallSidebarOpen, closeSidebar } =
    useSidebarStore();

  return (
    <>
      {isSmallSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="lg:hidden fixed inset-0 bg-black/20 z-999"
        />
      )}
      <div
        className={cn(
          "lg:sticky absolute top-0 bottom-0 flex-col w-52 overflow-y-auto scrollbar-hidden px-2 pb-2 ",
          isLargeSidebarOpen ? "lg:flex" : "lg:hidden",
          isSmallSidebarOpen ? "flex max-h-screen z-999" : "hidden"
        )}
      >
        <div className="lg:hidden sticky top-0 flex items-center h-[56px] border-b border-secondary z-999">
          <HeaderLogo />
        </div>
        {menu.map((menuGroup: any, idx) => (
          <Fragment key={idx}>
            {menuGroup?.title && <Separator className="mt-1.5" />}
            <div className="flex flex-col gap-0.5 mt-1.5">
              {menuGroup.menuItems.map((menu: any) => (
                <LargeSidebarItem key={menu.label} menu={menu} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
