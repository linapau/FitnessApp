import React from 'react';

const ExamplePlans = ({ onSelectPlan }) => {
  const examplePlans = [
    {
      Monday: [{ name: 'Push-ups' }, { name: 'Sit-ups' }, {name: "3/4 Sit-Up", category: 'strength', level: 'beginner'}],
      Tuesday: [{ name: 'Running' }],
      Wednesday: [{name: 'Ab Crunch Machine'}, { name: 'Air Bike'}, {name: 'All Fours Quad Stretch'}],
      Thursday: [{name: 'Alternate Heel Touchers'}, {name: 'Alternate Incline Dumbbell Curl'}, {name: 'Alternate Leg Diagonal Bound'}, {name: 'Alternating Cable Shoulder Press'}],
      Friday: [{name: 'Sledgehammer Swings'}, {name: 'Smith Machine Behind the Back Shrug'}],
      Saturday: [{name: 'Smith Machine Incline Bench Press'}, {name: 'Smith Machine Leg Press'}],
      Sunday: [{name: 'Standing Long Jump'}],
    },
    {
      Monday: [{ name: 'Squats' }],
      Wednesday: [{ name: 'Jumping Jacks' }],
      Thursday: [{name: 'Alternate Heel Touchers'}, {name: 'Alternate Incline Dumbbell Curl'}, {name: 'Alternate Leg Diagonal Bound'}],
      Friday: [{name: 'Standing Hip Flexors'}, {name: 'Standing Elevated Quad Stretch'}],
      Saturday: [{name: 'Standing Elevated Quad Stretch'}, {name: 'Standing Dumbbell Upright Row'}, {name: 'Standing Dumbbell Triceps Extension'}],
      Sunday: [{name: 'Standing Dumbbell Press'}],
    },
  ];

  return (
    <div className="p-4 bg-white dark:bg-secondary-dark-bg rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Example Plans</h3>
      <ul className="space-y-4">
        {examplePlans.map((plan, index) => (
          <li key={index} className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
            <button
              className="text-blue-500 dark:text-blue-400 hover:underline"
              onClick={() => onSelectPlan(plan)}
            >
              Select Plan {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamplePlans;
