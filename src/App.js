import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";
import Parallax from "./components/Parallax";
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./pages/Register";

import "./App.css";

function App() {
  return (
    <Router>
      <Parallax />
      <ScrollIndicator />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
