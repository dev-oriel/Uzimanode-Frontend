import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // This matches your backend route: app.use("/users", userRoutes) + router.post("/signup")
      await axios.post("http://localhost:5000/users/signup", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded border border-red-200">
            {error}
          </p>
        )}

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Email Address
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        {/* Role Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
           Role
          </label>
          <select
            value={formData.role}
            className="w-full p-2 border rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none transition cursor-pointer"
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
          >
            <option value="user">Regular User</option>
            <option value="dispatcher">Dispatcher</option>
            <option value="ambulance">Ambulance Driver</option>
            <option value="admin">Administrator</option>
          </select>
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition active:scale-[0.98]"
        >
          Create Account
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
