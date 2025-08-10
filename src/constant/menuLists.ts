import { HomeIcon } from "@radix-ui/react-icons";
import { FaProductHunt } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import { GiExpense } from "react-icons/gi";
import { GoReport } from "react-icons/go";
import { GrOrderedList } from "react-icons/gr";
import { MdInventory } from "react-icons/md";

export const menuList: MenuListProps[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },

  {
    title: "Inventory",
    href: "/inventory",
    icon: MdInventory,
  },

  {
    title: "Reports",
    href: "/report",
    icon: GoReport,
  },

  {
    title: "Orders",
    href: "/order",
    icon: GrOrderedList,
  },

  {
    title: "Expenses",
    href: "/expense",
    icon: GiExpense,
  },

  {
    title: "Suppliers",
    href: "/supplier",
    icon: FaProductHunt,
  },

  {
    title: "Manage Store",
    href: "/manage-store",
    icon: FcManager,
  },
];
