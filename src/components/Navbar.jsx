import React from "react";
import NavList from "./NavList";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";
import logo from "@/assets/ieee.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-7 py-2 text-white bg-black select-none fixed z-50">
      <img src={logo} className="h-5 w-auto" alt="..." />
      <div className="flex items-center ml-10">
        <NavList />
      </div>
      <div className="flex gap-3 items-center">
        <a
          href="https://www.ieeetechfutures2024/register"
          className={cn(
            "max-sm:hidden flex items-center gap-2 px-1 font-bold text-white underline"
          )}
        >
          Book Now
        </a>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
