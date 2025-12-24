// =============================
// MAIN PAGE CONTENT (SINGLE-PAGE SCROLL)
// =============================

import { useEffect } from "react";

// Page sections
import Themes from "./Themes";
import PastEditions from "./PastEditions";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import krmuBanner from "../assets/krmu-banner.png";


// UI Components
import Divider from "../components/Divider";

// Styles
import "./Home.css";

export default function Home() {

    /* ================================================= */
    /* SECTION REVEAL ANIMATION (ON SCROLL) */
    /* ================================================= */
    useEffect(() => {
        const sections = document.querySelectorAll(".page-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* ================================================= */}
            {/* HERO + PRIZE POOL (SAME PAGE) */}
            {/* ================================================= */}
            <section id="home" className="page-section home">

                {/* KRMU UNIVERSITY BANNER */}
                <img
                    src={krmuBanner}
                    alt="K R Mangalam University"
                    className="krmu-banner"
                />

                {/* HERO */}
                <h1 className="glitch" data-text="HACK KRMU 5.0">
                    HACK KRMU 5.0
                </h1>

                <p className="tagline">Innovate • Build • Disrupt</p>

                {/* Spacer between hero and prizes */}
                <div style={{ height: "80px" }} />

                {/* ================= PRIZE POOL ================= */}
                <h2 className="section-title">Prize Pool Worth</h2>

                <div className="prize-total">₹5,00,000</div>

                <div className="prize-grid">
                    <div className="prize-card gold">
                        <h3>1st Prize</h3>
                        <p>₹50,000</p>
                    </div>

                    <div className="prize-card silver">
                        <h3>2nd Prize</h3>
                        <p>₹25,000</p>
                    </div>

                    <div className="prize-card bronze">
                        <h3>3rd Prize</h3>
                        <p>₹15,000</p>
                    </div>
                </div>

                <p className="prize-note">
                    Track prizes & exclusive goodies for winners 🚀
                </p>

            </section>

            <Divider />

            {/* ================================================= */}
            {/* PAST EDITIONS */}
            {/* ================================================= */}
            <section id="past" className="page-section">
                <PastEditions />
            </section>

            <Divider />

            {/* ================================================= */}
            {/* THEMES */}
            {/* ================================================= */}
            <section id="themes" className="page-section">
                <Themes />
            </section>

            <Divider />

            {/* ================================================= */}
            {/* SPONSORS */}
            {/* ================================================= */}
            <section id="sponsors" className="page-section">
                <Sponsors />
            </section>

            <Divider />

            {/* ================================================= */}
            {/* CONTACT / TEAM */}
            {/* ================================================= */}
            <section id="contact" className="page-section">
                <Contact />
            </section>
        </>
    );
}
