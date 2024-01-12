import { createContext, ReactNode, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleMode: () => {}
});

interface ThemeProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState('light');

  const toggleMode = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    document.body.dataset.theme = theme === 'light' ? 'dark' : 'light';
    window?.localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setTheme(window?.localStorage.getItem('theme') || 'light');
    document.body.dataset.theme =
      window?.localStorage.getItem('theme') || 'light';
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
