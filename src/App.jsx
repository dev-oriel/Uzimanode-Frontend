import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="antialiased text-slate-900">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={
              <div className="flex h-screen items-center justify-center">
                Login Page Coming Soon...
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
