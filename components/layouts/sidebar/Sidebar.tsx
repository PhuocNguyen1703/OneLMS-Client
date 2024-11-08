"use client";

import { SmallSidebar } from "./smallSidebar";
import { LargeSidebar } from "./largeSidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  isScreenSmall,
  setIsSmallSidebarOpen,
} from "@/redux/slices/layoutSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (!isScreenSmall()) dispatch(setIsSmallSidebarOpen(false));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <SmallSidebar />
      <LargeSidebar />
    </>
  );
};

export default Sidebar;
