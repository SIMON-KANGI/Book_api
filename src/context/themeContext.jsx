import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();
const UpdateThemeContext =createContext()
export function UpdateTheme() { // Custom hook for toggle function
  return useContext(UpdateThemeContext);
}
function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const ToggleTheme = () => {
    setDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
      
    });
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
    <UpdateThemeContext.Provider value={ToggleTheme}>
        {children}
    </UpdateThemeContext.Provider>
    
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
