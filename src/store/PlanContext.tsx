"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Workout, PlanContextType } from "@/types/index.types";
import { toast } from "react-toastify";

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    if (todayPlan.find(w => w.id === workout.id)) {
      toast.info(`${workout.name} is already in your plan.`, { style: { background: "#1e2128", color: "#fff" } });
      return;
    }
    if (todayPlan.length >= 5) {
      toast.error("Cap of five lifts for today reached!", { style: { background: "#1e2128", color: "#fff" } });
      return;
    }
    setTodayPlan([...todayPlan, workout]);
    toast.success(`Added ${workout.name} to plan!`, { style: { border: "1px solid #ccff00", background: "#1e2128", color: "#fff" } });
  };

  const removeFromPlan = (id: string | number) => {
    setTodayPlan(todayPlan.filter(w => w.id !== id));
    toast.info("Removed from plan", { style: { background: "#1e2128", color: "#fff" } });
  };

  const saveForLater = (workout: Workout) => {
    if (savedWorkouts.find(w => w.id === workout.id)) {
      toast.info(`${workout.name} is already saved.`, { style: { background: "#1e2128", color: "#fff" } });
      return;
    }
    setSavedWorkouts([...savedWorkouts, workout]);
    toast.success(`Saved ${workout.name} for later!`, { style: { border: "1px solid gray", background: "#1e2128", color: "#fff" } });
  };

  const removeFromSaved = (id: string | number) => {
    setSavedWorkouts(savedWorkouts.filter(w => w.id !== id));
    toast.info("Removed from saved", { style: { background: "#1e2128", color: "#fff" } });
  };

  const markAsDone = (id: string | number) => {
    setTodayPlan(todayPlan.filter(w => w.id !== id));
    toast.success("Workout marked as done!", { style: { border: "1px solid #ccff00", background: "#1e2128", color: "#fff" } });
  };

  return (
    <PlanContext.Provider value={{ 
      todayPlan, savedWorkouts, addToPlan, removeFromPlan, saveForLater, removeFromSaved, markAsDone 
    }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (context === undefined) throw new Error("usePlan must be used within a PlanProvider");
  return context;
}