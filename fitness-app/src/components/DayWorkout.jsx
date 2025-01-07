import React from 'react';
import ExerciseDropdown from './ExerciseDropdown';

const DayWorkout = ({ day, exercisesData, onAddExercise, availableExercises }) => {
  return (
    <div className="p-4 bg-white dark:bg-secondary-dark-bg rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-center">{day}</h2>
      <ul className="space-y-2">
  {exercisesData.map((exercise, index) => {
    console.log("Rendering exercise:", exercise);
    return (
      <li
        key={index}
        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200"
      >
        {exercise.name || "Unnamed Exercise"}
      </li>
    );
  })}
</ul>
      <ExerciseDropdown
        availableExercises={availableExercises}
        onSelectExercise={(exercise) => onAddExercise(day, exercise)}
      />
    </div>
  );
};

export default DayWorkout;
