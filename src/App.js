import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        {/* Add more routes like contact if needed */}
      </Routes>
    </Router>
  );
}

export default App;
