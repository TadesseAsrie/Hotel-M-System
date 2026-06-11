// src/pages/auth/ResetPassword.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover">
      <div className="glassmorphism p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-white">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-white/10 border text-white mt-4"
            placeholder="New Password"
            required
          />
          <button
            type="submit"
            className="w-full mt-4 bg-primary-500 text-white py-2 rounded"
          >
            Reset Password
          </button>
        </form>
        <Link to="/login" className="text-primary-300 block text-center mt-4">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
