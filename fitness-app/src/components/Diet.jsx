import React from 'react';

const dietData = {
  diets: [ 
    {
      day: "Monday",
      meals: [
        { name: "Breakfast", time: "8:00 AM", items: ["Oatmeal", "Banana", "Almond Milk"] },
        { name: "Lunch", time: "1:00 PM", items: ["Grilled Chicken", "Brown Rice", "Steamed Broccoli"] },
        { name: "Dinner", time: "7:00 PM", items: ["Salmon", "Quinoa", "Asparagus"] }
      ]
    },
    {
      day: "Tuesday",
      meals: [
        { name: "Breakfast", time: "8:00 AM", items: ["Greek Yogurt", "Granola", "Blueberries"] },
        { name: "Lunch", time: "12:30 PM", items: ["Turkey Sandwich", "Mixed Greens", "Apple"] },
        { name: "Dinner", time: "6:30 PM", items: ["Grilled Shrimp", "Couscous", "Zucchini"] }
      ]
    }
  ]
};

// Komponent kafelka z posiłkami
const MealCard = ({ name, time, items }) => (
  <div className="p-4 bg-gray-100 rounded-md shadow-md mb-4">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-sm text-gray-500">{time}</p>
    <ul className="mt-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">- {item}</li>
      ))}
    </ul>
  </div>
);

// Komponent dnia diety
const DietDay = ({ day, meals }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg mb-6">
    <h2 className="text-xl font-bold mb-4">{day}</h2>
    {meals.map((meal, index) => (
      <MealCard key={index} {...meal} />
    ))}
  </div>
);

// Główny komponent Diets
const Diets = () => (
  <div>
    {dietData.diets.map((diet, index) => (
      <DietDay key={index} {...diet} />
    ))}
  </div>
);

export default Diets;
