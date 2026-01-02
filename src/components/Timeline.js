import { useState } from "react";
import "./Timeline.css";

const schedule = {
    kickoff: {
        title: "Day 1 – 18 FEB · Kickoff Day",
        events: [
            ["8:30 AM", "Check-in Start", "pink"],
            ["11:00 AM", "Inauguration", "yellow"],
            ["12:00 PM", "Hackathon Starts", "cyan"],
            ["2:00 PM", "Lunch", "green"],
            ["4:00 PM", "Mentor Session", "blue"],
            ["8:00 PM", "Dinner", "green"],
            ["10:00 PM", "DJ Night", "pink"],
        ],
    },
    development: {
        title: "Day 2 – 19 FEB · Development Day",
        events: [
            ["12:00 AM", "RedBull Fun Activity", "pink"],
            ["7:00 AM", "Result Announcement", "yellow"],
            ["7:30 AM", "Breakfast", "green"],
            ["12:00 PM", "Session", "cyan"],
            ["1:00 PM", "Lunch", "green"],
            ["4:00 PM", "Session", "blue"],
            ["8:00 PM", "Dinner", "green"],
        ],
    },
    final: {
        title: "Day 3 – 20 FEB · Final Showdown",
        events: [
            ["1:00 AM", "Judging Round 2", "red"],
            ["7:00 AM", "Result Announcement", "yellow"],
            ["7:30 AM", "Breakfast", "green"],
            ["10:00 AM", "Final Round", "blue"],
            ["1:00 PM", "Lunch", "green"],
            ["2:00 PM", "Winner Announcement", "yellow"],
            ["2:30 PM", "Closing Ceremony", "yellow"],
        ],
    },
};

export default function Timeline() {
    const [day, setDay] = useState("kickoff");

    return (
        <section className="timeline-page">
            <h1 className="section-title" style={{marginTop:"-110px", marginBottom:"80px"}}>EVENT TIMELINE</h1>
            {/* <p className="timeline-sub">⏱ Event in progress!</p> */}

            {/* DAY BUTTONS */}
            <div className="timeline-tabs">
                <button style={{marginBottom:"50px"}}
                    className={day === "kickoff" ? "active" : ""}
                    onClick={() => setDay("kickoff")}
                >
                    Kickoff Day
                </button>
                <button style={{marginBottom:"50px"}}
                    className={day === "development" ? "active" : ""}
                    onClick={() => setDay("development")}
                >
                    Development Day
                </button>
                <button style={{marginBottom:"50px"}}
                    className={day === "final" ? "active" : ""}
                    onClick={() => setDay("final")}
                >
                    Final Showdown
                </button>
            </div>

            {/* CARD */}
            <div className="timeline-card" style={{marginBottom:"-30px"}}>
                <h2 className="timeline-day-title">{schedule[day].title}</h2>

                <div className="timeline-list">
                    <div className="timeline-line" />

                    {schedule[day].events.map(([time, text, color], i) => (
                        <div className="timeline-item" key={i}>
                            <span className={`dot ${color}`} />
                            <span className="time">{time}</span>
                            <span className="event">{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
