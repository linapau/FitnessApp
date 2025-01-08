import React, { useState } from 'react';
import { DayWorkout, ExamplePlans } from '../components';
import { exercisesData } from '../data/dummy';

/*const WorkoutPlanPage = ({ setPlanForHome }) => {
  const [weekPlan, setWeekPlan] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });*/
  const WorkoutPlanPage = ({ setPlanForHome }) => {
    const defaultWeekPlan = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };
  
    const [weekPlan, setWeekPlan] = useState(defaultWeekPlan);

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

  const handleResetPlan = () => {
    setWeekPlan(defaultWeekPlan);
  };

 //////////
 const handleSavePlan = () => {
    setPlanForHome(weekPlan); // Zapisz plan w stanie globalnym
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
      <div className='mt-4'>
        <button
            onClick={handleSavePlan}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow"
            >
            Save Plan to Home
            </button>
        <button
            onClick={handleResetPlan}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow ml-4"
            >
            Reset Plan
            </button>
        </div>
    </div>
  );
};

export default WorkoutPlanPage;

/*
import React, { useState } from 'react';
import { DayWorkout, ExamplePlans } from '../components';
import { exercisesData } from '../data/dummy';

const WorkoutPlanPage = ({ setPlanForHome }) => {
  const defaultWeekPlan = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };

  const [weekPlan, setWeekPlan] = useState(defaultWeekPlan);

  const handleAddExercise = (day, exercise) => {
    setWeekPlan((prev) => ({
      ...prev,
      [day]: [...prev[day], exercise],
    }));
  };

  const handleSelectExamplePlan = (examplePlan) => {
    setWeekPlan(examplePlan);
  };

  const handleResetPlan = () => {
    setWeekPlan(defaultWeekPlan);
  };

  return (
    <div className="p-6 bg-white dark:bg-secondary-dark-bg rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Your Workout Plan</h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {Object.entries(weekPlan).map(([day, exercises]) => (
          <DayWorkout
            key={day}
            day={day}
            exercisesData={exercises}
            onAddExercise={(exercise) => handleAddExercise(day, exercise)}
            availableExercises={exercisesData.exercises}
            className="shadow-md rounded-lg bg-white dark:bg-secondary-dark-bg p-4"
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <ExamplePlans onSelectPlan={handleSelectExamplePlan} />
        <button
          onClick={handleResetPlan}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow"
        >
          Reset Plan
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setPlanForHome(weekPlan)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow"
        >
          Save Plan to Home
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlanPage;


*/