import "./Themes.css";

// IMPORT IMAGES
import ai from "../assets/themes/ai.jpg";
import web3 from "../assets/themes/web3.jpg";
import cyber from "../assets/themes/cyber.jpg";
import iot from "../assets/themes/iot.jpg";
import open from "../assets/themes/open.jpg";
import fintech from "../assets/themes/fintech.jpg";

const themes = [
    { title: "AI & ML", image: ai },
    { title: "Web3 & Blockchain", image: web3 },
    { title: "Cybersecurity", image: cyber },
    { title: "IoT & Hardware", image: iot },
    { title: "Open Innovation", image: open },
    { title: "FinTech / HealthTech", image: fintech },
];

export default function Themes() {
    return (
        <section className="themes-page">
            <div className="themes-heading">
                
                <span className="themes-ghost">THEMES</span>
                <h2 className="hero-title themes-main-title">THEMES</h2>
            </div>

            <div className="theme-grid">
                {themes.map((theme, index) => (
                    <div className="theme-card" key={index}>
                        {/* FRONT */}
                        <div className="theme-face front">
                            <span className="icon">{theme.icon}</span>
                            <h3>{theme.title}</h3>
                        </div>

                        {/* BACK IMAGE */}
                        <div
                            className="theme-face back"
                            style={{ backgroundImage: `url(${theme.image})` }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
