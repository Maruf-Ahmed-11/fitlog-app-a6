export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      {/* A simple CSS spinner using Tailwind */}
      <div className="w-12 h-12 border-4 border-[#1e2128] border-t-[#ccff00] rounded-full animate-spin"></div>
      <p className="text-[#ccff00] font-oswald uppercase tracking-wider animate-pulse">
        Loading Workouts...
      </p>
    </div>
  );
}