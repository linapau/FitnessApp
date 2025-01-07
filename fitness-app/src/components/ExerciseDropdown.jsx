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
    <div className="flex flex-col space-y-2 mt-2">
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
