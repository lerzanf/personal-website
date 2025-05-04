import { useState } from "react";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={toggleTheme}
        className={`w-[55px] h-[24px] rounded-full flex items-center px-1 ${
          theme === "light" ? "justify-end bg-[#4731D3]" : "justify-start bg-gray-300"
        }`}
      >
        { theme === "light" ? <div className="w-[16px] h-[16px] bg-[#FFE86E] rounded-full" /> : <FaMoon className="w-[16px] h-[16px] text-[#FFE86E]"/>}
      </button>
      <span className="block w-[100px] text-left">
        {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
      </span>
    </div>
  );
};

export default ThemeToggle;


