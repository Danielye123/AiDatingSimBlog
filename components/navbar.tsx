"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <nav className="sticky py-10 top-0 z-10 bg-white/80 dark:bg-[#1f1b3a]/90 backdrop-blur-md border-b border-[#F5C1CC]/20 dark:border-[#2e2b4f] shadow-sm transition-colors duration-300">
      {/* Gradient accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-pulse" />

      <div className="mx-auto px-4 py-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#F5C1CC] dark:border-pink-400">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl text-[#2B2D42] dark:text-white transition-colors duration-300">
              AnimeBlog
            </span>
          </Link>

          <div className="flex flex-row gap-10">
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="relative px-3 py-2 text-[#2B2D42] dark:text-white font-medium transition-all duration-300 hover:text-[#F5C1CC] dark:hover:text-pink-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#F5C1CC] dark:after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="relative px-3 py-2 text-[#2B2D42] dark:text-white font-medium transition-all duration-300 hover:text-[#F5C1CC] dark:hover:text-pink-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#F5C1CC] dark:after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/tags"
              className="relative px-3 py-2 text-[#2B2D42] dark:text-white font-medium transition-all duration-300 hover:text-[#F5C1CC] dark:hover:text-pink-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#F5C1CC] dark:after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Tags
            </Link>
            <Link
              href="/bio"
              className="relative px-3 py-2 text-[#2B2D42] dark:text-white font-medium transition-all duration-300 hover:text-[#F5C1CC] dark:hover:text-pink-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#F5C1CC] dark:after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Bio
            </Link>
          </div>

          <div className="flex items-center gap-2">
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
        </div>
      </div>
    </nav>
  )
}
