// src/components/common/SearchBar.jsx
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="relative">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-80 dark:bg-gray-800 dark:border-gray-700"
      />
    </div>
  );
};

export default SearchBar;
