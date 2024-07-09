import { NavbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const NavList = () => {
  const pathname = window.location.pathname
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const windowBottom = scrollPosition + windowHeight;
  
        // Calculate the visible portion of the section
        const visibleHeight = Math.min(
          windowBottom,
          sectionTop + sectionHeight
        ) - Math.max(scrollPosition, sectionTop);
  
        // Calculate the percentage of section visibility
        const visibilityPercentage = (visibleHeight / sectionHeight) * 100;
  
        // Set a threshold for visibility percentage (adjust as needed)
        const visibilityThreshold = 50; // At least 50% visible
  
        if (visibilityPercentage >= visibilityThreshold) {
          setActiveSection(section.id);
          console.log("Section changed");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-center gap-8 lg:gap-16 max-sm:hidden text-neutral-300">
      {NavbarLinks.map((link, key) => {
        return (
          <div
            key={key}
            className={cn(
              "flex items-center gap-1 pb-1 transition-all duration-300 ",
              {
                "scale-110 font-semibold text-white": activeSection===link.name,
              }
            )}
          >
            <a href={link.route}>
              {link.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NavList;
