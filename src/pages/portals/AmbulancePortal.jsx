export default function AmbulancePortal({ user }) {
  return (
    <div className="p-8 bg-red-50 min-h-screen">
      <h1 className="text-3xl font-bold text-red-800">Ambulance Dashboard</h1>
      <p>System Overview for {user.name}</p>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">ambulance Users</div>
        <div className="bg-white p-4 rounded shadow">System Logs</div>
      </div>
    </div>
  );
}
