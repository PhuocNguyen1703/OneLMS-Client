"use client";

import Link from "next/link";
import Logo from "../../Logo";
import useSidebarStore from "@/stores/sidebar.store";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

export const HeaderLogo = () => {
  const t = useTranslations("Components.Header");
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
        <p className="text-xl font-extrabold">{t("appName")}</p>
      </Link>
    </div>
  );
};
