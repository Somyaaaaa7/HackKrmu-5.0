import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">

                {/* BRAND */}
                <div className="footer-col brand">
                    <div className="brand-stack">
                        <span className="brand-title" style={{ marginBottom: '25px' }}>HACK KRMU 5.0</span>
                        <span className="footer-col" style={{ marginBottom: '10px' }}>Social Media</span>
                        <div className="brand-socials">
                            <a
                                href="https://www.instagram.com/hackkrmu.official"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ig
                            </a>
                            <a
                                href="https://www.linkedin.com/school/krmuniv/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                in
                            </a>
                        </div>
                    </div>
                </div>

                {/* VENUE */}
                <div className="footer-col">
                    <h3 style={{ marginLeft: '10px', marginBottom: "10px" }}>Venue</h3>
                    <p style={{ marginLeft: '-30px', marginTop:"20px" }}>
                        K.R. Mangalam University<br />
                        Sohna Road, Gurugram<br />
                        Haryana – 122103
                    </p>
                </div>

                {/* LINKS */}
                <div className="footer-col">
                    <h3 style={{ marginBottom: '15px', marginLeft:"35px" }}>Links</h3>
                    <a
                        href="https://www.krmangalam.edu.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="single-link">
                        University Website
                    </a>
                </div>

                {/* MAP */}
<div className="footer-col map">
    <h3 style={{ marginBottom: "10px" }}>Location</h3>

    <div className="map-wrapper">
        <iframe
            title="KRMU Location"
            src="https://www.google.com/maps?q=K.R.%20Mangalam%20University,%20Gurugram&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"/>
    </div>
</div>

            </div>

            <div className="footer-bottom">
                © 2026 Hack KRMU. All rights reserved.
            </div>

            {/* SCROLL TO TOP BUTTON */}
            <button
                className="scroll-top"
                aria-label="Scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                ↑
            </button>

        </footer>
    );
}
