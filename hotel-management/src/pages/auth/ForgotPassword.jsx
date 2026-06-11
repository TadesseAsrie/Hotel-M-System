// src/pages/auth/ForgotPassword.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600)",
      }}
    >
      <div className="glassmorphism p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-white">Forgot Password</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-white/10 border text-white"
              placeholder="Email"
              required
            />
            <button
              type="submit"
              className="w-full mt-4 bg-primary-500 text-white py-2 rounded"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <p className="text-white mt-4">Password reset link sent to {email}</p>
        )}
        <Link to="/login" className="text-primary-300 block text-center mt-4">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
