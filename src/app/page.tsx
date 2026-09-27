import HeroBanner from "@/components/home/HeroBanner";
import WorkoutCard from "@/components/ui/WorkoutCard";
import { Workout } from "@/types/index.types";

export default async function Home() {
  let workouts: Workout[] = [];

  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    workouts = await res.json();
  } catch (error) {
    console.error("Error loading workouts:", error);
  }

  return (
    <div className="pb-24 max-w-[1400px] mx-auto w-full">
      {/* Unified wrapper keeping everything aligned and centered */}
      
      <div className="px-6 mt-6">
        <HeroBanner />
      </div>
      
      <div id="library" className="px-6 mt-16">
        <h2 className="font-oswald text-3xl font-bold text-white uppercase mb-2">The Library</h2>
        <p className="text-gray-400 mb-8">Twelve lifts covering every major muscle group.</p>

        {/* 3x4 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.length > 0 ? (
            workouts.map((workout: Workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center py-10">No workouts found. Please try again later.</p>
          )}
        </div>
      </div>
      
    </div>
  );
}