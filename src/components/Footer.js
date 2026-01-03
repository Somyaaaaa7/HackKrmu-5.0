import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">

                {/* LEFT — BRAND */}
                <div className="footer-col brand">
                    <h2>HACK KRMU 5.0</h2>
                    <p>International Hackathon</p>

                    <div className="socials">
                        <a href="https://www.instagram.com/hackkrmu.official?igsh=bnp4bzV0MGZjenNn" aria-label="Instagram"></a>
                        <a href="https://www.linkedin.com/school/krmuniv/" aria-label="LinkedIn"></a>
                    </div>
                </div>

                {/* VENUE */}
                <div className="footer-col">
                    <h3>Venue Address</h3>
                    <p>
                        K.R. Mangalam University<br />
                        Sohna Road, Gurugram<br />
                        Haryana – 122103
                    </p>
                </div>

                {/* LINKS */}
                <div className="footer-col">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="https://www.krmangalam.edu.in/">University Website</a></li>
                    </ul>
                </div>

                {/* MAP */}
                <div className="footer-col map">
                    <h3>Location</h3>
                    <iframe
                        title="KRMU Location"
                        src="https://maps.google.com/maps?q=KR%20Mangalam%20University&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="footer-bottom">
                © 2026 Hack KRMU. All rights reserved.
            </div>

            {/* SCROLL TO TOP */}
            <button
                className="scroll-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                ↑
            </button>
        </footer>
    );
}
