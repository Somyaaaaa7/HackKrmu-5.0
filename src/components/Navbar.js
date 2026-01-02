// =============================
// FIXED NAVBAR (SCROLL-SPY + SLIDING INDICATOR)
// =============================

import { useEffect, useRef, useState } from "react";
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
    { id: "faq", label: "FAQ" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);

    const linksRef = useRef(null);
    const indicatorRef = useRef(null);

    /* ================================================= */
    /* SCROLL SPY — detect active section while scrolling */
    /* ================================================= */
    useEffect(() => {
        const sectionEls = sections.map(s =>
            document.getElementById(s.id)
        );

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;

            sectionEls.forEach(section => {
                if (!section) return;

                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPos >= top && scrollPos < top + height) {
                    setActive(section.id);
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ================================================= */
    /* MOVE SLIDING INDICATOR */
    /* ================================================= */
    useEffect(() => {
        if (!active || !linksRef.current || !indicatorRef.current) return;

        const activeLink = linksRef.current.querySelector(
            `span[data-id="${active}"]`
        );

        if (activeLink) {
            indicatorRef.current.style.width =
                `${activeLink.offsetWidth}px`;
            indicatorRef.current.style.left =
                `${activeLink.offsetLeft}px`;
        }
    }, [active]);

    /* ================================================= */
    /* CLICK SCROLL */
    /* ================================================= */
    const scrollTo = (id) => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <nav className="navbar">
            {/* BRAND */}
            <div className="brand" onClick={() => scrollTo("home")}>
                <img src={logo} alt="HackKRMU Logo" className="brand-logo" />
                <span
                    className="logo-text"
                    style={{
                        marginLeft: "10px",
                        color: "#cfd8dc",
                        textShadow: "0 0 18px rgba(0, 255, 247, 0.8)",
                        fontWeight: "bold",
                    }}
                >
                    HACK KRMU 5.0
                </span>
            </div>

            {/* HAMBURGER */}
            <div
                className="hamburger"
                onClick={() => setOpen(prev => !prev)}
            >
                ☰
            </div>

            {/* LINKS */}
            <div
                ref={linksRef}
                className={`links ${open ? "show" : ""}`}
            >
                {sections.map(({ id, label }) => (
                    <span
                        key={id}
                        data-id={id}
                        className={active === id ? "active" : ""}
                        onClick={() => scrollTo(id)}
                    >
                        {label}
                    </span>
                    
                ))}

                {/* 🔥 SINGLE SLIDING INDICATOR */}
                <span ref={indicatorRef} className="nav-indicator" />
            </div>
        </nav>
    );
}
