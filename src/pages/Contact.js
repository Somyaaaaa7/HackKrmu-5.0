// =============================
// OUR TEAM SECTION
// =============================

import "./Contact.css";

// Images
import shweta from "../assets/team/shweta.jpg";
import amar from "../assets/team/amar.jpg";
import vishwanil from "../assets/team/vishwanil.jpg";
import anuj from "../assets/team/anuj.jpg";
import krish from "../assets/team/krish.jpg";
import somya from "../assets/team/somya.jpg";

const Card = ({ image, name, role, linkedin }) => (
    <div className="team-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>

        {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="linkedin">
                in
            </a>
        )}
    </div>
);

export default function Contact() {
    return (
        <div className="team-section">
            <h2 className="section-title">Our Team</h2>

            {/* CONVENORS */}
            {/* <h3 className="team-subtitle">Convenors</h3> */}
            <div className="team-grid">
                <Card
                    image={shweta}
                    name="Prof.(Dr.) Shweta Bansal"
                    role="Convenor"
                    linkedin="https://www.linkedin.com/in/prof-dr-shweta-a-bansal-a0495b17/"
                />
                <Card
                    image={amar}
                    name="Dr. Amar Saraswat"
                    role="Convenor"
                    linkedin="https://www.linkedin.com/in/dr-amar-saraswat-b67453188/"
                />

                <div className="team-grid">
                <Card
                    image={vishwanil}
                    name="Mr. Vishwanil Suman"
                    role="Co-Convenor"
                    linkedin="https://www.linkedin.com/in/vishwanil-suman-b95b23145/"
                />
            </div>
            </div>

            {/* CO-CONVENOR */}
            {/* <h3 className="team-subtitle">Co-Convenor</h3> */}
            {/* <div className="team-grid">
                <Card
                    image={vishwanil}
                    name="Mr. Vishwanil Suma"
                    role="Co-Convenor"
                    linkedin="https://www.linkedin.com/in/vishwanil-suman-b95b23145/"
                />
            </div> */}

            {/* STUDENT COORDINATORS */}
            {/* <h3 className="team-subtitle">Student Coordinators</h3> */}
            <div className="team-grid2">
                <Card
                    image={krish}
                    name="Krish Agarwal"
                    role="Student Coordinator"
                    linkedin="https://www.linkedin.com/in/krish-agarwal-140920301/"
                />
                <Card
                    image={anuj}
                    name="Anuj Narain"
                    role="Student Coordinator"
                    linkedin="https://www.linkedin.com/in/narainanuj/"
                />
                <Card
                    image={somya}
                    name="Somya Sharma"
                    role="Student Coordinator"
                    linkedin="#"
                />
            </div>
        </div>
    );
}
