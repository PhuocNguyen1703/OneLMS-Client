import { Bell, Search } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeaderLogo } from "./HeaderLogo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

const Header = () => {
  const t = useTranslations("Components");

  return (
    <header
      className="flex-center justify-between gap-10 h-[56px] py-1.5 px-2 border-b border-secondary bg-amber-500
    "
    >
      <div className="hidden sm:flex items-center grow max-w-[500px] border rounded-full">
        <Input
          type="text"
          placeholder={t("Search.placeholder")}
          className="border-none rounded-l-full focus-visible:ring-0"
        />
        <Button
          variant="secondary"
          className="p-0 px-4 border-l rounded-r-full"
        >
          <Search size={20} />
        </Button>
      </div>
      <TooltipProvider>
        <div className="flex-center space-x-2">
          <LocaleSwitcher />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative rounded-full shadow-sm"
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
