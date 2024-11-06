import { menu } from "@/data/sidebar";
import { LargeSidebarItem } from "./LargeSidebarItem";

export const LargeSidebar = () => {
  return (
    <div className="sticky top-0 flex flex-col gap-1.5 min-w-[224px] pb-4 overflow-y-auto scrollbar-hidden px-2">
      {menu.map((menuGroup: any) => (
        <div key={menuGroup.title}>
          <div className="relative h-6">
            <span className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-300 rounded-full"></span>
            <span className="relative pl-1 pr-3 text-slate-400 text-sm font-semibold leading-none bg-white select-none">
              {menuGroup.title}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            {menuGroup.menuItems.map((menu: any) => (
              <LargeSidebarItem key={menu.label} menu={menu} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
