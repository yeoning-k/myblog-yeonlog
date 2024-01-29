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

  const condition = (arg: string) => {
    return arg === 'light' ? 'dark' : 'light';
  };

  const toggleMode = () => {
    setTheme(prev => condition(prev));
    document.body.dataset.theme = condition(theme);
    window?.localStorage.setItem('theme', condition(theme));
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
