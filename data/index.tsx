import { MenuItems } from "@/types";
import {
  Award,
  Building,
  CalendarClock,
  Contact,
  FilePenLine,
  GraduationCap,
  LayoutGrid,
  LogOut,
  Megaphone,
  MessageCircleMore,
  NotebookPen,
  NotebookText,
  Settings,
  User,
  UserRoundCheck,
} from "lucide-react";

const ICONSIZE = 16;

export const menuItems: MenuItems[] = [
  {
    title: "MENU",
    items: [
      {
        icon: <LayoutGrid size={ICONSIZE} />,
        label: "Home",
        href: "",
      },
      {
        icon: <GraduationCap size={ICONSIZE} />,
        label: "Teachers",
        href: "",
      },
      {
        icon: <User size={ICONSIZE} />,
        label: "Students",
        href: "",
      },
      {
        icon: <User size={ICONSIZE} />,
        label: "Parents",
        href: "",
      },
      {
        icon: <NotebookText size={ICONSIZE} />,
        label: "Subjects",
        href: "",
      },
      {
        icon: <Building size={ICONSIZE} />,
        label: "Classes",
        href: "",
      },
      {
        icon: <NotebookText size={ICONSIZE} />,
        label: "Lessons",
        href: "",
      },
      {
        icon: <FilePenLine size={ICONSIZE} />,
        label: "Exams",
        href: "",
      },
      {
        icon: <NotebookPen size={ICONSIZE} />,
        label: "Assignments",
        href: "",
      },
      {
        icon: <Award size={ICONSIZE} />,
        label: "Results",
        href: "",
      },
      {
        icon: <UserRoundCheck size={ICONSIZE} />,
        label: "Attendance",
        href: "",
      },
      {
        icon: <CalendarClock size={ICONSIZE} />,
        label: "Events",
        href: "",
      },
      {
        icon: <MessageCircleMore size={ICONSIZE} />,
        label: "Messages",
        href: "",
      },
      {
        icon: <Megaphone size={ICONSIZE} />,
        label: "Announcements",
        href: "",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <Contact size={ICONSIZE} />,
        label: "Profile",
        href: "",
      },
      {
        icon: <Settings size={ICONSIZE} />,
        label: "Settings",
        href: "",
      },
      {
        icon: <LogOut size={ICONSIZE} />,
        label: "Logout",
        href: "",
      },
    ],
  },
];
