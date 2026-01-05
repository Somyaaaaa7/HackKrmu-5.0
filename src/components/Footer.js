import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">

                {/* BRAND */}
                <div className="footer-col brand">
                    <div className="brand-stack">
                        <span className="brand-title" style={{marginBottom: '25px'}}>HACK KRMU 5.0</span>
                        <span className="footer-col" style={{marginBottom: '10px'}}>Social Media</span>
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
                    <h3 style={{marginLeft: '-10px', marginBottom:"10px"}}>Venue</h3>
                    <p style={{marginLeft: '-8px'}}>
                        K.R. Mangalam University<br />
                        Sohna Road, Gurugram<br />
                        Haryana – 122103
                    </p>
                </div>

                {/* LINKS */}
                <div className="footer-col">
                    <h3 style={{marginBottom: '10px'}}>Links</h3>
                    <a
                        href="https://www.krmangalam.edu.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="single-link"
                    >
                        University Website
                    </a>
                </div>

                {/* MAP */}
                <div className="footer-col map">
                    <h3 style={{marginBottom: '10px'}}>Location</h3>
                    <iframe
                        title="KRMU Location"
                        src="https://maps.google.com/maps?q=KR%20Mangalam%20University&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        loading="lazy"
                    />
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
