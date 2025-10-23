import { SmallSidebar } from "./smallSidebar";
import { LargeSidebar } from "./largeSidebar";
import {
  ClipboardListIcon,
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
  const t = useTranslations("Components.Sidebar.item");
  const menu: MenuItems[] = [
    {
      menuItems: [
        {
          icon: <LayoutPanelLeftIcon />,
          label: t("tables"),
          href: "/tables",
        },
        {
          icon: <ClipboardListIcon />,
          label: t("menus"),
          href: "/menus",
        },
      ],
    },
    {
      menuItems: [
        {
          icon: <GraduationCap />,
          label: t("student"),
          href: "/s",
        },
      ],
    },
  ];

  return (
    <section className="border-r z-999">
      <SmallSidebar menu={menu} />
      <LargeSidebar menu={menu} />
    </section>
  );
};

export default Sidebar;
