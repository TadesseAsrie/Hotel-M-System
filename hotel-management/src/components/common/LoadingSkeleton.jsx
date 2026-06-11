// src/components/common/LoadingSkeleton.jsx
export const TableSkeleton = ({ rows = 5, cols = 5 }) => {
  return (
    <div className="animate-pulse">
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="flex gap-4 mb-3">
          {[...Array(cols)].map((_, j) => (
            <div
              key={j}
              className="h-4 bg-gray-200 dark:bg-gray-700 rounded flex-1"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
        ></div>
      ))}
    </div>
  );
};
