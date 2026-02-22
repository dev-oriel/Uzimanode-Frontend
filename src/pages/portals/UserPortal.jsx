import { useNavigate } from "react-router-dom";

export default function UserPortal({ user, setUser }) {
  const navigate = useNavigate();
  if (!user) return <div className="p-10 text-center">Loading...</div>;

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold text-blue-800">User Dashboard</h1>
        <p className="mt-2">
          Welcome back, <span className="font-bold">{user.name}</span>
        </p>
        <div className="mt-10 p-20 border-2 border-dashed border-blue-200 rounded-xl text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700">
            Request Emergency Ambulance
          </button>
        </div>
        <button
          onClick={logout}
          className="mt-8 text-red-500 underline text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
