import { LogoProps } from "@/shared/types";
import Image from "next/image";
import { logo } from "../../../public/images";

const Logo = ({ height, width }: LogoProps) => {
  return (
    <Image
      className="object-cover"
      alt="logo"
      height={height}
      width={width}
      src={logo}
      priority
      quality={95}
    />
  );
};

export default Logo;
