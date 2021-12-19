import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Schedule from "./pages/Schedule";
import Location from "./pages/Location";

export default function RoutingConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}
