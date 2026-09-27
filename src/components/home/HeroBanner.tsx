import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/banner.png"; 

export default function HeroBanner() {
  return (
    <section className="bg-[#1e2128] rounded-3xl mx-6 mt-6 p-8 md:p-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 relative overflow-hidden">
      
      {/* Left Content */}
      <div className="flex-1 z-10 flex flex-col items-start">
        <span className="text-[#ccff00] font-bold text-sm tracking-widest uppercase mb-4">
          Workout Library
        </span>
        
        <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase leading-[1.1] mb-6">
          Train with intent.<br /> Log every set.
        </h1>
        
        <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        
        <Link 
          href="#library" 
          className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-colors"
        >
          BROWSE WORKOUTS
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 w-full flex justify-center md:justify-end z-10">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image src={heroImage} alt="banner" />
        </div>
      </div>
      
    </section>
  );
}