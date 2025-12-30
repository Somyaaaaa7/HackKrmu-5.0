import "./Sponsorship.css";
import brochure from "../assets/SPONSORSHIP BROCHURE HACK KRMU 5.0-4.pdf";

export default function Sponsorship() {
    return (
        <section className="sponsor-page">
            <h1 className="section-title" style={{marginTop:"-30px", marginBottom:"50px"}}>SPONSORSHIP DECK</h1>

            <div className="pdf-wrapper">
                <iframe
                    src={brochure}
                    title="Hack KRMU Sponsorship Deck"
                />
            </div>

            <a className="download-btn" href={brochure} download style={{marginTop:"100px"}}>
                Download PDF
            </a>
        </section>
    );
}
