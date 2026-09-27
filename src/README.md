# FitLog — Workout Library

## Description
FitLog is a dark, no-nonsense gym companion built for focused training. It allows users to browse a comprehensive library of exercises, view detailed technical specifications for each movement, and seamlessly organize their routines by locking lifts into a daily plan or saving them for later. 

## Technologies Used
* **Framework:** Next.js (App Router)
* **Library:** React
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **State Management:** React Context API
* **Data Fetching:** Fetch API (Server and Client components)

## 5 Key Features
1. **Responsive Workout Library:** A dynamic, mobile-friendly grid that displays workout data fetched from an external API, complete with category tags and key metrics.
2. **Interactive Planning System:** Users can add workouts to "Today's Plan" or "Save for Later," updating global state and instantly reflecting changes in the live navigation bar counters.
3. **Dynamic Routing & Details:** Dedicated, dynamically generated pages for each exercise featuring high-quality imagery, step-by-step instructions, and difficulty specifications.
4. **Live Metrics Dashboard:** The "My Plan" page automatically calculates and updates the total number of exercises, combined duration, and total calories based on the user's current selections.
5. **Advanced Sorting & Management:** Users can organize their active or saved plans using a custom dropdown to sort by Duration, Calories, or Rating, alongside one-click actions to mark workouts as done or remove them entirely.