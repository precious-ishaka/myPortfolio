import { useContext } from "react";

import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";
import github from "../assets/icons8-github.png";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 mb-30 z-50 shadow-md transition ${
        theme === "light"
          ? "bg-white text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="flex items-center justify-between p-5">
        
        {/* Name / Logo */}
        <h2 to="/" className="font-bold text-lg tracking-widest">
          PRECIOUS
        </h2>

        {/* Links */}
        <div className="flex items-center gap-6">
          
          {/* GitHub */}
          <a
            href="https://github.com/precious-ishaka"
            target="_blank"
            className="flex items-center gap-2 hover:text-purple-500"
          >
            <img src={github} alt="github" className="w-5 h-5" />
          
          </a>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-xl cursor-pointer">
            {theme === "light" ? <MdDarkMode /> : <CiLight />}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;