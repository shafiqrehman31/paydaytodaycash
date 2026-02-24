"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const faqs = [
    {
      question: "How does Paydaytodaycash work?",
      answer: "Submit one secure request and get matched with lenders so you can compare offers. It's that simple! We connect you with our network of trusted lenders who may offer loans based on your needs. You'll receive multiple offers to compare and choose the one that works best for you."
    },
    {
      question: "Do you run a hard credit check when I apply?",
      answer: "No, we use a soft credit check that won't affect your credit score. This allows us to match you with potential lenders without impacting your credit history. Only if you proceed with a lender and they do a hard check would your score be affected."
    },
    {
      question: "Can I get a loan with bad credit or no credit history?",
      answer: "Yes! Many lenders in our network consider applicants with less-than-perfect credit. We work with lenders who look beyond just your credit score and consider other factors like income and employment history. Everyone deserves a fair chance."
    },
    {
      question: "How fast can I get funds?",
      answer: "If you're matched with a lender and approved, funds can often be deposited as quickly as the next business day. Some lenders may even offer same-day funding depending on when you apply and your bank's policies."
    },
    {
      question: "What fees should I expect?",
      answer: "Fees vary by lender and loan offer. We believe in transparency — any potential fees, interest rates, and terms will be clearly shown to you before you accept a loan. Make sure to read the fine print and ask questions if anything is unclear."
    },
    {
      question: "Is applying secure? What do you do with my data?",
      answer: "Absolutely! We use 256-bit SSL encryption to protect your personal information. Your data is never sold to unauthorized third parties and is only shared with lenders in our network to help match you with loan offers. We take your privacy seriously."
    },
    {
      question: "Will applying affect my credit score?",
      answer: "The initial request through Paydaytodaycash uses a soft credit check that does not impact your credit score. If you accept a loan offer, the lender may perform a hard credit check, which could temporarily affect your score. We'll always let you know before that happens."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section" id="faq">
      {/* Decorative background */}
      <div className="faq-bg">
        <div className="faq-circle circle-1"></div>
        <div className="faq-circle circle-2"></div>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column - Header and Contact */}
          <div className="col-12 col-lg-5">
            <div className="faq-header-content">
              <span className="faq-sub-title headingFour wow fadeInLeft" data-wow-duration="0.8s">
                <Image src="/images/title_vector.png" alt="vector" width={20} height={20} />
                Our FAQ
              </span>
              
              <h2 className="faq-main-title wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.1s">
                Have a Question? <span className="highlight-text">Look Here</span>
              </h2>
              
              <p className="faq-description wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.2s">
                Can't find what you're looking for? We're here to help.
              </p>
              
              <div className="faq-contact-card wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <div className="contact-icon">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="contact-details">
                  <h4>Still have questions?</h4>
                  <p>Our customer support team is available 24/7</p>
                  <Link href="/contact" className="contact-link">
                    Contact Us <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
              
              <div className="faq-stats wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.4s">
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">5 min</span>
                  <span className="stat-label">Response</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Secure</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - FAQ Accordion */}
          <div className="col-12 col-lg-7">
            <div className="faq-accordion wow fadeInRight" data-wow-duration="0.8s">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openIndex === index ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="question-text">{faq.question}</span>
                    <span className="question-icon">
                      {openIndex === index ? (
                        <i className="bi bi-dash"></i>
                      ) : (
                        <i className="bi bi-plus"></i>
                      )}
                    </span>
                  </button>
                  
                  <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;