import { SmallSidebar } from "./smallSidebar";
import { LargeSidebar } from "./largeSidebar";
import {
  BookCheck,
  BookOpenCheck,
  BookPlus,
  Building,
  Building2,
  GraduationCap,
  Grid2x2Check,
  LayoutDashboard,
  Presentation,
  School,
  ScrollText,
  UserRoundPen,
  UserRoundPlus,
  UsersRound,
  Waypoints,
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
          icon: <LayoutDashboard />,
          label: t("dashboard"),
          href: "/",
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
    {
      title: t("academicTitle"),
      menuItems: [
        {
          icon: <School />,
          label: t("campus"),
          href: "/campus",
        },
        {
          icon: <Building />,
          label: t("classRoom"),
          href: "/class-room",
        },
        {
          icon: <Building2 />,
          label: t("class"),
          href: "/",
        },
        {
          icon: <Waypoints />,
          label: t("classRoutine"),
          href: "/",
        },
        {
          icon: <BookOpenCheck />,
          label: t("subject"),
          href: "/subject",
        },
        {
          icon: <BookPlus />,
          label: t("syllabus"),
          href: "/",
        },
        {
          icon: <Grid2x2Check />,
          label: t("timetable"),
          href: "/",
        },
        {
          icon: <ScrollText />,
          label: t("homework"),
          href: "/",
        },
        {
          icon: <BookCheck />,
          label: t("examination"),
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
