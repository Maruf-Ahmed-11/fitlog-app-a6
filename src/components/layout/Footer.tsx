import Image from "next/image";

import logo from "@/assets/logo.png"; 

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-8 py-8 bg-[#0f1115] border-t border-[#1e2128] text-sm text-gray-500">
      {/* Left: Brand Logo */}
      <div className="flex items-center gap-3 text-lg font-bold tracking-wider text-white mb-4 md:mb-0">
        <Image 
          src={logo} 
          alt="FitLog Logo" 
          width={24} 
          height={24} 
          className="object-contain"
        />
        FITLOG
      </div>
      
      {/* Right: Copyright */}
      <p>
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
}