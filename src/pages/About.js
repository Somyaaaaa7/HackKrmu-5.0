import "./About.css";

// Main image
import aboutMain from "../assets/about/1.jpg";

// Partner logos
import iskcon from "../assets/about/iskcon.png";
import codingninjas from "../assets/about/codingninjas.png";
import hackquest from "../assets/about/hackquest.png";
import gdg from "../assets/about/gdg.png";
import mindspark from "../assets/about/mindspark.png";

export default function About() {
    return (
        <section className="about-page">
            {/* ================= TOP SECTION ================= */}
            <div className="about-top">
                <div className="about-left">
                    <h2>What is Hack KRMU?</h2>

                    <p>
                        Hack KRMU is an annual hackathon hosted by K.R. Mangalam
                        University, designed to challenge and inspire tech
                        enthusiasts and innovators. Participants from all
                        backgrounds come together to solve real-world problems
                        through cutting-edge technology.
                    </p>

                    <p>
                        With exciting tracks in fields like Blockchain, IoT,
                        AR/VR, FinTech, and more, Hack KRMU provides a platform
                        for creativity, collaboration, and growth. Compete for
                        amazing prizes, network with mentors and industry
                        leaders, and push the boundaries of innovation in this
                        high-energy event.
                    </p>
                </div>

                <div className="about-right">
                    <img src={aboutMain} alt="Hack KRMU Winners" />
                </div>
            </div>

            {/* ================= PARTNERS ================= */}
            <h3 className="partners-title">Our Trusted Partners</h3>

            <div className="partners-grid">
                <div className="partner-card">
                    <img src={iskcon} alt="ISKCON Gurugram" />
                </div>
                <div className="partner-card">
                    <img src={codingninjas} alt="Coding Ninjas" />
                </div>
                <div className="partner-card">
                    <img src={hackquest} alt="HackQuest" />
                </div>
                <div className="partner-card">
                    <img src={gdg} alt="GDG Cloud Noida" />
                </div>
                <div className="partner-card">
                    <img src={mindspark} alt="MindSpark Technology" />
                </div>
            </div>
        </section>
    );
}
