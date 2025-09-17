import { SmallSidebar } from "./smallSidebar";
import { LargeSidebar } from "./largeSidebar";
import {
  GraduationCap,
  LayoutPanelLeftIcon,
  Presentation,
  UserRoundPen,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import { useTranslations } from "next-intl";

export type MenuItem = {
  icon?: React.ReactNode;
  label: string;
  href: string;
};

export type MenuItems = {
  title?: string;
  menuItems: MenuItem[];
};

const Sidebar = () => {
  const t = useTranslations("Components.Sidebar.menu");
  const menu: MenuItems[] = [
    {
      menuItems: [
        {
          icon: <Presentation />,
          label: t("notice"),
          href: "/notice",
        },
        {
          icon: <LayoutPanelLeftIcon />,
          label: t("kanban"),
          href: "/kanban",
        },
      ],
    },
    {
      title: t("userTitle"),
      menuItems: [
        {
          icon: <GraduationCap />,
          label: t("student"),
          href: "/s",
        },
        {
          icon: <UsersRound />,
          label: t("guardian"),
          href: "/g",
        },
        {
          icon: <UserRoundPen />,
          label: t("teacher"),
          href: "/t",
        },
        {
          icon: <UserRoundPlus />,
          label: t("other"),
          href: "/o",
        },
      ],
    },
  ];

  return (
    <>
      <SmallSidebar menu={menu} />
      <LargeSidebar menu={menu} />
    </>
  );
};

export default Sidebar;
