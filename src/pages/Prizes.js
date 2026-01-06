import { useEffect, useState } from "react";
import "./Prizes.css";

/* ================= PRIZE CARD ================= */

function Prize({ amount, title, variant }) {
    const [val, setVal] = useState(0);

    const medalMap = {
        first: "🥇",
        second: "🥈",
        third: "🥉",
    };

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
            <div className="medal">{medalMap[variant]}</div>
            <div className="prize-amount">₹{val.toLocaleString()}</div>
            <div className="prize-title">{title}</div>
        </div>
    );
}

/* ================= SCROLLING PRIZE POOL ================= */

function ScrollingPrizePool({ target }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let current = 0;
        const steps = 70;
        const increment = Math.ceil(target / steps);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            setValue(current);
        }, 28);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <span className="scrolling-prize">
            ₹{value.toLocaleString()}+
        </span>
    );
}

/* ================= MAIN ================= */

export default function Prizes() {
    return (
        <section className="prizes-page">
            <div className="prizes-heading-wrapper">
                <span className="prizes-ghost">PRIZES</span>
                <h1 className="hero-title prizes-main-title">PRIZES</h1>
            </div>

            {/* TOTAL PRIZE POOL */}
            <div className="prize-pool">
                <div className="prize-pool-line" style={{ marginTop: "-120px" }} />

                <div className="prize-pool-text">
                    PRIZE POOL – <ScrollingPrizePool target={500000} />
                </div>

                <div className="prize-pool-sub" style={{ marginTop: "20px" }}>
                    Track Prizes & Goodies
                </div>

                <div className="prize-pool-line" style={{ marginBottom: "100px" }} />
            </div>

            <div className="podium-wrapper">
                <div className="podium-column second">
                    <Prize amount={30000} title="Runner Up" variant="second" />
                    <div className="podium-base" style={{ marginBottom: "-150px" }} />
                </div>

                <div className="podium-column first">
                    <Prize amount={50000} title="Champion" variant="first" />
                    <div className="podium-base" style={{ marginBottom: "-150px" }} />
                </div>

                <div className="podium-column third">
                    <Prize amount={20000} title="2nd Runner Up" variant="third" />
                    <div className="podium-base" style={{ marginBottom: "-150px" }} />
                </div>
            </div>
        </section>
    );
}
