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
      { icon: <LayoutDashboard />, label: "Dashboard", href: "/" },
      {
        icon: <Box />,
        label: "Application",
        subMenu: [
          { icon: <MessageCircleMore />, label: "Message", href: "/" },
          { icon: <Notebook />, label: "Note", href: "/" },
          { icon: <CalendarDays />, label: "Calendar", href: "/" },
        ],
      },
    ],
  },
  {
    title: "USER",
    menuItems: [
      {
        icon: <GraduationCap />,
        label: "Students",
        subMenu: [
          { icon: <BookText />, label: "All Students", href: "/" },
          { icon: <ClipboardMinus />, label: "Student List", href: "/" },
          { icon: <FileText />, label: "Student Details", href: "/" },
          { icon: <Tickets />, label: "Promotion", href: "/" },
        ],
      },
      {
        icon: <UsersRound />,
        label: "Guardians",
        subMenu: [
          { icon: <BookText />, label: "All Guardians", href: "/" },
          { icon: <ClipboardMinus />, label: "Guardian List", href: "/" },
        ],
      },
      {
        icon: <UserRoundPen />,
        label: "Teachers",
        subMenu: [
          { icon: <BookText />, label: "All Teachers", href: "/" },
          { icon: <ClipboardMinus />, label: "Teacher List", href: "/" },
          { icon: <FileText />, label: "Teacher Details", href: "/" },
          { icon: <Waypoints />, label: "Routine", href: "/" },
        ],
      },
      {
        icon: <UserRoundPlus />,
        label: "Staffs",
        subMenu: [
          { icon: <BookText />, label: "All Staffs", href: "/" },
          { icon: <ClipboardMinus />, label: "Staff List", href: "/" },
          { icon: <FileText />, label: "Staff Details", href: "/" },
        ],
      },
      {
        icon: <UserRoundSearch />,
        label: "Others",
        href: "/",
      },
    ],
  },
  {
    title: "ACADEMIC",
    menuItems: [
      {
        icon: <School />,
        label: "Classes",
        subMenu: [
          { icon: <Building2 />, label: "All Classes", href: "/" },
          { icon: <CalendarFold />, label: "Schedule", href: "/" },
          { icon: <Building />, label: "Class Room", href: "/" },
        ],
      },
      {
        icon: <Waypoints />,
        label: "Class Routine",
        href: "/",
      },
      { icon: <BookOpenCheck />, label: "Subject", href: "/" },
      { icon: <BookPlus />, label: "Syllabus", href: "/" },
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
        label: "Examinations",
        subMenu: [
          { icon: <File />, label: "Exam", href: "/" },
          { icon: <FileClock />, label: "Exam Schedule", href: "/" },
          { icon: <UserRoundCheck />, label: "Exam Attendance", href: "/" },
          { icon: <FileText />, label: "Exam Results", href: "/" },
          { icon: <GraduationCap />, label: "Grade", href: "/" },
        ],
      },
    ],
  },
];
