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
const SUB_ICON_SIZE = 16;

type SubMenu = {
  icon: ReactElement;
  label: string;
  href: string;
};

type MenuItem = {
  icon: ReactElement;
  label: string;
  href?: string;
  subMenu?: SubMenu[];
};

export type MenuItems = {
  title: string;
  menuItems: MenuItem[];
};

export const menu: MenuItems[] = [
  {
    title: "MAIN",
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
            icon: <MessageCircleMore size={SUB_ICON_SIZE} />,
            label: "Message",
            href: "/",
          },
          {
            icon: <Notebook size={SUB_ICON_SIZE} />,
            label: "Note",
            href: "/",
          },
          {
            icon: <CalendarDays size={SUB_ICON_SIZE} />,
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
        label: "Students",
        subMenu: [
          {
            icon: <BookText size={SUB_ICON_SIZE} />,
            label: "All Students",
            href: "/",
          },
          {
            icon: <ClipboardMinus size={SUB_ICON_SIZE} />,
            label: "Student List",
            href: "/",
          },
          {
            icon: <FileText size={SUB_ICON_SIZE} />,
            label: "Student Details",
            href: "/",
          },
          {
            icon: <Tickets size={SUB_ICON_SIZE} />,
            label: "Promotion",
            href: "/",
          },
        ],
      },
      {
        icon: <UsersRound size={MAIN_ICON_SIZE} />,
        label: "Guardians",
        subMenu: [
          {
            icon: <BookText size={SUB_ICON_SIZE} />,
            label: "All Guardians",
            href: "/",
          },
          {
            icon: <ClipboardMinus size={SUB_ICON_SIZE} />,
            label: "Guardian List",
            href: "/",
          },
        ],
      },
      {
        icon: <UserRoundPen size={MAIN_ICON_SIZE} />,
        label: "Teachers",
        subMenu: [
          {
            icon: <BookText size={SUB_ICON_SIZE} />,
            label: "All Teachers",
            href: "/",
          },
          {
            icon: <ClipboardMinus size={SUB_ICON_SIZE} />,
            label: "Teacher List",
            href: "/",
          },
          {
            icon: <FileText size={SUB_ICON_SIZE} />,
            label: "Teacher Details",
            href: "/",
          },
          {
            icon: <Waypoints size={SUB_ICON_SIZE} />,
            label: "Routine",
            href: "/",
          },
        ],
      },
      {
        icon: <UserRoundPlus size={MAIN_ICON_SIZE} />,
        label: "Staffs",
        subMenu: [
          {
            icon: <BookText size={SUB_ICON_SIZE} />,
            label: "All Staffs",
            href: "/",
          },
          {
            icon: <ClipboardMinus size={SUB_ICON_SIZE} />,
            label: "Staff List",
            href: "/",
          },
          {
            icon: <FileText size={SUB_ICON_SIZE} />,
            label: "Staff Details",
            href: "/",
          },
        ],
      },
      {
        icon: <UserRoundSearch size={MAIN_ICON_SIZE} />,
        label: "Others",
        href: "/",
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
            icon: <BookText size={SUB_ICON_SIZE} />,
            label: "All Class",
            href: "/",
          },
          {
            icon: <CalendarFold size={SUB_ICON_SIZE} />,
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
        href: "/",
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
        label: "Examinations",
        subMenu: [
          {
            icon: <File size={SUB_ICON_SIZE} />,
            label: "Exam",
            href: "/",
          },
          {
            icon: <FileClock size={SUB_ICON_SIZE} />,
            label: "Exam Schedule",
            href: "/",
          },
          {
            icon: <UserRoundCheck size={SUB_ICON_SIZE} />,
            label: "Exam Attendance",
            href: "/",
          },
          {
            icon: <FileText size={SUB_ICON_SIZE} />,
            label: "Exam Results",
            href: "/",
          },
          {
            icon: <GraduationCap size={SUB_ICON_SIZE} />,
            label: "Grade",
            href: "/",
          },
        ],
      },
    ],
  },
];
