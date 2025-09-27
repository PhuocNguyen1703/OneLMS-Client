import { Bell, Search } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const t = useTranslations("Components");

  return (
    <header
      className="flex-center justify-between h-[56px] pt-4 px-4 
    "
    >
      <div className="flex flex-col">
        <span className="text-xl font-semibold">Title</span>
        <span className="text-sm">breadcrumb</span>
      </div>
      <TooltipProvider>
        <div className="flex-center space-x-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative shadow-sm"
              >
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-red-800"></span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("Header.notificationTooltip")}</p>
            </TooltipContent>
          </Tooltip>
          <UserMenu />
        </div>
      </TooltipProvider>
    </header>
  );
};

export default Header;
