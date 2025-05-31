"use client";

import Image from "next/image";
import Link from "next/link";

import RegularInput from "@/components/inputs/RegularInput";
import { Button } from "@/components/buttons";
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { GoogleIcon, logoImg } from "@/assets";

const Sigup: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="">
        <Image src={logoImg} width={180} alt="logo" />
        <p className="mt-5 text-center text-[47px] font-bold text-[#009ED8]">KABAN</p>
      </div>

      <div className="p-3 w-[380px]">
        <div className="flex flex-col items-center justify-center">
          <Image src={logoImg} width={50} alt="logo" />
          <h2 className="mt-6 mb-1 text-xl font-bold">Create an account</h2>
          <p>Start your 30-day free trial</p>
        </div>

        <form className="mt-8">
          <RegularInput
            type="text"
            name="name"
            id="name"
            label="Name"
            icon={PersonIcon}
            placeholder="Enter your name"
          />

          <RegularInput
            type="email"
            name="email"
            id="email"
            label="Email"
            icon={EnvelopeClosedIcon}
            placeholder="Enter your email"
          />

          <RegularInput
            type="password"
            name="password"
            id="password"
            label="Password"
            icon={LockClosedIcon}
            placeholder="Create a password"
          />

          <Button type="submit">Get started</Button>

          <Button
            type="button"
            variant="outline"
            className="flex items-center justify-center gap-3"
          >
            <Image src={GoogleIcon} alt="" />
            <p>Sign up with Google</p>
          </Button>

          <p className="text-center mt-5 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1570EF] text-sm">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sigup;
