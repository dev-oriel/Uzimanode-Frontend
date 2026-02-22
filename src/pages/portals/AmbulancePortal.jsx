import { useNavigate } from "react-router-dom";

export default function AmbulancePortal({ user, setUser }) {
  const navigate = useNavigate();
  if (!user) return <div className="p-10 text-center">Loading...</div>;

  const logout = () => { setUser(null); navigate("/login"); };

  return (
    <div className="p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800">Ambulance Driver Portal</h1>
      <p className="mt-2 text-green-600 font-medium">Status: Active & Ready</p>
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border-l-8 border-green-500">
        <h3 className="font-bold text-xl">Current Job</h3>
        <p className="text-gray-500">No active dispatch requests at the moment.</p>
      </div>
      <button onClick={logout} className="mt-8 text-gray-500 underline">Logout</button>
    </div>
  );
}