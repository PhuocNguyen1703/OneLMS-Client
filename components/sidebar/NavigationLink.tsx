import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelector } from "react-redux";

const NavigationLink = ({ item, subMenu }: any) => {
  const { sidebarCollapsed } = useSelector((state: any) => state.layout);

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center p-2 rounded-sm select-none whitespace-pre hover:bg-slate-200",
        subMenu && "pl-4 text-sm",
        sidebarCollapsed & subMenu && "px-3"
      )}
    >
      <span className="flex items-center justify-center">{item.icon}</span>
      <span className={cn("ml-[10px]", sidebarCollapsed & subMenu && "ml-4")}>
        {item.label}
      </span>
    </Link>
  );
};

export default NavigationLink;
