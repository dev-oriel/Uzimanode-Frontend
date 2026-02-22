export default function UserPortal({ user }) {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
      <p className="mt-2 text-blue-700">Role: Patient / User</p>
      <div className="mt-6 p-6 bg-white rounded-xl shadow">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Request Ambulance
        </button>
      </div>
    </div>
  );
}
