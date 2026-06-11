// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-500">404</h1>
        <p className="text-xl mt-2">Page not found</p>
        <Link
          to="/"
          className="mt-4 inline-block bg-primary-500 text-white px-6 py-2 rounded"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
