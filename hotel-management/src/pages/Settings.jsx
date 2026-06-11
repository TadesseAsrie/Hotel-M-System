// src/pages/Settings.jsx
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("hotel");
  const { darkMode, toggleDarkMode } = useTheme();
  const tabs = [
    "Hotel Information",
    "User Preferences",
    "Notifications",
    "Security",
    "Theme Settings",
  ];
  const tabKeys = [
    "hotel",
    "preferences",
    "notifications",
    "security",
    "theme",
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="border-b flex gap-4">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tabKeys[i])}
            className={`pb-2 px-4 ${activeTab === tabKeys[i] ? "border-b-2 border-primary-500 text-primary-500" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
        {activeTab === "theme" && (
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />{" "}
              Dark Mode
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
