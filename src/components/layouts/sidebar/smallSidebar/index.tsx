"use client";

import { Fragment } from "react";
import { SmallSidebarItem } from "./SmallSidebarItem";
import { Separator } from "@/components/ui/separator";
import useSidebarStore from "@/stores/sidebar.store";
import { cn } from "@/libs/utils";
import { MenuItems } from "../Sidebar";
import { HeaderLogo } from "../../header/HeaderLogo";

type Props = {
  menu: MenuItems[];
};

export const SmallSidebar = ({ menu }: Props) => {
  const { isLargeSidebarOpen } = useSidebarStore();

  return (
    <div
      className={cn(
        "hidden sm:sticky top-0 sm:flex flex-col relative w-14 h-full overflow-y-auto scrollbar-hidden px-2 pb-2 bg-background",
        isLargeSidebarOpen ? "lg:hidden" : "lg:flex"
      )}
    >
      <div className="flex h-[56px] ml-[5px] border-b border-secondary z-999">
        <HeaderLogo hideText />
      </div>
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
