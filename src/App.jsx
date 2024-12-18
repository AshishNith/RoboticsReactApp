import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Members from "./pages/Members";
import Contact from "./pages/Contact";
import EventDetails from "./pages/Events";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
