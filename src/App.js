// =============================
// Root Application Component
// =============================

// Fixed navigation bar (always visible)
import Navbar from "./components/Navbar";

// All page sections (Home, Past, Themes, etc.)
import Home from "./pages/Home";

// Scroll progress indicator (top bar)
import ScrollIndicator from "./components/ScrollIndicator";

// Animated background (subtle cyber dots)
import Parallax from "./components/Parallax";

// Global styles
import "./App.css";

function App() {
  return (
    <>
      {/* 
        BACKGROUND LAYER 
        - Fixed
        - Lowest z-index
        - Provides subtle motion & depth
      */}
      <Parallax />

      {/* 
        UI OVERLAY
        - Shows scroll progress
        - Always visible at top
      */}
      <ScrollIndicator />

      {/* 
        FIXED NAVBAR
        - Used for section navigation
        - Highlights active section
      */}
      <Navbar />

      {/* 
        MAIN CONTENT
        - Single-page scroll layout
        - Contains all sections:
          Home → Past → Themes → Sponsors → Contact
      */}
      <Home />
    </>
  );
}

export default App;
