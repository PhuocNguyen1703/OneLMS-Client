"use client";

import Link from "next/link";
import { MenuItem } from "./Sidebar";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/libs/utils";

type Props = {
  menu: MenuItem;
  variant?: "large" | "small";
  onClick?: () => void;
};

export const SidebarItem = ({ menu, variant = "large", onClick }: Props) => {
  const pathname = usePathname() || "/";
  const isActive =
    pathname === menu.href || pathname.startsWith(menu.href + "/");

  const largeBase =
    "flex-center gap-[18px] p-2 rounded-lg select-none whitespace-pre text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors";
  const largeActive =
    "bg-primary text-primary-foreground font-medium hover:bg-primary hover:text-primary-foreground";

  const smallBase =
    "flex flex-col p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors";
  const smallActive =
    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground";

  const className =
    variant === "large"
      ? cn(largeBase, isActive ? largeActive : "")
      : cn(smallBase, isActive ? smallActive : "");

  const link = (
    <div className="relative">
      {isActive && (
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 h-4/5 w-[3px] rounded-sm bg-primary" />
      )}
      <Link
        href={menu.href}
        className={className}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
      >
        {menu.icon}
        {variant === "large" ? menu.label : null}
      </Link>
    </div>
  );

  if (variant === "small") {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{link}</TooltipTrigger>
          <TooltipContent side="right">
            <p>{menu.label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return link;
};
