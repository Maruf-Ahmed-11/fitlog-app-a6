"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Adjust this import path or extension based on exactly where your logo is inside src/assets
import logo from "@/assets/logo.png"; 

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0f1115] border-b border-[#1e2128]">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-wider text-white">
          <Image 
            src={logo} 
            alt="FitLog Logo" 
            width={28} 
            height={28} 
            className="object-contain"
          />
          FITLOG
        </Link>
      </div>

      {/* Middle: Navigation Links */}
      <div className="hidden md:flex items-center gap-1 bg-[#1e2128] p-1 rounded-full">
        <Link
          href="/"
          className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
            pathname === "/" 
              ? "bg-[#ccff00]/10 text-[#ccff00]" // 10% opacity accent background + accent text
              : "text-gray-400 hover:text-white"
          }`}
        >
          Workouts
        </Link>
        <Link
          href="/my-plan"
          className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
            pathname === "/my-plan" 
              ? "bg-[#ccff00]/10 text-[#ccff00]" 
              : "text-gray-400 hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </div>

      {/* Right: Badges */}
      <div className="flex items-center gap-4 text-sm font-medium">
        <Link href="/my-plan" className="flex items-center gap-2 text-white">
          Plan 
          <span className="flex items-center justify-center w-6 h-6 bg-[#ccff00] text-black rounded-full text-xs font-bold">
            0
          </span>
        </Link>
        <Link href="/my-plan" className="flex items-center gap-2 text-white">
          Saved 
          <span className="flex items-center justify-center w-6 h-6 border border-gray-500 rounded-full text-xs font-bold">
            0
          </span>
        </Link>
      </div>
    </nav>
  );
}