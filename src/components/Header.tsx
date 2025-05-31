"use client";

import React from "react";
import RegularInput from "./inputs/RegularInput";
import { BiBell, BiSearch } from "react-icons/bi";
import Image from "next/image";
import { passport } from "@/assets";

const Header = () => {
  return (
    <div className=" flex justify-between items-center py-4 px-8 bg-[#fff] border-l-1 border-e-red-50">
      <RegularInput
        type="text"
        name="search"
        placeholder="Search produt, supplier, order"
        icon={BiSearch}
        className="mb-auto"
      />

      <div className="flex items-center gap-4">
        <BiBell size={20} />
        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <Image src={passport} alt="profile picture" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
