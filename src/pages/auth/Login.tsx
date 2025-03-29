"use client";

import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import IMAGES from "@/assets";
import Link from "next/link";
import RegularInput from "@/components/inputs/RegularInput";
import {Button} from "@/components/buttons";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

export const metadata: Metadata = {
  title: "Pinvent | Login",
  description: "Your Best Inventory Application",
};

const Login: React.FC = () => {
  return (
      <div className="w-full flex justify-between items-center">
        <div className="">
          <Image src={IMAGES.IMAGES.logoImg} width={180} alt="logo" />
          <p className="mt-5 text-center text-[47px] font-bold text-[#009ED8]">KABAN</p>
        </div>

        <div className="p-3 w-[380px]">
          <div className="flex flex-col items-center justify-center">
            <Image src={IMAGES.IMAGES.logoImg} width={50} alt="logo" />
            <h2 className="mt-6 mb-1 text-xl font-bold">Log in to your account</h2>
            <p>Welcome back! Please enter your details</p>
          </div>

          <form className="mt-8">
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
              placeholder="********"
            />

            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="outline-0 border border-border-primary"
                  name="remember"
                />
                <p className="text-sm">Remember for 30 days</p>
              </div>
              <Link href="/forgot-password" className="text-[#1570EF] text-sm">
                Forgot password
              </Link>
            </div>

            <Button type="submit">Sign in</Button>

            <Button 
                type="button" 
                variant="outline" 
                className="flex items-center justify-center gap-3"
            >
                <Image src={IMAGES.IMAGES.googleIcon} alt="" />
                <p>Sign in with Google</p>
            </Button>

            <p className="text-center mt-7 text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#1570EF] text-sm">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
  );
};

export default Login;
