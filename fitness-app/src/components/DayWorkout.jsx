import React from 'react';
import ExerciseDropdown from './ExerciseDropdown';

const DayWorkout = ({ day, exercisesData, onAddExercise, availableExercises }) => {
  return (
    <div className="p-4 bg-white dark:bg-secondary-dark-bg rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center">{day}</h2>
      <ul className="space-y-2">
        {exercisesData.map((exercise, index) => (
          <li
            key={index}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200"
          >
            <div className="font-medium">{exercise.name || "Unnamed Exercise"}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {exercise.category ? `Category: ${exercise.category}` : "Category: Unknown"}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {exercise.level ? `Level: ${exercise.level}` : "Level: Unknown"}
            </div>
          </li>
        ))}
      </ul>
      <ExerciseDropdown
        availableExercises={availableExercises}
        onSelectExercise={(exercise) => onAddExercise(day, exercise)}
      />
    </div>
  );
};

export default DayWorkout;
