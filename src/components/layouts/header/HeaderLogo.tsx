"use client";

import Link from "next/link";
import Logo from "../../Logo";
import useSidebarStore from "@/store/sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const HeaderLogo = () => {
  const { toggleSidebar } = useSidebarStore();
  return (
    <div className="flex-center block gap-2 shrink-0 ">
      <Button variant="ghost" size="icon" onClick={toggleSidebar}>
        <Menu />
      </Button>
      <Link
        href="/"
        className="flex-center gap-1
        "
      >
        <Logo width={32} height={32} />
        <p className="text-xl font-extrabold">OneLMS</p>
      </Link>
    </div>
  );
};
