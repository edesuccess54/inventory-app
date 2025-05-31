"use client";

import Link from "next/link";

import { GearIcon } from "@radix-ui/react-icons";
import { LuLogOut } from "react-icons/lu";

import { menuList } from "@/constant/menuLists";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logoImg } from "@/assets";

const SidePanel: React.FC = () => {
  const isActive = usePathname();
  return (
    <div className="w-[280px] h-screen pb-8 bg-[#fff]">
      <div className="flex items-center py-4 gap-3 px-6">
        <Image src={logoImg} alt="logo" width={48} />
        <p className="text-[#1570EF]">KANBAN</p>
      </div>
      <nav className="flex flex-col justify-between mt-1 h-[calc(100vh_-_144px)]">
        <ul className="flex flex-col gap-2">
          {menuList.map(({ title, href, icon: ICON }) => (
            <Link
              key={title}
              className={`flex items-center gap-3 px-6 py-2 ${isActive === href && "text-[#1570EF]"}`}
              href={href}
            >
              <ICON /> {title}
            </Link>
          ))}
        </ul>

        <div className="flex flex-col gap-5">
          <Link className="flex items-center gap-3 px-6" href="/settings">
            <GearIcon /> Settings
          </Link>

          <Link className="flex items-center gap-3 px-6" href="/logout">
            <LuLogOut /> Logout
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SidePanel;
