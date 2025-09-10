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
import { ReactElement } from "react";
import { useTranslations } from "next-intl";

type MenuItem = {
  icon?: ReactElement<any>;
  label: string;
  href?: string;
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
          href: "/",
        },
        {
          icon: <UsersRound />,
          label: t("guardian"),
          href: "/",
        },
        {
          icon: <UserRoundPen />,
          label: t("teacher"),
          href: "/",
        },
        {
          icon: <UserRoundPlus />,
          label: t("other"),
          href: "/",
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
