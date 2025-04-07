import Link from "next/link";

import { GearIcon } from "@radix-ui/react-icons";
import { LuLogOut } from "react-icons/lu";

import { menuList } from "@/constant/menuLists";


const SidePanel:React.FC = () => {
  return (
    <div className='w-[280px] h-[100vh] px-6 py-8 bg-[#fff]'>
      hey
      <nav className='flex flex-col justify-between mt-10 h-[calc(100vh_-_144px)]'>
        <ul className='flex flex-col gap-5'>
            {menuList.map(({title, href, icon:ICON}) => (
                <Link 
                    key={title} 
                    className='flex items-center gap-3' 
                    href={href}
                    >
                      <ICON /> {title}
                </Link>
            ))}
        </ul>

        <ul className='flex flex-col gap-5'>
            <Link 
                className='flex items-center gap-3'  
                href="/settings"
                >
                <GearIcon /> Settings
            </Link>

            <Link 
                className='flex items-center gap-3' 
                href="/logout"
                >  
                <LuLogOut /> Logout
            </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SidePanel;
