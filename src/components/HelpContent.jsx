import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBook,
  faWallet,
  faShieldAlt,
  faMobileAlt,
  faQuestionCircle,
  faChevronDown,
  faHeadset,
  faEnvelope,
  faCommentDots,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../css/HelpContent.css";

const HelpContent = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "getting-started",
      name: "Getting Started",
      icon: faBook,
      color: "blue",
    },
    { id: "wallet", name: "Wallet & Payments", icon: faWallet, color: "green" },
    {
      id: "security",
      name: "Account Security",
      icon: faShieldAlt,
      color: "purple",
    },
    {
      id: "services",
      name: "Services & Bills",
      icon: faMobileAlt,
      color: "orange",
    },
  ];

  const faqs = [
    {
      question: "How long does it take for my wallet to be funded?",
      answer:
        "Most funding methods (Bank Transfer, Card, and USSD) are instant. Your balance should update within seconds of a successful transaction.",
    },
    {
      question: "What should I do if a transaction fails but I was debited?",
      answer:
        "Don't panic! Kindly wait for 15-30 minutes as most failed transactions are automatically reversed by your bank. If not resolved, please contact support with your transaction reference.",
    },
    {
      question: "How can I reset my transaction PIN?",
      answer:
        "Go to Settings > Security > Transaction PIN. You will need to verify your identity via email or SMS to set a new PIN.",
    },
    {
      question: "Are there any hidden charges for bill payments?",
      answer:
        "We strive to keep fees at zero for most services. Some specific billers (like Electricity) may have a standard convenience fee of ₦50 - ₦100.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="helpContainer">
      <div className="backNavigation">
        <button
          className="backToDashboardBtn"
          onClick={() => (window.location.href = "/")}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Dashboard</span>
        </button>
      </div>
      <div className="helpHero">
        <h1 className="helpTitle">How can we help you?</h1>
        <div className="helpSearchWrapper">
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          <input
            type="text"
            placeholder="Search for articles, guides, or FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="categoryGrid">
        {categories.map((cat) => (
          <div key={cat.id} className={`categoryCard cat-${cat.color}`}>
            <div className="catIcon">
              <FontAwesomeIcon icon={cat.icon} />
            </div>
            <h3>{cat.name}</h3>
            <p>Browse help articles related to {cat.name.toLowerCase()}.</p>
          </div>
        ))}
      </div>

      <div className="helpMainContent">
        {/* FAQ Section */}
        <div className="faqSection">
          <div className="sectionHeader">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faqList">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faqItem ${activeFaq === index ? "active" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faqQuestion">
                  <span>{faq.question}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="arrow" />
                </div>
                {activeFaq === index && (
                  <div className="faqAnswer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Sidebar */}
        <aside className="supportSidebar">
          <div className="supportCard">
            <div className="supportIcon">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <h3>Still need help?</h3>
            <p>Our support team is available 24/7 to assist you.</p>

            <div className="contactList">
              <div className="contactItem">
                <FontAwesomeIcon icon={faCommentDots} />
                <div className="contactInfo">
                  <span>Live Chat</span>
                  <p>Average response: 2 mins</p>
                </div>
              </div>
              <div className="contactItem">
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="contactInfo">
                  <span>Email Support</span>
                  <p>support@vtuplatform.com</p>
                </div>
              </div>
            </div>

            <button className="contactBtn">Start a Conversation</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HelpContent;
