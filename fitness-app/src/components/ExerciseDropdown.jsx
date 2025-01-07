/*import React, { useState } from 'react';

const ExerciseDropdown = ({ availableExercises, onSelectExercise }) => {
  const [selectedExercise, setSelectedExercise] = useState('');

  const handleAdd = () => {
    if (selectedExercise) {
      const exercise = availableExercises.find((ex) => ex.name === selectedExercise);
      console.log(exercise);
      console.log(exercise.name);
      onSelectExercise(exercise); //passing the variable to DayWorkout
      setSelectedExercise(""); //clean dropdown
    }
  };

  return (
    <div className="mt-4">
      <select
        value={selectedExercise}
        onChange={(e) => setSelectedExercise(e.target.value)}
        className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-500"
      >
        <option value="">Select Exercise</option>
        {availableExercises.map((exercise, index) => (
          <option key={index} value={exercise.name}>
            {exercise.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleAdd}
        className="mt-2 w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-all"
      >
        Add Exercise
      </button>
    </div>
  );
};

export default ExerciseDropdown;*/

import React, { useState } from 'react';

const ExerciseDropdown = ({ availableExercises, onSelectExercise }) => {
  const [selectedExercise, setSelectedExercise] = useState("");

  const handleAdd = () => {
    if (selectedExercise) {
      const exercise = availableExercises.find((ex) => ex.name === selectedExercise);
      if (exercise) {
        console.log("Selected exercise:", exercise);
        onSelectExercise(exercise); // Przekazywanie całego obiektu ćwiczenia
        setSelectedExercise(""); // Czyścimy dropdown
      } else {
        console.error("Exercise not found in available exercises");
      }
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <select
        value={selectedExercise}
        onChange={(e) => setSelectedExercise(e.target.value)}
        className="p-2 border rounded-md text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
      >
        <option value="" disabled>
          Select an exercise
        </option>
        {availableExercises.map((exercise) => (
          <option key={exercise.name} value={exercise.name}>
            {exercise.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-200"
      >
        Add Exercise
      </button>
    </div>
  );
};

export default ExerciseDropdown;
