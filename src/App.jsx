import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserPortal from "./pages/portals/UserPortal";
import AdminPortal from "./pages/portals/AdminPortal";
import AmbulancePortal from "./pages/portals/AmbulancePortal";
import DispatcherPortal from "./pages/portals/DispatcherPortal";

function App() {
  // Initialize user from localStorage so they stay logged in on refresh
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("uzima_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Helper to update state and localStorage at the same time
  const handleSetUser = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("uzima_user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("uzima_user");
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        {/* Pass our handler to the Login page */}
        <Route path="/login" element={<Login setUser={handleSetUser} />} />

        {/* Individual Portals */}
        <Route
          path="/dashboard"
          element={<UserPortal user={user} setUser={handleSetUser} />}
        />
        <Route
          path="/admin"
          element={<AdminPortal user={user} setUser={handleSetUser} />}
        />
        <Route
          path="/ambulance"
          element={<AmbulancePortal user={user} setUser={handleSetUser} />}
        />
        <Route
          path="/dispatcher"
          element={<DispatcherPortal user={user} setUser={handleSetUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
