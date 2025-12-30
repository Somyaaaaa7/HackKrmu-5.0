// =============================
// OUR TEAM SECTION
// =============================

import "./Team.css";

// Images
import shweta from "../assets/team/shweta.jpg";
import amar from "../assets/team/amar.jpg";
import vishwanil from "../assets/team/vishwanil.jpg";
import anuj from "../assets/team/anuj.jpg";
import krish from "../assets/team/krish.jpg";
import somya from "../assets/team/somya.jpg";

/* ============================= */
/* CARD COMPONENT */
/* ============================= */

const Card = ({
    image,
    name,
    role,
    phone,
    linkedin,
    instagram,
    variant,
}) => (
    <div className={`team-card ${variant === "gold" ? "gold" : ""}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>

        {/* 📞 Contact number (ONLY if provided) */}
        {phone && (
            <div className="phone" style={{marginLeft:"-10px"}}>
                📞 <a href={`tel:${phone}`}>{phone}</a>
            </div>
        )}

        <div className="socials">
            {linkedin && (
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin"
                >
                    in
                </a>
            )}

            {instagram && (
                <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="instagram"
                >
                    ig
                </a>
            )}
        </div>
    </div>
);

/* ============================= */
/* TEAM SECTION */
/* ============================= */

export default function Team() {
    return (
        <div className="team-section">
            <h2 className="section-title" style={{ marginTop: "-80px" }}>
                OUR TEAM
            </h2>

            {/* ================= CONVENORS ================= */}
            <div className="team-grid">
                <Card
                    variant="gold"
                    image={shweta}
                    name="Prof.(Dr.) Shweta Bansal"
                    role="Convenor"
                    linkedin="https://www.linkedin.com/in/prof-dr-shweta-a-bansal-a0495b17/"
                />

                <Card
                    variant="gold"
                    image={amar}
                    name="Dr. Amar Saraswat"
                    role="Convenor"
                    linkedin="https://www.linkedin.com/in/dr-amar-saraswat-b67453188/"
                />

                <Card
                    variant="gold"
                    image={vishwanil}
                    name="Mr. Vishwanil Suman"
                    role="Co-Convenor"
                    linkedin="https://www.linkedin.com/in/vishwanil-suman-b95b23145/"
                />
            </div>

            {/* ================= STUDENT ORGANIZERS ================= */}
            <div className="team-grid2">
                
                <Card
                    image={krish}
                    name="Krish Agarwal"
                    role="Student Organizer"
                    phone="+91 9310189324"
                    linkedin="https://www.linkedin.com/in/krish-agarwal-140920301/"
                    instagram="#"
                />

                <Card
                    image={somya}
                    name="Somya Sharma"
                    role="Student Organizer"
                    phone="+91 9205038742"
                    linkedin="https://www.linkedin.com/in/somya-sharma-486a22305/"
                    instagram="#"
                />

                <Card
                    image={anuj}
                    name="Anuj Narain"
                    role="Student Organizer"
                    phone="+91 9811625462"
                    linkedin="https://www.linkedin.com/in/narainanuj/"
                    instagram="#"
                />

            </div>
        </div>
    );
}
