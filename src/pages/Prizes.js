import { useEffect, useState } from "react";
import "./Prizes.css";

function Prize({ amount, title, variant }) {
    const [val, setVal] = useState(0);

    useEffect(() => {
        let current = 0;
        const step = Math.ceil(amount / 40);

        const timer = setInterval(() => {
            current += step;
            if (current >= amount) {
                setVal(amount);
                clearInterval(timer);
            } else {
                setVal(current);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [amount]);

    return (
        <div className={`prize-card ${variant}`}>
            <div className="medal">🏆</div>
            <div className="prize-amount">₹{val.toLocaleString()}</div>
            <div className="prize-title">{title}</div>
        </div>
    );
}

export default function Prizes() {
    return (
        <section className="prizes-page">
            <h1 className="prizes-heading" style={{marginTop:"-125px"}}>PRIZES</h1>

            <div className="podium-wrapper">
                {/* SECOND */}
                <div className="podium-column second">
                    <Prize amount={30000} title="Runner Up" variant="second" />
                    <div className="podium-base blue" />
                </div>

                {/* FIRST */}
                <div className="podium-column first">
                    <Prize amount={50000} title="Champion" variant="first" />
                    <div className="podium-base gold" />
                </div>

                {/* THIRD */}
                <div className="podium-column third">
                    <Prize amount={20000} title="2nd Runner Up" variant="third" />
                    <div className="podium-base red" />
                </div>
            </div>

            {/* TRACK PRIZES
            <div className="track-prizes">
                <div className="gift">🎁</div>
                <div className="track-amount">₹10,000</div>
                <div className="track-label">4 Track Prizes</div>
            </div> */}
        </section>
    );
}
