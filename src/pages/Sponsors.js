// =============================
// PRIZES PAGE
// =============================

import "./Prizes.css";

export default function Prizes() {
    return (
        <section className="page-section prizes-page">
            {/* Title */}
            <h1 className="prizes-title">Prizes</h1>

            {/* Main Prizes */}
            <div className="prizes-grid">
                {/* Second Prize */}
                <div className="prize-box silver">
                    <div className="trophy">🏆</div>
                    <h2>₹25,000</h2>
                    <p>Second Prize</p>
                </div>

                {/* First Prize */}
                <div className="prize-box gold highlight">
                    <div className="trophy">🏆</div>
                    <h2>₹50,000</h2>
                    <p>First Prize</p>
                </div>

                {/* Third Prize */}
                <div className="prize-box bronze">
                    <div className="trophy">🏆</div>
                    <h2>₹15,000</h2>
                    <p>Third Prize</p>
                </div>
            </div>

            {/* Track Prizes */}
            <div className="track-prize">
                <div className="chest">🎁</div>
                <h3>₹10,000</h3>
                <p>4 Track Prizes</p>
            </div>
        </section>
    );
}
