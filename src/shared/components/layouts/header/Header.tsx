import { Bell, Search } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { HeaderLogo } from "./HeaderLogo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

const Header = () => {
  return (
    <header
      className="flex-center justify-between gap-10 h-[56px] py-1.5 px-2 border-b border-secondary
    "
    >
      <HeaderLogo />
      <div className="hidden sm:flex items-center grow max-w-[500px] border rounded-full">
        <Input
          type="text"
          placeholder="Search..."
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
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative rounded-full shadow-lg"
              >
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-red-800"></span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifications</p>
            </TooltipContent>
          </Tooltip>
          <UserMenu />
        </div>
      </TooltipProvider>
    </header>
  );
};

export default Header;
