import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ReactElement } from "react";

type SmallSidebarItemProps = {
  icon: ReactElement;
  label: string;
  url: string;
};

export const SmallSidebarItem = ({
  icon,
  label,
  url,
}: SmallSidebarItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={url}
            className="flex flex-col items-center gap-1 p-2 rounded-md hover:bg-secondary"
          >
            <span>{icon}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
