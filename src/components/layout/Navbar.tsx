"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { usePlan } from "@/store/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { todayPlan, savedWorkouts } = usePlan();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-[#0f1115] border-b border-[#1e2128] z-50">
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

      {/* Middle: Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-1 bg-[#1e2128] p-1 rounded-full">
        <Link
          href="/"
          className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
            pathname === "/" 
              ? "bg-[#ccff00]/10 text-[#ccff00]" 
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

      {/* Right: Badges & Mobile Menu Toggle */}
      <div className="flex items-center gap-4 text-sm font-medium">
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/my-plan" className="flex items-center gap-2 text-white">
            Plan 
            <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${todayPlan.length > 0 ? "bg-[#ccff00] text-black" : "border border-gray-500 text-white"}`}>
              {todayPlan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 text-white">
            Saved 
            <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${savedWorkouts.length > 0 ? "bg-[#ccff00] text-black" : "border border-gray-500 text-white"}`}>
              {savedWorkouts.length}
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-gray-400 hover:text-white focus:outline-none p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f1115] border-b border-[#1e2128] flex flex-col p-4 gap-2 md:hidden shadow-xl shadow-black/50">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-medium px-4 py-3 rounded-lg transition-all ${
              pathname === "/" 
                ? "bg-[#ccff00]/10 text-[#ccff00]" 
                : "text-gray-400 hover:text-white hover:bg-[#1e2128]"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-medium px-4 py-3 rounded-lg transition-all ${
              pathname === "/my-plan" 
                ? "bg-[#ccff00]/10 text-[#ccff00]" 
                : "text-gray-400 hover:text-white hover:bg-[#1e2128]"
            }`}
          >
            My Plan
          </Link>
          
          <div className="flex items-center justify-around px-4 py-4 mt-2 border-t border-[#1e2128] sm:hidden">
            <Link href="/my-plan" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white">
              Plan 
              <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${todayPlan.length > 0 ? "bg-[#ccff00] text-black" : "border border-gray-500 text-white"}`}>
                {todayPlan.length}
              </span>
            </Link>
            <Link href="/my-plan" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white">
              Saved 
              <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${savedWorkouts.length > 0 ? "bg-[#ccff00] text-black" : "border border-gray-500 text-white"}`}>
                {savedWorkouts.length}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}