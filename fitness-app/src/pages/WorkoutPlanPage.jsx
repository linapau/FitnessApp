/*import React, { useState } from 'react';
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
    console.log("day:", day);
    console.log("Adding exercise:", exercise); // Debug info
    setWeekPlan((prev) => ({
      ...prev,
      [day]: [...prev[day], exercise],
    }));
  };

  const handleSelectExamplePlan = (examplePlan) => {
    setWeekPlan(examplePlan);
  };

  return (
    <div className="p-6 bg-main-bg dark:bg-main-dark-bg text-gray-800 dark:text-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Workout Plan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.keys(weekPlan).map((day) => (
          <DayWorkout
            key={day}
            day={day}
            exercisesData={weekPlan[day]}
            onAddExercise={(exercise) => handleAddExercise(day, exercise)}
            availableExercises={exercisesData.exercises}
            className="shadow-md rounded-lg bg-white dark:bg-secondary-dark-bg p-4"
          />
        ))}
      </div>
      <div className="mt-8">
        <ExamplePlans onSelectPlan={handleSelectExamplePlan} />
      </div>
      <button
        onClick={() => setPlanForHome(weekPlan)}
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition-all"
      >
        Save Plan to Home
      </button>
    </div>
  );
};

export default WorkoutPlanPage;*/

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
      [day]: [...prev[day], exercise],
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
            onAddExercise={(exercise) => handleAddExercise(weekday, exercise)}
            availableExercises={exercisesData.exercises}
            className="shadow-md rounded-lg bg-white dark:bg-secondary-dark-bg p-4"
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

