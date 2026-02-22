import { useNavigate } from "react-router-dom";

export default function DispatcherPortal({ user, setUser }) {
  const navigate = useNavigate();
  if (!user) return <div className="p-10 text-center">Loading...</div>;

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="p-8 bg-orange-50 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-800">
        Dispatcher Command Center
      </h1>
      <p className="mt-2 italic">Monitoring emergency signals...</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-orange-500">
          Pending Requests (0)
        </div>
        <div className="bg-white p-6 rounded-xl shadow border-t-4 border-blue-500">
          Available Ambulances (5)
        </div>
      </div>
      <button onClick={logout} className="mt-8 text-gray-500 underline">
        Logout
      </button>
    </div>
  );
}
