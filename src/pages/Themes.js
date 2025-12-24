// =============================
// THEMES SECTION COMPONENT
// =============================

import "./Themes.css";

/*
  List of hackathon themes
  - Easy to edit / extend
  - Each theme has an icon + title
*/
const themes = [
    { title: "AI & ML", icon: "🤖" },
    { title: "Web3 & Blockchain", icon: "⛓️" },
    { title: "Cybersecurity", icon: "🛡️" },
    { title: "IoT & Hardware", icon: "🔌" },
    { title: "Open Innovation", icon: "🚀" },
    { title: "FinTech / HealthTech", icon: "💡" },
];

export default function Themes() {
    return (
        <div className="themes-page">
            {/* Section heading */}
            <h2 className="section-title">Themes</h2>

            {/* Grid of theme cards */}
            <div className="theme-grid">
                {themes.map((theme, index) => (
                    <div key={index} className="theme-card">
                        <span className="icon">{theme.icon}</span>
                        <h3>{theme.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
