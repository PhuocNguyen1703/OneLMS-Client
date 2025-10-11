"use client";

import { ChevronsLeftRightIcon } from "lucide-react";
import useSidebarStore from "@/stores/sidebar.store";
import { Button } from "@/components/ui/button";
import { cn } from "@/libs/utils";

export const SidebarToggle = () => {
  const { isLargeSidebarOpen, toggleSidebar } = useSidebarStore();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleSidebar}
      aria-pressed={isLargeSidebarOpen}
      aria-label={isLargeSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      className={cn(" mt-auto ml-auto w-10 rounded-md transition-colors z-999")}
    >
      <ChevronsLeftRightIcon />
    </Button>
  );
};
