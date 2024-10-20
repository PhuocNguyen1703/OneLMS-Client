import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelector } from "react-redux";

const NavigationLink = ({ item, subMenu }: any) => {
  const { sidebarCollapsed } = useSelector((state: any) => state.layout);

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center h-9 p-2 gap-2 rounded-sm select-none text-nowrap hover:bg-slate-200",
        subMenu && "pl-4 text-sm",
        sidebarCollapsed & subMenu && "px-[10px]"
      )}
    >
      <span
        className={cn("flex items-center justify-center", subMenu && "w-4")}
      >
        {item.icon}
      </span>
      {!sidebarCollapsed && <span>{item.label}</span>}
    </Link>
  );
};

export default NavigationLink;
