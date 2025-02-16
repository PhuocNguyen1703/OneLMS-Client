import Link from "next/link";

export const LargeSidebarItem = ({ menu }: any) => {
  return (
    <Link
      href={menu.href}
      className="flex items-center gap-[18px] p-2 rounded-lg select-none whitespace-pre hover:bg-accent hover:text-accent-foreground"
    >
      {menu.icon}
      {menu.label}
    </Link>
  );
};
