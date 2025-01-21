import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const initialUser = {
  name: 'Rob Deans',
  email: 'RobDeans@fitness.com',
  aboutMe: 'Software developer based in San Francisco. I like dogs. Every dog is beautiful. Remember.',
  avatar: null, // Ścieżka do zdjęcia użytkownika
  role: 'Administrator',
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [homeWorkoutPlan, setPlanForHome] = useState(null);
  const [homeDietPlan, setHomeDietPlan] = useState(null);

  const [user, setUser] = useState(initialUser);

  const updateUser = (updatedUser) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedUser }));
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  console.log('Current context values:', {
    screenSize,
    currentColor,
    currentMode,
  });


  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider  // share infos in context
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        homeWorkoutPlan,
        setPlanForHome,
        user,
        updateUser, 
        setHomeDietPlan,   
        homeDietPlan,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Hook to use of context
export const useStateContext = () => useContext(StateContext);
