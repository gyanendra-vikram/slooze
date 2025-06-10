import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const users = [
  { email: "manager@test.com", password: "1234", role: "Manager" },
  { email: "keeper@test.com", password: "1234", role: "Store Keeper" },
];

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("loggedIn"));
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("role", user.role);
      localStorage.setItem("loggedIn", "true");
      setRole(user.role);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.clear();
    setRole(null);
    setIsLoggedIn(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <AuthContext.Provider value={{ role, isLoggedIn, login, logout, theme, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
};
