"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FAQClient = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const faqs = [
    {
      question: "Is Paydaytodaycash a direct lender?",
      answer: "No. We are a loan marketplace. We connect you with direct lenders. This allows you to access multiple loan options through a single request form. Think of us as your personal matchmaker, helping you find the right lender for your unique situation — all without having to fill out dozens of applications.",
      category: "general"
    },
    {
      question: "Will applying hurt my credit score?",
      answer: "No, checking your rate with Paydaytodaycash uses a soft credit inquiry that does not affect your credit score. This means you can see potential offers with zero impact on your credit. Only if you accept a loan offer and the lender does a hard credit check would your score be temporarily affected — and we'll always let you know before that happens.",
      category: "credit"
    },
    {
      question: "Can I get a loan with bad credit?",
      answer: "Yes! Many lenders in our network consider applicants with less-than-perfect credit. We believe a credit score doesn't tell your whole story. Our lenders look at other factors like your income, employment history, and overall financial situation. Even if you've been turned down elsewhere, you may still find options through Paydaytodaycash.",
      category: "credit"
    },
    {
      question: "How much can I borrow?",
      answer: "Loan amounts vary by lender and your personal circumstances. Through our network, you may find loans ranging from $100 to $5,000. Some lenders may offer up to $35,000 for qualified borrowers. The amount you qualify for depends on factors like your income, credit history, and the lender's specific criteria.",
      category: "loan"
    },
    {
      question: "How long does it take to get the money?",
      answer: "Once you're matched with a lender and accept their offer, funds are often deposited as quickly as the next business day. Some lenders may even offer same-day funding depending on when you apply and your bank's policies. The initial matching process itself takes just minutes — most people complete our form in under 5 minutes.",
      category: "funding"
    },
    {
      question: "Is my information safe?",
      answer: "Absolutely. We treat your data with the same security standards as a major financial institution. We use 256-bit SSL encryption — the same technology banks use — to protect your personal information. Your data is never sold to unauthorized third parties and is only shared with lenders in our network to help match you with loan offers. We take your privacy and security very seriously.",
      category: "security"
    }
  ];

  const categories = [
    { id: "all", label: "All Questions", icon: "bi-question-circle" },
    { id: "general", label: "General", icon: "bi-info-circle" },
    { id: "credit", label: "Credit", icon: "bi-star" },
    { id: "loan", label: "Loan Details", icon: "bi-cash" },
    { id: "funding", label: "Funding", icon: "bi-clock" },
    { id: "security", label: "Security", icon: "bi-shield-check" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="hero-pattern">
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
        </div>
        
        <div className="container">
          <div className="row align-items-center min-vh-40">
            <div className="col-12 col-lg-8 mx-auto text-center">
              <div className="hero-content">
                <span className="hero-subtitle wow fadeInUp" data-wow-duration="0.8s">
                  <i className="bi bi-question-circle"></i>
                  FAQ
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  Have a Question? <span className="highlight">Look Here</span>
                </h1>
                <p className="hero-description wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  Find quick answers to the most common questions about Paydaytodaycash. If you can't find what you're looking for, our support team is always here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="faq-search-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="search-wrapper wow fadeInUp" data-wow-duration="0.8s">
                <i className="bi bi-search"></i>
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search your question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="clear-search" onClick={() => setSearchQuery("")}>
                    <i className="bi bi-x"></i>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-12">
              <div className="category-tabs wow fadeInUp" data-wow-duration="0.8s">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <i className={`bi ${category.icon}`}></i>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-accordion-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto">
              {filteredFaqs.length > 0 ? (
                <div className="faq-accordion">
                  {filteredFaqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className={`faq-item ${openIndex === index ? 'active' : ''}`}
                      data-category={faq.category}
                    >
                      <button 
                        className="faq-question"
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="question-content">
                          <span className="question-text">{faq.question}</span>
                          <span className="question-icon">
                            {openIndex === index ? (
                              <i className="bi bi-dash"></i>
                            ) : (
                              <i className="bi bi-plus"></i>
                            )}
                          </span>
                        </div>
                      </button>
                      
                      <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results wow fadeInUp">
                  <i className="bi bi-emoji-frown"></i>
                  <h3>No questions found</h3>
                  <p>Try adjusting your search or browse all categories</p>
                  <button 
                    className="btn_theme"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                  >
                    View All Questions
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="faq-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card wow fadeInUp" data-wow-duration="0.8s">
              <div className="stat-icon">
                <i className="bi bi-clock-history"></i>
              </div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            
            <div className="stat-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
              <div className="stat-icon">
                <i className="bi bi-chat-dots"></i>
              </div>
              <div className="stat-number">5 min</div>
              <div className="stat-label">Average Response</div>
            </div>
            
            <div className="stat-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <div className="stat-icon">
                <i className="bi bi-people"></i>
              </div>
              <div className="stat-number">50k+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            
            <div className="stat-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
              <div className="stat-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="still-questions">
        <div className="container">
          <div className="questions-card">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <div className="questions-content">
                  <h2 className="questions-title">Still have questions?</h2>
                  <p className="questions-text">
                    Can't find the answer you're looking for? Our customer support team is available 24/7 to help you with any questions about our service, your application, or loan options.
                  </p>
                  <div className="contact-options">
                    <Link href="/contact" className="btn_theme btn_theme_active">
                      Contact Support <i className="bi bi-arrow-right"></i>
                    </Link>
                    <div className="alt-contact">
                      <i className="bi bi-telephone"></i>
                      <span>or call us at</span>
                      <a href="tel:+18885551234">1-888-555-1234</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="questions-illustration">
                  <div className="chat-bubbles">
                    <div className="bubble bubble-1">?</div>
                    <div className="bubble bubble-2">!</div>
                    <div className="bubble bubble-3">...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="faq-cta">
        <div className="container">
          <div className="cta-card">
            <div className="row align-items-center">
              <div className="col-12 col-lg-8">
                <h2 className="cta-title">Ready to get started?</h2>
                <p className="cta-text">Check your rate in minutes with no impact on your credit score.</p>
              </div>
              <div className="col-12 col-lg-4 text-lg-end">
                <Link href="/contact" className="btn_theme btn_theme_active cta-button">
                  Check My Rate <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQClient;