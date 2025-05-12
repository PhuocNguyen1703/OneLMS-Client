import { ReactElement } from "react";

export type LogoProps = {
  height: number;
  width: number;
};

type MenuItem = {
  icon: ReactElement<any>;
  label: string;
  href: string;
};

export type MenuItems = {
  title: string;
  items: MenuItem[];
};
