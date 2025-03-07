"use client";

import {
  Blend,
  Languages,
  LifeBuoy,
  MonitorCog,
  MoonStar,
  Power,
  Settings,
  Sun,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { japanFlag, ukFlag, vietnamFlag } from "../../../../public/images";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "next-themes";

const UserMenu = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-hidden">
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="avatar"
                />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Account</p>
            </TooltipContent>
          </Tooltip>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit min-w-60 mr-1 p-2">
          <div className="border rounded-sm p-2 mb-3 shadow-md">
            <div className="flex-center gap-2 border-b p-1">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="avatar"
                />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Amazon antony</p>
                <p className="text-xs">Admin</p>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="w-full mt-1">
              See Profile
            </Button>
          </div>
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="p-2">
                <Blend size={20} className="mr-2" />
                <span>Mode</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem
                    className="space-x-1.5"
                    onClick={() => setTheme("light")}
                  >
                    <Sun size={16} />
                    <span>Light</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="space-x-1.5"
                    onClick={() => setTheme("dark")}
                  >
                    <MoonStar size={16} />
                    <span>Dark</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="space-x-1.5"
                    onClick={() => setTheme("system")}
                  >
                    <MonitorCog size={16} />
                    <span>System</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className="p-2 space-x-2">
              <Settings size={20} />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="p-2">
                <Languages size={20} className="mr-2" />
                <span>Language</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Image
                      src={vietnamFlag}
                      width={20}
                      height={20}
                      alt="flag"
                      className="mr-2"
                    />
                    <span>Vietnamese</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Image
                      src={japanFlag}
                      width={20}
                      height={20}
                      alt="flag"
                      className="mr-2"
                    />
                    <span>Japanese</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Image
                      src={ukFlag}
                      width={20}
                      height={20}
                      alt="flag"
                      className="mr-2"
                    />
                    <span>English</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className="p-2 space-x-2">
              <LifeBuoy size={20} />
              <span>Support</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="p-2 space-x-2">
            <Power size={20} />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserMenu;
