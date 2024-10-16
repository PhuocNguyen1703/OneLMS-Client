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

export const menuItems: MenuItems[] = [
  {
    title: "MENU",
    items: [
      {
        icon: <LayoutGrid />,
        label: "Home",
        href: "",
      },
      {
        icon: <GraduationCap />,
        label: "Teachers",
        href: "",
      },
      {
        icon: <User />,
        label: "Students",
        href: "",
      },
      {
        icon: <User />,
        label: "Parents",
        href: "",
      },
      {
        icon: <NotebookText />,
        label: "Subjects",
        href: "",
      },
      {
        icon: <Building />,
        label: "Classes",
        href: "",
      },
      {
        icon: <NotebookText />,
        label: "Lessons",
        href: "",
      },
      {
        icon: <FilePenLine />,
        label: "Exams",
        href: "",
      },
      {
        icon: <NotebookPen />,
        label: "Assignments",
        href: "",
      },
      {
        icon: <Award />,
        label: "Results",
        href: "",
      },
      {
        icon: <UserRoundCheck />,
        label: "Attendance",
        href: "",
      },
      {
        icon: <CalendarClock />,
        label: "Events",
        href: "",
      },
      {
        icon: <MessageCircleMore />,
        label: "Messages",
        href: "",
      },
      {
        icon: <Megaphone />,
        label: "Announcements",
        href: "",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <Contact />,
        label: "Profile",
        href: "",
      },
      {
        icon: <Settings />,
        label: "Settings",
        href: "",
      },
      {
        icon: <LogOut />,
        label: "Logout",
        href: "",
      },
    ],
  },
];
