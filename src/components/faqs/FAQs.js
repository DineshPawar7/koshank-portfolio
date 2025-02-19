import React, { useState } from "react";
import "../faqs/FAQs.css";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your question: "${question}" has been submitted!`);
    setQuestion("");
  };

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-heading">FAQs</h2>
      <p className="faq-description">Providing answers to your questions...</p>

      <div className="faq-questions">
        {/* FAQ 1 */}
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(0)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Duis mollis</p>
            <span className="icon">
              {activeIndex === 0 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Duis mollis</p>
            </div>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(1)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Duis mollis</p>
            <span className="icon">
              {activeIndex === 1 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Duis mollis</p>
            </div>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(2)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Duis mollis</p>
            <span className="icon">
              {activeIndex === 2 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Duis mollis</p>
            </div>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(3)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Duis mollis</p>
            <span className="icon">
              {activeIndex === 3 ? "-" : "+"}
            </span>
          </div>
          {activeIndex === 3 && (
            <div className="faq-answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Duis mollis</p>
            </div>
          )}
        </div>
      </div>

      {/* Question Submission Section */}
      <div className="question-submit">
        <div className="question-submit-text">
          <p> elit. Curabitur blandit tempus porttitor. Duis mollis</p>
        </div>
        <form onSubmit={handleSubmit} className="question-form">
          <input
            type="text"
            className="question-input"
            placeholder="What do you want to know?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Faqs;
