import React, { useState } from 'react';

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

export default ExerciseDropdown;
