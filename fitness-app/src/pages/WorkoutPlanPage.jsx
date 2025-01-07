import React, { useState } from 'react';
import { DayWorkout, ExamplePlans } from '../components';
import { exercisesData } from '../data/dummy';

const WorkoutPlanPage = ({ setPlanForHome }) => {
  const [weekPlan, setWeekPlan] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const handleAddExercise = (day, exercise) => {
    console.log(`Adding exercise to ${day}:`, exercise);
    setWeekPlan((prev) => ({
      ...prev,
      [day]: [...prev[day], exercise], // Dodanie poprawnego obiektu ćwiczenia
    }));
  };

  const handleSelectExamplePlan = (examplePlan) => {
    console.log("Selected example plan:", examplePlan);
    setWeekPlan(examplePlan);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        Create Your Workout Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(weekPlan).map(([weekday, exercises]) => (
          <DayWorkout
            key={weekday}
            day={weekday}
            exercisesData={exercises}
            onAddExercise={handleAddExercise}
            availableExercises={exercisesData.exercises}
          />
        ))}
      </div>
      <ExamplePlans
        onSelectPlan={handleSelectExamplePlan}
        className="mt-6"
      />
      <button
        onClick={() => setPlanForHome(weekPlan)}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200"
      >
        Save Plan to Home
      </button>
    </div>
  );
};

export default WorkoutPlanPage;


