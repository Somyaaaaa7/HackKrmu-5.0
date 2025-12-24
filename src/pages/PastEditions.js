// =============================
// PAST EDITIONS – MOVING GLIMPSES
// =============================

import "./Past.css";

// Row 1 images
import img1 from "../assets/past/1.jpg";
import img2 from "../assets/past/2.jpg";
import img3 from "../assets/past/3.jpg";
import img4 from "../assets/past/4.jpg";

// Row 2 images (DIFFERENT)
import img5 from "../assets/past/5.jpg";
import img6 from "../assets/past/6.jpg";
import img7 from "../assets/past/7.jpg";
import img8 from "../assets/past/8.jpg";

const rowOneImages = [img1, img2, img3, img4,img5, img6, img7, img8];
const rowTwoImages = [img5, img6, img7, img8];

export default function PastEditions() {
    return (
        <div className="past-gallery">
            <h2 className="section-title">Glimpses of Past Editions</h2>

            {/* ROW 1 */}
            <div className="marquee">
                <div className="track">
                    {rowOneImages.concat(rowOneImages).map((img, i) => (
                        <img key={i} src={img} alt="Hackathon glimpse" />
                    ))}
                </div>
            </div>

            {/* ROW 2 (reverse direction) */}
            <div className="marquee reverse">
                <div className="track">
                    {rowTwoImages.concat(rowTwoImages).map((img, i) => (
                        <img key={i} src={img} alt="Hackathon glimpse" />
                    ))}
                </div>
            </div>
        </div>
    );
}
