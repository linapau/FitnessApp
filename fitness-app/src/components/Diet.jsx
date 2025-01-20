import React, { useState } from 'react';

// Funkcja do generowania posiłków
function generateMeals(calories) {
  const baseMeals = [
    { name: "Breakfast", baseCalories: 400, items: ["Oatmeal", "Banana", "Almond Milk"] },
    { name: "Snack", baseCalories: 200, items: ["Apple", "Peanut Butter"] },
    { name: "Lunch", baseCalories: 600, items: ["Grilled Chicken", "Brown Rice", "Steamed Broccoli"] },
    { name: "Snack", baseCalories: 200, items: ["Greek Yogurt", "Blueberries"] },
    { name: "Dinner", baseCalories: 600, items: ["Salmon", "Quinoa", "Asparagus"] },
  ];

  const scaleFactor = calories / 2000; // Skalowanie posiłków dla kaloryczności
  return baseMeals.map((meal) => ({
    name: meal.name,
    time:
      meal.name === "Breakfast"
        ? "8:00 AM"
        : meal.name === "Lunch"
        ? "1:00 PM"
        : meal.name === "Dinner"
        ? "7:00 PM"
        : "3:00 PM",
    calories: Math.round(meal.baseCalories * scaleFactor),
    items: meal.items.map((item) => `${item} x${scaleFactor.toFixed(1)}`),
  }));
}

// Funkcja do generowania dni tygodnia
const daysOfWeekWithMeals = (calories) => [
  { day: "Monday", meals: generateMeals(calories) },
  { day: "Tuesday", meals: generateMeals(calories) },
  { day: "Wednesday", meals: generateMeals(calories) },
  { day: "Thursday", meals: generateMeals(calories) },
  { day: "Friday", meals: generateMeals(calories) },
  { day: "Saturday", meals: generateMeals(calories) },
  { day: "Sunday", meals: generateMeals(calories) },
];

// Rozszerzony JSON z danymi dietetycznymi
const dietData = {
  1500: daysOfWeekWithMeals(1500),
  1800: daysOfWeekWithMeals(1800),
  2000: daysOfWeekWithMeals(2000),
  2200: daysOfWeekWithMeals(2200),
  2500: daysOfWeekWithMeals(2500),
  2800: daysOfWeekWithMeals(2800),
  3000: daysOfWeekWithMeals(3000),
  3200: daysOfWeekWithMeals(3200),
  3500: daysOfWeekWithMeals(3500),
};

// Komponenty kafelków
const MealCard = ({ name, time, items, calories }) => (
  <div className="p-4 bg-gray-100 rounded-md shadow-md">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-sm text-gray-500">{time}</p>
    <p className="text-sm text-gray-500">Calories: {calories}</p>
    <ul className="mt-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">- {item}</li>
      ))}
    </ul>
  </div>
);

const DietDay = ({ day, meals }) => (
  <div className="p-4 bg-white rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">{day}</h2>
    {meals.map((meal, index) => (
      <MealCard key={index} {...meal} />
    ))}
  </div>
);

const Diets = () => {
  const [calories, setCalories] = useState('1500');
  const handleCalorieChange = (event) => {
    setCalories(event.target.value);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Choose Your Diet Plan</h1>
        <select
          value={calories}
          onChange={handleCalorieChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm"
        >
          {Object.keys(dietData).map((key) => (
            <option value={key} key={key}>
              {key} kcal
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dietData[calories].map((diet, index) => (
          <DietDay key={index} {...diet} />
        ))}
      </div>
    </div>
  );
};

export default Diets;
