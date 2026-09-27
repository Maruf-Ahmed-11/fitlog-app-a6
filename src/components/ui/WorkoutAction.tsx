"use client";

import { Workout } from "@/types/index.types";
import { toast } from "react-toastify";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  
  const handleAddToPlan = () => {
    // Calling the toast notification
    toast.success(`Added ${workout.name} to today's plan!`, {
      style: { border: "1px solid #ccff00", background: "#1e2128", color: "#fff" }
    });
  };

  const handleSaveForLater = () => {
    toast.info(`Saved ${workout.name} for later!`, {
      style: { border: "1px solid gray", background: "#1e2128", color: "#fff" }
    });
  };

  return (
    <div className="relative mt-8 flex flex-wrap gap-4">
      {/* Primary Button */}
      <button 
        onClick={handleAddToPlan}
        className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        Add to today&apos;s plan
      </button>

      {/* Secondary Button */}
      <button 
        onClick={handleSaveForLater}
        className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        Save for later
      </button>
    </div>
  );
}