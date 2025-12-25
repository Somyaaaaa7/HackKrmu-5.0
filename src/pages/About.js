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

                    <h2 style={{ marginTop: "-100px", marginLeft: "-160px", fontSize:"50px" }}>What is Hack KRMU?</h2>

                    <p style={{ marginTop: "60px", marginLeft: "-150px" }}>
                        Hack KRMU is an annual hackathon hosted by K.R. Mangalam University that brings
                        together passionate innovators, developers, and creators to collaborate and
                        build impactful solutions using cutting-edge technology.
                    </p>

                    <p style={{ marginLeft: "-155px" }}>
                        Over 24+ hours of intense innovation, participants work on futuristic themes
                        such as Artificial Intelligence, Cybersecurity, Blockchain, IoT, AR/VR, and
                        FinTech—guided by industry mentors and driven by creativity, teamwork, and
                        real-world problem solving.
                    </p>

                    <p style={{ marginLeft: "-175px" }}>
                        More than just a competition, Hack KRMU is a platform to learn, network, and
                        transform bold ideas into scalable solutions while competing for exciting
                        prizes and recognition.
                    </p>



                </div>

                <div className="about-right" style={{ marginTop: "-120px", marginLeft: "-25px", }}>
                    <img src={aboutMain} alt="Hack KRMU Winners" />
                </div>
            </div>

            {/* ================= PARTNERS ================= */}
            <h3 className="partners-title" style={{fontSize:"50px", marginBottom:"70px", marginTop:"100px"}}>Our Trusted Partners</h3>

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
