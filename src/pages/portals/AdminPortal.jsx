import { useNavigate } from "react-router-dom";

export default function AdminPortal({ user, setUser }) {
  const navigate = useNavigate();
  if (!user) return <div className="p-10 text-center">Loading...</div>;

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="p-8 bg-slate-900 min-h-screen text-white">
      <h1 className="text-4xl font-black text-red-500">ADMIN CONTROL PANEL</h1>
      <p className="opacity-70">Logged in as: {user.email}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          Manage Users
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          System Performance
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          Database Backups
        </div>
      </div>
      <button
        onClick={logout}
        className="mt-12 bg-white text-black px-6 py-2 rounded font-bold"
      >
        Log Out System
      </button>
    </div>
  );
}
