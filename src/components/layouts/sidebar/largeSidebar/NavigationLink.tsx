import { cn } from "@/lib/utils";
import Link from "next/link";

const NavigationLink = ({ item}: any) => {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-[10px] p-2 rounded-sm select-none whitespace-pre hover:bg-slate-200"
      )}
    >
      {item.icon}
      {item.label}
    </Link>
  );
};

export default NavigationLink;
