import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Starfield from "./components/Starfield";
import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <Router>
      {/* BACKGROUND EFFECT */}
      <Starfield />

      {/* UI OVERLAYS */}
      <Navbar />
      <ScrollIndicator />

      {/* PAGE CONTENT */}
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
