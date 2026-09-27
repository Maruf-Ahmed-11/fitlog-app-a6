import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-oswald text-7xl font-bold text-[#ccff00] mb-4">404</h1>
      <h2 className="text-2xl text-white font-bold mb-4 uppercase tracking-wide">Lift Not Found</h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for has been dropped. Let&apos;s get back to the plan.
      </p>
      <Link 
        href="/"
        className="bg-[#ccff00] text-black font-bold py-3 px-6 rounded-full hover:bg-[#b3e600] transition-colors"
      >
        RETURN TO LIBRARY
      </Link>
    </div>
  );
}