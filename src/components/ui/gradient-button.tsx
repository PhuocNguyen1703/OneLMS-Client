"use client";

import { cn } from "@/libs/utils";
import { Button } from "./button";

interface GradientButtonProps extends React.ComponentProps<typeof Button> {}

export const GradientButton = ({
  className,
  ...props
}: GradientButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "bg-[linear-gradient(to_right,#0575E6_0%,#021B79_51%,#0575E6_100%)] bg-[length:200%_auto] transition-all duration-300 hover:bg-right",
        className
      )}
    />
  );
};
