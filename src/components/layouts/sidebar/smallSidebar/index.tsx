"use client";

import { Fragment } from "react";
import { SmallSidebarItem } from "./SmallSidebarItem";
import { cn } from "@/libs/utils";
import { menu } from "@/data/sidebar";
import { Separator } from "@/components/ui/separator";
import useSidebarStore from "@/store/sidebar";

export const SmallSidebar = () => {
  const { isLargeSidebarOpen } = useSidebarStore();

  return (
    <div
      className={cn(
        "hidden sm:sticky top-0 sm:flex flex-col overflow-y-auto scrollbar-hidden px-2 pb-2",
        isLargeSidebarOpen ? "lg:hidden" : "lg:flex"
      )}
    >
      {menu.map((menuGroup: any, idx) => (
        <Fragment key={idx}>
          {menuGroup?.title && <Separator className="mt-1.5" />}
          <div className="flex flex-col gap-0.5 mt-1.5">
            {menuGroup.menuItems.map((menu: any) => (
              <SmallSidebarItem key={menu.label} menu={menu} />
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
