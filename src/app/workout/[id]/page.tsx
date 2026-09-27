import { notFound } from "next/navigation";
import { Workout } from "@/types/index.types";
import WorkoutActions from "@/components/ui/WorkoutAction";

// Creating Promise
export default async function WorkoutDetails({ params }: { params: Promise<{ id: string }> }) {

  // Await the prams
  const resolvedParams = await params;
  const id = resolvedParams.id;

  let workout: Workout | null = null;

  try {
    // Fetchhing data with proper ID
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return notFound();
    }

    workout = await res.json();
  } catch (error) {
    console.error("Error fetching workout:", error);
    return notFound();
  }

  if (!workout) return null;

  const safeCategories = Array.isArray(workout.muscleGroups)
    ? workout.muscleGroups
    : typeof workout.muscleGroups === "string"
      ? [workout.muscleGroups]
      : [];

  return (
    <div className="max-w-[1400px] mx-auto w-full px-6 py-10 md:py-16">

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left: Huge Image */}
        <div className="w-full bg-gray-800 rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[700px] relative">
          <img
            src={workout.image || "https://via.placeholder.com/800"}
            alt={workout.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content Details */}
        <div className="flex flex-col">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-white uppercase mb-4">
            {workout.name}
          </h1>

          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            {workout.description || "A foundational compound movement that builds raw strength and muscle mass."}
          </p>

          {/* Category Pills */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {safeCategories.map((cat, index) => (
              <span key={index} className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {cat}
              </span>
            ))}
          </div>

          {/* Specs Table */}
          <div className="bg-[#1e2128] rounded-2xl p-6 mb-8 flex flex-col gap-4">
            <SpecRow label="EQUIPMENT" value={workout.equipment} />
            <SpecRow label="DIFFICULTY" value={workout.difficulty || "Intermediate"} />
            <SpecRow label="SETS" value={workout.sets?.toString() || "4"} />
            <SpecRow label="REPS" value={workout.reps || "6-8"} />
            <SpecRow label="DURATION" value={`${workout.duration} min`} />
            <SpecRow label="CALORIES" value={`${workout.caloriesBurned} kcal`} />
            <SpecRow label="RATING" value={workout.rating?.toString()} />
          </div>

          {/* Instructions List */}
          {workout.instructions && workout.instructions.length > 0 && (
            <div className="mb-8">
              <h3 className="font-oswald text-xl uppercase font-bold text-white mb-4">Instructions</h3>
              <ol className="text-gray-400 space-y-3 list-decimal list-inside">
                {workout.instructions.map((step, index) => (
                  <li key={index} className="leading-relaxed">
                    <span className="text-white ml-2">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Client Component: Interactive Buttons */}
          <WorkoutActions workout={workout} />

        </div>
      </div>
    </div>
  );
}

// Component to keep the Specs Table code clean
function SpecRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-0 text-sm">
      <span className="text-gray-500 uppercase font-medium">{label}</span>
      <span className="text-white font-medium text-right">{value || "-"}</span>
    </div>
  );
}