import "./Themes.css";

// IMPORT IMAGES
import ai from "../assets/themes/ai.jpg";
import web3 from "../assets/themes/web3.jpg";
import cyber from "../assets/themes/cyber.jpg";
import iot from "../assets/themes/iot.jpg";
import open from "../assets/themes/open.jpg";
import fintech from "../assets/themes/fintech.jpg";

const themes = [
    { title: "AI & ML", icon: "🤖", image: ai },
    { title: "Web3 & Blockchain", icon: "⛓️", image: web3 },
    { title: "Cybersecurity", icon: "🛡️", image: cyber },
    { title: "IoT & Hardware", icon: "🔌", image: iot },
    { title: "Open Innovation", icon: "🚀", image: open },
    { title: "FinTech / HealthTech", icon: "💡", image: fintech },
];

export default function Themes() {
    return (
        <section className="themes-page">
            <h2 className="section-title" style={{ marginTop: "-100px", marginBottom: "40px" }}>
                THEMES
            </h2>

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
