import { MenuItem } from "../Sidebar";
import { SidebarItem } from "../SidebarItem";

export const LargeSidebarItem = ({ menu }: { menu: MenuItem }) => {
  return <SidebarItem menu={menu} variant="large" />;
};
