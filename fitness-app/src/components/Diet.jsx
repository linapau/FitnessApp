import React, { useState } from 'react';

// Importuj JSON
import dietData from '../data/full_realistic_diet_data.json';

// Komponent do wyświetlania posiłku
const MealCard = ({ name, time, items }) => (
  <div className="p-4 bg-gray-100 rounded-md shadow-md">
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-sm text-gray-500">{time}</p>
    <ul className="mt-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">- {item}</li>
      ))}
    </ul>
  </div>
);

// Komponent do wyświetlania dnia tygodnia
const DietDay = ({ day, meals }) => (
  <div className="p-4 bg-white rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">{day}</h2>
    {meals.map((meal, index) => (
      <MealCard key={index} {...meal} />
    ))}
  </div>
);

// Główny komponent Diets
const Diets = () => {
  const [calories, setCalories] = useState('1800'); // Domyślna kaloryczność

  // Obsługa zmiany kaloryczności
  const handleCalorieChange = (event) => {
    setCalories(event.target.value);
  };

  return (
    <div className="p-6">
      {/* Nagłówek z wyborem kaloryczności */}
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
      {/* Siatka z dniami tygodnia */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dietData[calories].map((diet, index) => (
          <DietDay key={index} {...diet} />
        ))}
      </div>
    </div>
  );
};

export default Diets;
