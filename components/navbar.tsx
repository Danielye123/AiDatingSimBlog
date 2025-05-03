"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky w-full top-0 z-10 min-h-[80px] bg-white/80 dark:bg-[#1f1b3a]/90 backdrop-blur-md border-b border-[#F5C1CC]/20 dark:border-[#2e2b4f] shadow-sm flex items-center transition-colors duration-300">
      {/* Gradient accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-pulse" />

      <div className="px-6 flex items-center justify-between w-full">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#F5C1CC] dark:border-pink-400">
            <Image
              src="/globe.svg"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="font-bold text-2xl text-[#2B2D42] dark:text-white transition-colors">
            AnimeBlog
          </span>
        </Link>

        <div className="flex items-center gap-10">
        {/* Center: Nav Links */}
        <div className="hidden md:flex justify-center items-center gap-6 text-xl font-semibold text-[#2B2D42] dark:text-white">
          {["Home", "About", "Tags", "Bio"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase() === "home" ? "" : label.toLowerCase()}`}
              className="relative px-3 py-2 transition-all duration-300 hover:text-[#F5C1CC] dark:hover:text-pink-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#F5C1CC] dark:after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Theme toggle + mobile menu */}
          <ThemeToggle />
          <button className="md:hidden p-2 rounded-lg text-[#2B2D42] dark:text-white hover:bg-[#F5C1CC]/10 dark:hover:bg-[#2e2b4f] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
        </div>
    </nav>
  );
}
