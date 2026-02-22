import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, allowedRoles, children }) {
  // 1. If not logged in, kick them to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. If their role isn't in the allowed list, kick them to their own dashboard
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    alert("Access Denied: You do not have permission for this portal.");

    // Redirect them to their appropriate home base
    const redirectPath = user.role === "admin" ? "/admin" : "/dashboard";
    return <Navigate to={redirectPath} replace />;
  }

  // 3. If everything is fine, show the page (children)
  return children;
}
