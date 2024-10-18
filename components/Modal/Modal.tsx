"use client";

import React from "react";
import Portal from "../portal/Portal";
import { cn } from "@/lib/utils";

const Modal = ({
  children,
  overlay = true,
  itemCenter = true,
}: {
  children: React.ReactNode;
  overlay?: boolean;
  itemCenter?: boolean;
}) => {
  return (
    <Portal>
      <div
        className={cn(
          "fixed left-0 top-0 w-screen h-screen z-[999]",
          overlay && "overlay",
          itemCenter && "item-center"
        )}
      >
        {children}
      </div>
    </Portal>
  );
};

export default Modal;
