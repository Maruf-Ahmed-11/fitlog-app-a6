export interface Workout {
  id: string | number;
  name: string;
  description?: string;
  muscleGroups: string[];
  equipment: string;
  difficulty?: string;
  sets?: number;
  reps?: string;
  duration: number; 
  caloriesBurned: number;   
  rating: number;
  instructions?: string[];
  image: string;
}

export interface PlanContextType {
  todayPlan: Workout[];
  savedWorkouts: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: string | number) => void;
  saveForLater: (workout: Workout) => void;
  removeFromSaved: (id: string | number) => void;
  markAsDone: (id: string | number) => void;
}