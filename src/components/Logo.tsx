import { LogoProps } from "@/types";
import Image from "next/image";
import { logo } from "../../public/images";

const Logo = ({ height, width }: LogoProps) => {
  return (
    <Image
      className="object-cover"
      alt="logo"
      height={height}
      width={width}
      src={logo}
    />
  );
};

export default Logo;
