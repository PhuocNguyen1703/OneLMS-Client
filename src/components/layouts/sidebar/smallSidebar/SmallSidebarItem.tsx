import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export const SmallSidebarItem = ({ menu }: any) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={menu.href}
            className="flex flex-col items-center p-2 rounded-md hover:bg-accent"
          >
            <span>{menu.icon}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{menu.label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
