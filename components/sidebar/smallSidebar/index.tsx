import { LayoutDashboard } from "lucide-react";
import { ReactElement } from "react";
import { SmallSidebarItem } from "./SmallSidebarItem";

type smallMenu = {
  icon: ReactElement;
  label: string;
  url: string;
};

const ICON_SIZE = 24;

const smallSidebarMenu: smallMenu[] = [
  {
    icon: <LayoutDashboard size={ICON_SIZE} />,
    label: "Dashboard",
    url: "/",
  },
  {
    icon: <LayoutDashboard size={ICON_SIZE} />,
    label: "Dashboard",
    url: "/",
  },
  {
    icon: <LayoutDashboard size={ICON_SIZE} />,
    label: "Dashboard",
    url: "/",
  },
  {
    icon: <LayoutDashboard size={ICON_SIZE} />,
    label: "Dashboard",
    url: "/",
  },
  {
    icon: <LayoutDashboard size={ICON_SIZE} />,
    label: "Dashboard",
    url: "/",
  },
  {
    icon: <LayoutDashboard size={ICON_SIZE} />,
    label: "Dashboard",
    url: "/",
  },
  {
    icon: <LayoutDashboard size={ICON_SIZE} />,
    label: "Dashboard",
    url: "/",
  },
  {
    icon: <LayoutDashboard size={ICON_SIZE} />,
    label: "Dashboard",
    url: "/",
  },
];

export const SmallSidebar = () => {
  return (
    <div className="sticky top-0 flex flex-col gap-1.5 pb-4 overflow-y-auto scrollbar-hidden px-2">
      {smallSidebarMenu.map((item, idx) => (
        <SmallSidebarItem key={idx} {...item} />
      ))}
    </div>
  );
};
