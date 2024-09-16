import  {useTheme } from "./themeContext";
import { useState } from "react";

function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState("English");
  const [layout, setLayout] = useState("Grid");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === "Grid" ? "List" : "Grid"));
  };

  const handleThemeChange = (event) => {
    if (event.target.value !== theme) toggleTheme();
  };

  return (
    <div
      className={`text-center p-6 transition-all duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-semibold">Welcome to Settings Page</h1>

      {/* Theme Toggle */}
      <div className="mt-4">
        <h2 className="text-lg font-medium">Select Theme:</h2>
        <div className="flex justify-center space-x-4 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="light"
              checked={theme === "light"}
              onChange={handleThemeChange}
              className="form-radio"
            />
            <span>Light Mode</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="dark"
              checked={theme === "dark"}
              onChange={handleThemeChange}
              className="form-radio"
            />
            <span>Dark Mode</span>
          </label>
        </div>
      </div>

      {/* Advanced Settings Checkbox */}
      <div className="mt-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showAdvanced}
            onChange={() => setShowAdvanced(!showAdvanced)}
            className="form-checkbox"
          />
          <span>Show Advanced Settings</span>
        </label>
      </div>

      {/* Surprise Element */}
    {showAdvanced && (
  <div
    className={`mt-6 p-4 bg-yellow-100 rounded-lg transition-all duration-500 ease-in-out transform ${
      showAdvanced ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4"
    }`}
  >
    <h2 className="text-xl font-semibold text-pink-600 animate-bounce">🎉 Advanced Settings 🎉</h2>
    <p className="mt-2 text-purple-700">Here you can tweak more settings!</p>
  </div>
)}
    </div>
  );
}

export default Settings;
