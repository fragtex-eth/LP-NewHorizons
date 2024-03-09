import React from "react";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full">
      <div className="flex items-center gap-4">
        <img className="w-24" src={Logo} />
        <span className="text-tertiary uppercase text-5xl">Horizon</span>
      </div>
      <nav className="flex items-center gap-16 text-4xl text-secondary">
        <a>Home</a>
        <a>About Us</a>
        <a>Experience</a>
        <button className="border border-secondary border-2 py-3 px-6 rounded-full">
          Book A Session
        </button>
      </nav>
    </header>
  );
}
