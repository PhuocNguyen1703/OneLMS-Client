"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Logo from "../Logo";
import { navLinks } from "@/lib/constants";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="absolute top-0 inset-x-0 w-full h-[90px] z-50">
      <div className="flex justify-between items-center w-full h-full px-4">
        <Link href="/" className="flex items-center gap-2 ml-2">
          <Logo width={40} height={40} />
          <p className="text-primary text-4xl font-bold select-none">Rabiot</p>
        </Link>
        <div className="flex items-center h-full">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((el) => (
                <NavigationMenuItem key={el.title}>
                  <Link href={el.href} legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium text-primary  px-2 py-1 ml-3 ">
                      {el.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
