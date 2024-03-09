import React from "react";
import Logo from "../../assets/logo.png";

export default function Header({ color }) {
  const isWhiteHeader = color === "white";
  return (
    <header className="p-5 flex justify-between items-center w-full z-50">
      <div className="flex items-center gap-4">
        <img
          className={`w-24 filter ${isWhiteHeader ? "filter brightness-0 invert" : ""
            }`}
          src={Logo}
        />
        <span className=" uppercase text-5xl">Horizon</span>
      </div>
      <nav className="flex items-center gap-16 text-4xl ">
        <a>Home</a>
        <a>About Us</a>
        <a>Experience</a>
        <button className="border border-2 py-3 px-6 rounded-full">
          Book A Session
        </button>
      </nav>
    </header>
  );
}
