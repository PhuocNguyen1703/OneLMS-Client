import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelector } from "react-redux";

const NavigationLink = ({ item, subMenu }: any) => {
  const { sidebarCollapsed } = useSelector((state: any) => state.layout);

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-2 p-2 rounded-sm select-none hover:bg-slate-200",
        subMenu && "pl-4 text-sm"
      )}
    >
      <span
        className={cn("flex items-center justify-center", subMenu && "w-4 h-4")}
      >
        {item.icon}
      </span>
      {!sidebarCollapsed && item.label}
    </Link>
  );
};

export default NavigationLink;
