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

type MenuItem = {
  icon?: ReactElement<any>;
  label: string;
  href?: string;
};

export type MenuItems = {
  title?: string;
  menuItems: MenuItem[];
};

export const menu: MenuItems[] = [
  {
    menuItems: [
      {
        icon: <Presentation />,
        label: "Notice",
        href: "/notice",
      },
      {
        icon: <LayoutDashboard />,
        label: "Dashboard",
        href: "/",
      },
    ],
  },
  {
    title: "USER",
    menuItems: [
      {
        icon: <GraduationCap />,
        label: "Student",
        href: "/",
      },
      {
        icon: <UsersRound />,
        label: "Guardian",
        href: "/",
      },
      {
        icon: <UserRoundPen />,
        label: "Teacher",
        href: "/",
      },
      {
        icon: <UserRoundPlus />,
        label: "Staff",
        href: "/",
      },
    ],
  },
  {
    title: "ACADEMIC",
    menuItems: [
      {
        icon: <School />,
        label: "Campus",
        href: "/campus",
      },
      {
        icon: <Building />,
        label: "Class Room",
        href: "/class-room",
      },
      {
        icon: <Building2 />,
        label: "Class",
        href: "/",
      },
      {
        icon: <Waypoints />,
        label: "Class Routine",
        href: "/",
      },
      {
        icon: <BookOpenCheck />,
        label: "Subject",
        href: "/subject",
      },
      {
        icon: <BookPlus />,
        label: "Syllabus",
        href: "/",
      },
      {
        icon: <Grid2x2Check />,
        label: "Time Table",
        href: "/",
      },
      {
        icon: <ScrollText />,
        label: "Home Work",
        href: "/",
      },
      {
        icon: <BookCheck />,
        label: "Examination",
        href: "/",
      },
    ],
  },
];
