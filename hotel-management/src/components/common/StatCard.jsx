// src/components/common/StatCard.jsx
import { motion } from "framer-motion";

const StatCard = ({ title, value, icon: Icon, color, trend }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glassmorphism rounded-xl p-6 card-hover"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          {trend && (
            <span
              className={`text-xs ${trend > 0 ? "text-green-500" : "text-red-500"} mt-1 inline-block`}
            >
              {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
            </span>
          )}
        </div>
        <div
          className={`p-3 rounded-full bg-${color}-100 dark:bg-${color}-900/30`}
        >
          <Icon
            className={`text-${color}-600 dark:text-${color}-400 text-2xl`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
