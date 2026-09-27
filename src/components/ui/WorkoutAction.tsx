"use client";
import { Workout } from "@/types/index.types";
import { usePlan } from "@/store/PlanContext";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater } = usePlan(); // PULL FUNCTIONS FROM STORE

  return (
    <div className="relative mt-8 flex flex-wrap gap-4">
      <button 
        onClick={() => addToPlan(workout)} // FIRE THE GLOBAL FUNCTION
        className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        Add to today&apos;s plan
      </button>

      <button 
        onClick={() => saveForLater(workout)} // FIRE THE GLOBAL FUNCTION
        className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        Save for later
      </button>
    </div>
  );
}