"use client";

import { LogoProps } from "@/types";
import Image from "next/image";

const Logo = ({ height, width }: LogoProps) => {
  return (
    <Image
      className="object-cover"
      alt="logo"
      height={height}
      width={width}
      src="/images/logo.png"
    />
  );
};

export default Logo;
