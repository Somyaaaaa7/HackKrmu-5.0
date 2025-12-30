// =============================
// FIXED NAVBAR (CLICK-BASED ACTIVE)
// =============================

import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "themes", label: "Themes" },
    { id: "timeline", label: "Timeline" },
    { id: "past", label: "Gallery" },
    { id: "sponsors", label: "Prizes" },
    { id: "contact", label: "Our Team" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // 🔥 null initially → NO underline on load
    const [active, setActive] = useState(null);

    const scrollTo = (id) => {
        const section = document.getElementById(id);
        if (!section) return;

        setActive(id); // underline appears ONLY after click
        section.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <nav className="navbar">
            {/* BRAND */}
            <div className="brand" onClick={() => scrollTo("home")}>
                <img src={logo} alt="HackKRMU Logo" className="brand-logo" />
                <span className="logo-text" style={{marginLeft:"10px", color: "#cfd8dc", textShadow:"0 0 18px rgba(0, 255, 247, 0.8)",}}>HACK KRMU 5.0</span>
            </div>

            {/* HAMBURGER */}
            <div
                className="hamburger"
                onClick={() => setOpen(prev => !prev)}
            >
                ☰
            </div>

            {/* LINKS */}
            <div className={`links ${open ? "show" : ""}`}>
                {sections.map(({ id, label }) => (
                    <span
                        key={id}
                        className={active === id ? "clicked" : ""}
                        onClick={() => scrollTo(id)}
                    >
                        {label}
                    </span>
                ))}
            </div>
        </nav>
    );
}
