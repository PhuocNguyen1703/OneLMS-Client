import {
  BookCheck,
  BookOpenCheck,
  BookPlus,
  BookText,
  Box,
  Building,
  Building2,
  CalendarDays,
  CalendarFold,
  ClipboardMinus,
  File,
  FileClock,
  FileText,
  GraduationCap,
  Grid2x2Check,
  LayoutDashboard,
  MessageCircleMore,
  Notebook,
  School,
  ScrollText,
  Tickets,
  UserRoundCheck,
  UserRoundPen,
  UserRoundPlus,
  UserRoundSearch,
  UsersRound,
  Waypoints,
} from "lucide-react";
import { ReactElement } from "react";

const MAIN_ICON_SIZE = 22;

type SubMenu = {
  icon?: ReactElement;
  label: string;
  href: string;
};

type MenuItem = {
  icon?: ReactElement;
  label: string;
  href?: string;
  subMenu?: SubMenu[];
};

export type MenuItems = {
  title?: string;
  menuItems: MenuItem[];
};

export const menu: MenuItems[] = [
  {
    menuItems: [
      {
        icon: <LayoutDashboard size={MAIN_ICON_SIZE} />,
        label: "Dashboard",
        href: "/",
      },
      {
        icon: <Box size={MAIN_ICON_SIZE} />,
        label: "Application",
        subMenu: [
          {
            label: "Message",
            href: "/",
          },
          {
            label: "Note",
            href: "/",
          },
          {
            label: "Calendar",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "USER",
    menuItems: [
      {
        icon: <GraduationCap size={MAIN_ICON_SIZE} />,
        label: "Student",
        subMenu: [
          {
            label: "List",
            href: "/",
          },
          {
            label: "Detail",
            href: "/",
          },
          {
            label: "Promotion",
            href: "/",
          },
        ],
      },
      {
        icon: <UsersRound size={MAIN_ICON_SIZE} />,
        label: "Guardian",
        subMenu: [
          {
            label: "List",
            href: "/user/guardian",
          },
        ],
      },
      {
        icon: <UserRoundPen size={MAIN_ICON_SIZE} />,
        label: "Teacher",
        subMenu: [
          {
            label: "List",
            href: "/",
          },
          {
            label: "Detail",
            href: "/",
          },
          {
            label: "Routine",
            href: "/",
          },
        ],
      },
      {
        icon: <UserRoundPlus size={MAIN_ICON_SIZE} />,
        label: "Staff",
        subMenu: [
          {
            label: "List",
            href: "/",
          },
          {
            label: "Detail",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "ACADEMIC",
    menuItems: [
      {
        icon: <School size={MAIN_ICON_SIZE} />,
        label: "Campus",
        href: "/campus",
      },
      {
        icon: <Building size={MAIN_ICON_SIZE} />,
        label: "Class Room",
        href: "/class-room",
      },
      {
        icon: <Building2 size={MAIN_ICON_SIZE} />,
        label: "Class",
        subMenu: [
          {
            label: "List",
            href: "/class/all",
          },
          {
            label: "Schedule",
            href: "/",
          },
        ],
      },
      {
        icon: <Waypoints size={MAIN_ICON_SIZE} />,
        label: "Class Routine",
        href: "/",
      },
      {
        icon: <BookOpenCheck size={MAIN_ICON_SIZE} />,
        label: "Subject",
        href: "/subject",
      },
      {
        icon: <BookPlus size={MAIN_ICON_SIZE} />,
        label: "Syllabus",
        href: "/",
      },
      {
        icon: <Grid2x2Check size={MAIN_ICON_SIZE} />,
        label: "Time Table",
        href: "/",
      },
      {
        icon: <ScrollText size={MAIN_ICON_SIZE} />,
        label: "Home Work",
        href: "/",
      },
      {
        icon: <BookCheck size={MAIN_ICON_SIZE} />,
        label: "Examination",
        subMenu: [
          {
            label: "Exam",
            href: "/",
          },
          {
            label: "Schedule",
            href: "/",
          },
          {
            label: "Attendance",
            href: "/",
          },
          {
            label: "Results",
            href: "/",
          },
          {
            label: "Grade",
            href: "/",
          },
        ],
      },
    ],
  },
];
