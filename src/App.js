import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Starfield from "./components/Starfield";
import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";

import Home from "./pages/Home";
import About from "./pages/About";
import Prizes from "./pages/Prizes";
import Sponsorship from "./pages/Sponsorship";
import FAQ from "./components/FAQ";


import "./App.css";

function App() {
  return (
    <Router>
      {/* 🌌 GLOBAL STARFIELD BACKGROUND */}
      <Starfield />

      {/* UI OVERLAYS */}
      <Navbar />
      <ScrollIndicator />

      {/* PAGE CONTENT */}
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
