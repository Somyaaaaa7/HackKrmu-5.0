// =============================
// FLOATING PARTICLES COMPONENT
// =============================

import "./Particles.css";

export default function Particles() {
    return (
        <div className="particles">
            {Array.from({ length: 40 }).map((_, i) => (
                <span
                    key={i}
                    style={{
                        "--x": Math.random(),
                        "--y": Math.random(),
                        "--speed": `${20 + Math.random() * 30}s`,
                        "--delay": `${Math.random() * 20}s`,
                        "--size": 0.5 + Math.random(),
                        "--opacity": 0.3 + Math.random() * 0.7
                    }}
                />
            ))}
        </div>
    );
}
