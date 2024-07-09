import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavbarLinks } from "@/constants";

const MobileNav = () => {
  const pathname = window.location.pathname;

  return (
    <section className="sm:hidden">
      <div className="flex flex-col">
        <Sheet>
          <SheetTrigger asChild>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="border-none outline-none p-0 bg-black/75"
          >
            <div className="flex flex-col py-6">
              <h1
                className={`text-4xl font-aurora ml-4 mt-2 stroke-yellow mentra-font tracking-wide borderline text-white`}
              >
                Tech Features
              </h1>
              <hr className="mx-5 mt-6 border border-black" />
              <div className="flex flex-col h-max gap-2 px-3 pt-10">
                {NavbarLinks.map((obj, key) => {
                  const isActive =
                    pathname === obj.route ||
                    (obj.route === "#home" && pathname === "/");
                  console.log(pathname, isActive);
                  return (
                    <a
                      key={key}
                      href={obj.route}
                      className="focus:outline-none focus:ring-0 transition-all duration-300"
                    >
                      <SheetClose className="w-full" asChild>
                        <div
                          className={cn(
                            "w-full flex gap-3 items-center p-4 pr-10",
                            {
                              "bg-fuchsia-600/40 rounded-xl shadow-md":
                                isActive,
                            }
                          )}
                        >
                          <span className="text-lg font-aurora text-white">
                            {obj.title}
                          </span>
                        </div>
                      </SheetClose>
                    </a>
                  );
                })}
                <button
                  onClick={() =>
                    window.location.href(
                      "https://www.ieeetechfutures2024/register"
                    )
                  }
                  className="p-2 bg-gray-600/20 text-white border border-neutral-200 font-semibold focus:outline:none focus:ring-0"
                >
                  Book Now
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default MobileNav;
