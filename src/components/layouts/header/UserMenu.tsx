"use client";

import { Button } from "@/components/ui/button";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  Languages,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Power,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import Image from "next/image";
import { japanFlag, ukFlag, vietnamFlag } from "@/public/images";

const UserMenu = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-col items-end">
        <span className="font-semibold">Jonh Smith</span>
        <span className="text-sm text-gray-500 leading-none">Admin</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
            />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit min-w-40 mr-1">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User size={20} className="mr-2" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings size={20} className="mr-2" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
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
            <DropdownMenuItem>
              <LifeBuoy size={20} className="mr-2" />
              <span>Support</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Power size={20} className="mr-2" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
