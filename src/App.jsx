import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import UserPortal from "./pages/portals/UserPortal";
import AdminPortal from "./pages/portals/AdminPortal";
import AmbulancePortal from "./pages/portals/AmbulancePortal";
import DispatcherPortal from "./pages/portals/DispatcherPortal";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("uzima_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleSetUser = (userData) => {
    setUser(userData);
    if (userData) localStorage.setItem("uzima_user", JSON.stringify(userData));
    else localStorage.removeItem("uzima_user");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={handleSetUser} />} />

        {/* --- PROTECTED ROUTES --- */}

        {/* User Portal: Only "user" can enter */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user} allowedRoles={["user"]}>
              <UserPortal user={user} setUser={handleSetUser} />
            </ProtectedRoute>
          }
        />

        {/* Admin Portal: Only "admin" can enter */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user} allowedRoles={["admin"]}>
              <AdminPortal user={user} setUser={handleSetUser} />
            </ProtectedRoute>
          }
        />

        {/* Ambulance Portal: Only "ambulance" can enter */}
        <Route
          path="/ambulance"
          element={
            <ProtectedRoute user={user} allowedRoles={["ambulance"]}>
              <AmbulancePortal user={user} setUser={handleSetUser} />
            </ProtectedRoute>
          }
        />

        {/* Dispatcher Portal: Only "dispatcher" can enter */}
        <Route
          path="/dispatcher"
          element={
            <ProtectedRoute user={user} allowedRoles={["dispatcher"]}>
              <DispatcherPortal user={user} setUser={handleSetUser} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
