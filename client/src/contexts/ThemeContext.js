import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {
    alert("hi");
  },
});

function ThemeProvider({ children }) {
  const [isFirst, setIsFirst] = useState(true);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const check = localStorage.getItem("theme");
    if (check) {
      document.documentElement.className = check;
      setTheme(check);
    } else {
      localStorage.setItem("theme", theme);
      document.documentElement.className = theme;
    }
  }, []);

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
