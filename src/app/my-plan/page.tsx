"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePlan } from "@/store/PlanContext";
import { Workout } from "@/types/index.types"; // Importing from dedicated types file

export default function MyPlan() {
  const { todayPlan, savedWorkouts, removeFromPlan, removeFromSaved, markAsDone } = usePlan();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">("Duration");

  // Safely cast the Context arrays to dedicated Workout type
  const safeTodayPlan: Workout[] = todayPlan || [];
  const safeSavedWorkouts: Workout[] = savedWorkouts || [];

  const currentList: Workout[] = activeTab === "plan" ? safeTodayPlan : safeSavedWorkouts;

  // Applying the strict Workout type to a and b
  const sortedList = [...currentList].sort((a: Workout, b: Workout) => {
    if (sortBy === "Duration") return (Number(b.duration) || 0) - (Number(a.duration) || 0);
    if (sortBy === "Calories") return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
    if (sortBy === "Rating") return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    return 0;
  });

  const totalExercises = safeTodayPlan.length;
  // Applying the strict Workout type to curr, and number to acc
  const totalMinutes = safeTodayPlan.reduce((acc: number, curr: Workout) => acc + (Number(curr.duration) || 0), 0);
  const totalCalories = safeTodayPlan.reduce((acc: number, curr: Workout) => acc + (Number(curr.caloriesBurned) || 0), 0);

  return (
    <div className="max-w-[1400px] mx-auto w-full px-6 py-10 md:py-16">
      <h1 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase mb-2">MY PLAN</h1>
      <p className="text-gray-400 text-lg mb-10">Cap of five lifts for today. Finish them, then load more.</p>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#1e2128] rounded-2xl overflow-hidden mb-8 border border-gray-800">
        <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800">
          <div className="text-gray-400 text-sm mb-1">Exercises</div>
          <div className="font-oswald text-5xl font-bold text-[#ccff00]">{totalExercises}</div>
        </div>
        <div className="p-6 border-b md:border-b-0 md:border-r border-gray-800">
          <div className="text-gray-400 text-sm mb-1">Minutes</div>
          <div className="font-oswald text-5xl font-bold text-white">{totalMinutes}</div>
        </div>
        <div className="p-6">
          <div className="text-gray-400 text-sm mb-1">Calories</div>
          <div className="font-oswald text-5xl font-bold text-white">{totalCalories}</div>
        </div>
      </div>

      {/* Tabs and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex bg-[#1e2128] p-1 rounded-xl w-full md:w-auto">
          <button
            onClick={() => setActiveTab("plan")}
            className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === "plan" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"}`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === "saved" ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"}`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <span className="text-gray-400 text-sm">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "Duration" | "Calories" | "Rating")}
            className="bg-[#1e2128] text-white text-sm border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-[#ccff00]"
          >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

      {/* List Area */}
      <div className="flex flex-col gap-4 min-h-[400px]">
        {sortedList.length === 0 ? (
          <div className="border border-dashed border-gray-700 rounded-2xl flex flex-col items-center justify-center p-16 text-center h-[400px]">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase mb-2">NOTHING HERE YET</h3>
            <p className="text-gray-400 mb-6">Browse the library and add a lift to get today moving.</p>
            <Link href="/" className="bg-[#ccff00] text-black font-bold py-3 px-6 rounded-full hover:bg-[#b3e600] transition-colors">
              Go to workouts
            </Link>
          </div>
        ) : (
          sortedList.map((workout: Workout) => (
            <div key={workout.id} className="bg-[#1e2128] rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 group hover:border-[#ccff00]/30 border border-transparent transition-colors">

              <div className="relative w-full md:w-48 h-32 bg-gray-800 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={workout.image || "https://via.placeholder.com/400"}
                  alt={workout.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-cover"
                />
              </div>

              <div className="flex-grow w-full">
                <h3 className="font-oswald text-xl uppercase font-bold text-white mb-1">{workout.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{workout.equipment}</p>

                <div className="flex items-center gap-4 text-gray-400 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {workout.duration || 0} min
                  </div>
                  <div className="flex items-center gap-1.5 text-[#ccff00]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                    {workout.caloriesBurned || 0} kcal
                  </div>
                  <div className="flex items-center gap-1.5 text-[#ccff00]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    {workout.rating || 0}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap md:flex-nowrap items-center gap-3 w-full md:w-auto justify-start md:justify-end shrink-0 mt-4 md:mt-0">
                <Link href={`/workout/${workout.id}`} className="px-5 py-2 rounded-full border border-gray-600 text-white text-sm font-bold hover:bg-gray-800 transition-colors whitespace-nowrap">
                  View Details
                </Link>

                {activeTab === "plan" && (
                  <button
                    onClick={() => markAsDone(workout.id)}
                    className="px-5 py-2 rounded-full bg-[#ccff00] text-black text-sm font-bold hover:bg-[#b3e600] transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    ✓ Mark as Done
                  </button>
                )}

                <button
                  onClick={() => activeTab === "plan" ? removeFromPlan(workout.id) : removeFromSaved(workout.id)}
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800 shrink-0"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}