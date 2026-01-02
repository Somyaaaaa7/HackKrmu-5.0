import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "What is Hack KRMU 5.0?",
    a: "Hack KRMU 4.0 is a 54-hour hackathon organized by K.R. Mangalam University that brings together innovative minds to build impactful solutions using technology. Participants collaborate, ideate, and develop projects under mentorship, competing for exciting prizes and recognition."
  },
  {
    q: "Who can participate and what is the team size",
    a: "Hack KRMU 4.0 is open to all undergraduate and postgraduate students from any college or university. Participants can form teams of 2 to 4 members."
  },
  {
    q: "What should I bring?",
    a: "Participants should bring their laptops, chargers, college ID, and any hardware required for their project."
  },
  {
    q: "What is provided during the event?",
    a: "Participants will be provided with all necessary resources including internet access, workspace, and refreshments throughout the event."
  },
  {
    q: "Can I use pre-built code or libraries?",
    a: "Open-source libraries and APIs are allowed; however, plagiarism or submission of pre-built projects is strictly prohibited."
  },
  {
    q: "Is there any registration fee?",
    a: "Yes, there is a nominal registration fee of INR 699 per team"
  },
  {
    q: "I have more questions. Who can I contact?",
    a: "You can reach out to the organizing committee via email at Info.hackkrmu@gmail.com or through our official social media handles."
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faq-page">
      <h1 className="section-title" style={{marginTop:"-110px"}}>Frequently Asked Questions</h1>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <button
              className="faq-question"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {item.q}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
