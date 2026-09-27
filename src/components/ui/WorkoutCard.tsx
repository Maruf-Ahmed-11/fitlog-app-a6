import Link from "next/link";
import { Workout } from "@/types/index.types";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  // to ensure categories is always an array so .map() never crashes
  const safeCategories = Array.isArray(workout?.category)
    ? workout.category
    : typeof workout?.category === "string"
      ? [workout.category]
      : [];

  return (
    <Link href={`/workout/${workout?.id || "#"}`} className="block group">
      <div className="bg-[#1e2128] rounded-2xl overflow-hidden transition-transform group-hover:scale-[1.02] border border-transparent group-hover:border-[#ccff00]/30 cursor-pointer flex flex-col h-full">

        {/* Image Section */}
        <div className="relative w-full h-48 bg-gray-800">
          <img
            // Fallback image in case the API misses the URL
            src={workout?.image || "https://via.placeholder.com/400"}
            alt={workout?.name || "Workout"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Category Pills */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {safeCategories.map((cat, index) => (
              <span
                key={index}
                className="bg-[#ccff00] text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title & Equipment */}
          <h3 className="text-white font-oswald text-xl uppercase font-bold mb-1">
            {workout?.name || "Unknown Workout"}
          </h3>
          <p className="text-gray-400 text-xs mb-5 flex-grow">
            {workout?.equipment || "No equipment specified"}
          </p>

          {/* Stats Row */}
          <div className="flex items-center gap-4 text-gray-400 text-xs mt-auto font-medium">
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {workout?.duration || 0} min
            </div>

            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
              {workout?.calories || 0} kcal
            </div>

            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#ccff00" stroke="#ccff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              {workout?.rating || 0}
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}