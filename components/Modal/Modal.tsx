"use client";

import React, { useEffect } from "react";
import Portal from "../Portal/Portal";

const Modal = ({
  children,
  overlay = true,
}: {
  children: React.ReactNode;
  overlay: boolean;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <Portal>
      <div className="fixed left-0 top-0 w-screen h-screen z-[100] ">
        {overlay && <div className="overlay"></div>}
        modal
      </div>
    </Portal>
  );
};

export default Modal;
