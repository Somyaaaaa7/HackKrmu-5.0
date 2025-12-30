import "./About.css";

// Main image
import aboutMain from "../assets/about/about.jpg";

// Partner logos
import iskcon from "../assets/about/iskcon.png";
import codingninjas from "../assets/about/codingninjas.png";
import hackquest from "../assets/about/hackquest.png";
import gdg from "../assets/about/gdg.png";
import mindspark from "../assets/about/mindspark.png";
import codeoncampus from "../assets/about/codeoncampus.png";
import hacktheleague from "../assets/about/hacktheleague.png";
import givemycertificate from "../assets/about/givemycertificate.png";
import ocd from "../assets/about/ocd.png";
import msla from "../assets/about/msla.png";
import thepublicsquare from "../assets/about/thepublicsquare.png";
import hackthemountains from "../assets/about/hackthemountains.png";
import devstation from "../assets/about/devstation.png";
import threeway from "../assets/about/threeway.png";
import ooview from "../assets/about/ooview.png";
import sudanstech from "../assets/about/sudanstech.png";
import ccg from "../assets/about/ccg.png";
import hackcbs from "../assets/about/hackcbs.png";
import azure from "../assets/about/azure.png";
import oreodroiders from "../assets/about/oreodroiders.png";
import devsdungeon from "../assets/about/devsdungeon.png";
import tversiton from "../assets/about/tversiton.png";
import codesetgo from "../assets/about/codesetgo.png";
import tfc from "../assets/about/tfc.png";
import devlovers from "../assets/about/devlovers.png";

export default function About() {
    return (
        <section className="about-page">
            {/* ================= TOP SECTION ================= */}
            <div className="about-top">
                <div className="about-left">

                    <h2 style={{ marginTop: "-100px", marginLeft: "-140px", fontSize:"50px" }}>What is Hack KRMU?</h2>

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

                <div className="about-right">
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
                <div className="partner-card">
                    <img src={codeoncampus} alt="Code On Campus" />
                </div>
                <div className="partner-card">
                    <img src={hacktheleague} alt="HackTheLeague" />
                </div>
                <div className="partner-card">
                    <img src={givemycertificate} alt="Give My Certificate" />
                </div>
                <div className="partner-card">
                    <img src={ocd} alt="OCD" />
                </div>
                <div className="partner-card">
                    <img src={msla} alt="MSLA" />
                </div>
                <div className="partner-card">
                    <img src={thepublicsquare} alt="The Public Square" />
                </div>
                <div className="partner-card">
                    <img src={hackthemountains} alt="Hack The Mountains" />
                </div>
                <div className="partner-card">
                    <img src={devstation} alt="DevStation" />
                </div>
                <div className="partner-card">
                    <img src={threeway} alt="ThreeWay" />
                </div>
                <div className="partner-card">
                    <img src={ooview} alt="OOView" />
                </div>
                <div className="partner-card">
                    <img src={sudanstech} alt="Sudan Tech" />
                </div>
                <div className="partner-card">
                    <img src={ccg} alt="CCG" />
                </div>
                <div className="partner-card">
                    <img src={hackcbs} alt="HackCBS" />
                </div>
                <div className="partner-card">
                    <img src={azure} alt="Azure" />
                </div>
                <div className="partner-card">
                    <img src={oreodroiders} alt="Oreo Droiders" />
                </div>
                <div className="partner-card">
                    <img src={devsdungeon} alt="DevDungeon" />
                </div>
                <div className="partner-card">
                    <img src={tversiton} alt="Tversiton" />
                </div>
                <div className="partner-card">
                    <img src={codesetgo} alt="CodeSetGo" />
                </div>
                <div className="partner-card">
                    <img src={tfc} alt="TFC" />
                </div>
                <div className="partner-card">
                    <img src={devlovers} alt="DevLovers" />
                </div>
            </div>

            {/* ================= SPONSORSHIP CTA ================= */}
            <div className="sponsor-cta">
                <a href="/sponsorship" className="sponsor-btn" style={{marginBottom:"-60px"}}>
                    BECOME OUR SPONSOR
                </a>
            </div>
        </section>
    );
}
