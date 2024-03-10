import React from "react";
import { LogoIcon } from "../common/Logo.tsx";

export default function Header() {
  return (
    <header className="p-10 box-border flex justify-between items-center w-full z-50">
      <div className="flex items-center gap-4">
        <LogoIcon width="60" height="60" fill="currentColor" />
        <span className=" uppercase text-5xl">Horizon</span>
      </div>
      <nav className="hidden md:flex items-center gap-16 text-4xl ">
        <a className="cursor-pointer">Home</a>
        <a className="cursor-pointer">About Us</a>
        <a className="cursor-pointer">Experience</a>
        <a className="cursor-pointer border-2 border-solid py-3 px-6 rounded-full">
          Book A Session
        </a>
      </nav>
    </header>
  );
}
