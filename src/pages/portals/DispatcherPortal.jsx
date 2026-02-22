export default function DispatcherPortal({ user }) {
  return (
    <div className="p-8 bg-red-50 min-h-screen">
      <h1 className="text-3xl font-bold text-red-800">Dispatcher Dashboard</h1>
      <p>Dispatcher portal {user.name}</p>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Manage Users</div>
      </div>
    </div>
  );
}
