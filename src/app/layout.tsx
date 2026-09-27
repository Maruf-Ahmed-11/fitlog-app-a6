import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlanProvider } from "@/store/PlanContext"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "FitLog | Workout Library",
  description: "A dark, no-nonsense gym companion.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}>
        <PlanProvider>
          <Navbar />
          
          <ToastContainer 
            position="top-center" autoClose={3000} hideProgressBar={false}
            newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable
            pauseOnHover theme="dark"
          />

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}