import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { role, logout, toggleTheme, theme } = useContext(AuthContext);

  const menu = [
    { label: "Dashboard", path: "/dashboard", roles: ["Manager"] },
    { label: "Products", path: "/products", roles: ["Manager", "Store Keeper"] },
  ];

  return (
    <nav className="flex justify-between p-4 bg-gray-200 dark:bg-gray-900 text-black dark:text-white">
      <div className="space-x-4">
        {menu.filter(item => item.roles.includes(role)).map(item => (
          <Link key={item.path} to={item.path}>{item.label}</Link>
        ))}
      </div>
      <div className="hidden md:flex gap-4 items-center">
        {role && (
              <div className="flex items-center gap-2 pr-2">
                <div className="w-8 h-8 rounded-full bg-white text-[#0F1636] flex items-center justify-center font-bold uppercase text-sm">
                  {role.charAt(0)}
                </div>
                <span className="text-sm text-white">
                  <strong>{role}</strong>
                </span>
              </div>
            )}
        <button onClick={toggleTheme}>
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
