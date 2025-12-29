// =============================
// PAST EDITIONS – PERFECT HONEYCOMB (5-4-5-4)
// =============================

import "./PastEditions.css";

// Replace with ANY images — layout will NOT change
import img1 from "../assets/past/2.jpg";
import img2 from "../assets/past/2.jpg";

const H = (a, b) => ({ front: a, back: b });

const rows = [
    // Row 1 (5)
    [H(img1, img2), H(img2, img1), H(img1, img2), H(img2, img1), H(img1, img2)],

    // Row 2 (4)
    [H(img2, img1), H(img1, img2), H(img2, img1), H(img1, img2)],

    // Row 3 (5)
    [H(img1, img2), H(img2, img1), H(img1, img2), H(img2, img1), H(img1, img2)],

    // Row 4 (4)
    [H(img2, img1), H(img1, img2), H(img2, img1), H(img1, img2)],
];

export default function PastEditions() {
    return (
        <section className="past-gallery">
            <h2 className="section-title" style={{marginTop:"-100px"}}>GLIMPSES</h2>

            <div className="honeycomb">
                {rows.map((row, r) => (
                    <div
                        key={r}
                        className={`hex-row ${row.length === 4 ? "offset" : ""}`}
                    >
                        {row.map((item, i) => (
                            <div className="hex-wrap" key={i}>
                                <div className="hex">
                                    <div
                                        className="hex-face front"
                                        style={{ backgroundImage: `url(${item.front})` }}
                                    />
                                    <div
                                        className="hex-face back"
                                        style={{ backgroundImage: `url(${item.back})` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
