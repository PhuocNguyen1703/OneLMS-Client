import { menu } from "@/data/sidebar";
import { LargeSidebarItem } from "./LargeSidebarItem";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, layoutSelector } from "@/redux/slices/layoutSlice";
import { cn } from "@/lib/utils";
import { HeaderLogo } from "@/components/layouts/header/HeaderLogo";

export const LargeSidebar = () => {
  const { isLargeSidebarOpen, isSmallSidebarOpen } =
    useSelector(layoutSelector);
  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <>
      {isSmallSidebarOpen && (
        <div
          onClick={handleCloseSidebar}
          className="lg:hidden fixed inset-0 bg-black/20 z-[999]"
        />
      )}
      <div
        className={cn(
          "lg:sticky absolute top-0 flex-col w-56 pb-4 overflow-y-auto scrollbar-hidden px-2",
          isLargeSidebarOpen ? "lg:flex" : "lg:hidden",
          isSmallSidebarOpen ? "flex z-[999] h-screen bg-white" : "hidden"
        )}
      >
        <div className="lg:hidden sticky top-0 py-2 bg-white z-[999]">
          <HeaderLogo />
        </div>
        {menu.map((menuGroup: any, idx) => (
          <div key={idx} className="ml-0.5">
            {menuGroup?.title && (
              <div className="relative mt-4">
                <span className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-300 rounded-full"></span>
                <span className="relative pl-1 pr-3 text-slate-400 text-sm font-semibold leading-none bg-white select-none">
                  {menuGroup.title}
                </span>
              </div>
            )}
            <div className="flex flex-col gap-1 ">
              {menuGroup.menuItems.map((menu: any) => (
                <LargeSidebarItem key={menu.label} menu={menu} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
