import React from 'react';

const ExamplePlans = ({ onSelectPlan }) => {
  const examplePlans = [
    {
      Monday: [{ name: 'Push-ups' }, { name: 'Sit-ups' }],
      Tuesday: [{ name: 'Running' }],
      // Dodaj więcej przykładowych planów...
    },
    {
      Monday: [{ name: 'Squats' }],
      Wednesday: [{ name: 'Jumping Jacks' }],
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
