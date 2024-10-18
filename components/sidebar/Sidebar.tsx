import Link from "next/link";
import Logo from "../Logo";
import { menuItems } from "@/data";

const Sidebar = () => {
  return (
    <div className="border-r">
      <Link href="/" className="flex items-center gap-2 pt-3 ml-2">
        <Logo width={32} height={32} />
        <p className="text-primary text-lg font-bold select-none">OneLMS</p>
      </Link>
      <div className="">
        {menuItems.map((menu) => (
          <div key={menu.title} className="flex flex-col">
            <span className="mt-4 ml-3 font-bold text-gray-300">
              {menu.title}
            </span>
            {menu.items.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center gap-2 p-2 pl-4 text-base cursor-pointer hover:bg-slate-200 "
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
