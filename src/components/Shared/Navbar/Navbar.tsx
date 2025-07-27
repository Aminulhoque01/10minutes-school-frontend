



"use client";
import {
  default as logo,
  default as userIcon,
} from "@/assets/hero/10mslogo-svg.svg";

// import { ImageBaseUrl } from "@/redux/features/blog/ImageBaseUrl";
import { useGetMyProfileQuery } from "@/redux/features/profile/profileApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const navLinks = [
  { name: "Home, Heim", href: "/" },
  { name: "Services, Dienstleistungen", href: "/service-page" },
  { name: "About, Us Über uns", href: "/about-us" },
  { name: "Subscription, Für dich", href: "/blog" },
  { name: "Feed, Für dich", href: "/faq" },
];

interface NavbarProps {
  setIsMobileMenuOpen: (value: boolean) => void;
}

const Navbar = ({ setIsMobileMenuOpen }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpenLocal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpenLocal((prev) => {
      const newState = !prev;
      setIsMobileMenuOpen(newState);  
      return newState;
    });
  };

  return (
    <header
      className={`w-full h-[80px] fixed top-0 z-50 transition-all duration-300 bg-[#F5F5F5]`}
    >
      <nav className="md:w-full md:container mx-auto px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={80}
            className="rounded-md"
          />
        </Link>

        <div className="flex justify-center items-center p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="search course"
              className="py-2 pl-10 pr-4 w-64 rounded-full border border-gray-200 focus:outline-none focus:ring-2"
            />
            <span className="absolute left-3 top-4 text-[#1EB9C6]">
              <IoIosSearch />
            </span>
          </div>
        </div>

      
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed top-[80px] left-0 w-full z-40">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpenLocal(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

        
        </div>
      )}
    </header>
  );
};

export default Navbar;