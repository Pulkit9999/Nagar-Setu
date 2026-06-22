import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../css/FAQsScreen.css";

const faqData = [
  {
    id: 1,
    question:
      "What are the contact details of Nagar Setu Grievance Department?",
    answer:
      "Nagar Setu Grievance Department, Nagar Setu Bhawan, New Delhi - 110001. Email: support@nagarsetu.in Phone: 1800-000-0000",
  },
  {
    id: 2,
    question: "Where can citizens submit grievances?",
    answer:
      "Citizens can submit grievances online through the Nagar Setu portal or visit the nearest citizen service centre.",
  },
  {
    id: 3,
    question: "How do I lodge a grievance?",
    answer:
      "Login to your account, navigate to Grievance Registration, fill in the required details and submit the complaint.",
  },
  {
    id: 4,
    question: "What happens after grievance submission?",
    answer:
      "A unique grievance number is generated and can be used for tracking the grievance status.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <MainLayout>
      <div className="faq-page">
        <div className="faq-card">
          <h2 className="faq-heading">FAQ</h2>

          <p className="faq-description">
            Frequently Asked Questions regarding Nagar Setu grievance
            registration and citizen services.
          </p>

          <div className="faq-list">
            {faqData.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.id}. {faq.question}</span>

                  <span className="faq-icon">
                    {openId === faq.id ? "−" : "+"}
                  </span>
                </button>

                {openId === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="faq-note">
            <strong>
               Note: Nagar Setu is a personal project created for learning and demonstration purposes only. It is not affiliated with any government department.
              </strong>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;