"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CaliforniaPrivacyClient = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const sections = [
    {
      id: "role",
      title: "Our Role",
      icon: "🏦",
      content: (
        <>
          <p>Paydaytodaycash operates a financial lead-generation and distribution platform that connects consumers seeking loan products with third-party lenders and financial service providers through real-time routing and ping-tree technology.</p>
          <div className="highlight-box">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span><strong>Paydaytodaycash is not a lender</strong>, does not make credit decisions, and does not issue loans.</span>
          </div>
        </>
      )
    },
    {
      id: "categories",
      title: "Categories of Personal Information Collected",
      icon: "📋",
      content: (
        <>
          <p>Within the last 12 months, we may have collected the following categories of personal information:</p>
          
          <h4 className="subsection-title">A. Identifiers</h4>
          <div className="badge-container">
            <span className="badge-item">Full name</span>
            <span className="badge-item">Email address</span>
            <span className="badge-item">Phone number</span>
            <span className="badge-item">IP address</span>
            <span className="badge-item">Online identifiers</span>
          </div>

          <h4 className="subsection-title">B. Personal Information (Cal. Civ. Code §1798.80)</h4>
          <div className="badge-container">
            <span className="badge-item">Mailing address</span>
            <span className="badge-item">Date of birth</span>
            <span className="badge-item">Employment information</span>
            <span className="badge-item">Income-related indicators</span>
            <span className="badge-item">Loan request details</span>
          </div>

          <h4 className="subsection-title">C. Internet or Network Activity</h4>
          <div className="badge-container">
            <span className="badge-item">Website interaction data</span>
            <span className="badge-item">Browsing behavior</span>
            <span className="badge-item">Referral source data</span>
            <span className="badge-item">Affiliate source data</span>
          </div>

          <h4 className="subsection-title">D. Geolocation Data</h4>
          <div className="badge-container">
            <span className="badge-item">Approximate location (from IP address)</span>
          </div>

          <h4 className="subsection-title">E. Sensitive Personal Information</h4>
          <div className="badge-container">
            <span className="badge-item">Financial information</span>
            <span className="badge-item">Authentication data</span>
            <span className="badge-item">Verification data</span>
          </div>
        </>
      )
    },
    {
      id: "sources",
      title: "Sources of Personal Information",
      icon: "🔍",
      content: (
        <>
          <p>We collect personal information from:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Consumers directly</li>
            <li><i className="bi bi-check-circle-fill"></i> Affiliate publishers and marketing partners</li>
            <li><i className="bi bi-check-circle-fill"></i> Lead generators</li>
            <li><i className="bi bi-check-circle-fill"></i> Data verification and fraud-prevention providers</li>
            <li><i className="bi bi-check-circle-fill"></i> Cookies and similar tracking technologies</li>
          </ul>
        </>
      )
    },
    {
      id: "purposes",
      title: "Purposes for Collection and Use",
      icon: "🎯",
      content: (
        <>
          <p>We collect and use personal information to:</p>
          <div className="grid-list">
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Match consumers with lenders</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Operate ping-tree distribution</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Communicate about inquiries</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Verify identity and prevent fraud</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Maintain compliance records</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Improve website performance</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Meet legal obligations</span>
            </div>
          </div>
        </>
      )
    },
    {
      id: "disclosure",
      title: "Disclosure, Sale, and Sharing",
      icon: "📤",
      content: (
        <>
          <h4 className="subsection-title">A. Disclosure for Business Purposes</h4>
          <p>We may disclose personal information to:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Service providers</li>
            <li><i className="bi bi-check-circle-fill"></i> Technology and lead-routing platforms</li>
            <li><i className="bi bi-check-circle-fill"></i> Hosting, analytics, and compliance vendors</li>
          </ul>

          <h4 className="subsection-title">B. Sale or Sharing of Personal Information</h4>
          <div className="highlight-box">
            <i className="bi bi-info-circle-fill"></i>
            <span>Paydaytodaycash may <strong>sell or share</strong> personal information to third-party lenders and financial buyers in exchange for monetary or other valuable consideration.</span>
          </div>
          <p>This may include:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Identifiers</li>
            <li><i className="bi bi-check-circle-fill"></i> Financial and loan-related information</li>
            <li><i className="bi bi-check-circle-fill"></i> Internet or network activity data</li>
          </ul>
        </>
      )
    },
    {
      id: "sensitive",
      title: "Sensitive Personal Information",
      icon: "🔒",
      content: (
        <>
          <p>Sensitive personal information is used only as reasonably necessary to:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Provide requested services</li>
            <li><i className="bi bi-check-circle-fill"></i> Match consumers with lenders</li>
            <li><i className="bi bi-check-circle-fill"></i> Maintain platform security</li>
            <li><i className="bi bi-check-circle-fill"></i> Meet compliance obligations</li>
          </ul>
          <p className="section-note">We do not use sensitive personal information for unrelated purposes.</p>
        </>
      )
    },
    {
      id: "rights",
      title: "Your California Privacy Rights",
      icon: "⚖️",
      content: (
        <>
          <p>If you are a California resident, you have the right to:</p>
          
          <div className="rights-cards">
            <div className="right-card">
              <div className="right-icon">A</div>
              <div className="right-content">
                <h5>Right to Know</h5>
                <p>Request disclosure of categories and sources of personal information, business purposes, and third parties with whom information is shared.</p>
              </div>
            </div>
            
            <div className="right-card">
              <div className="right-icon">B</div>
              <div className="right-content">
                <h5>Right to Delete</h5>
                <p>Request deletion of personal information, subject to legal exceptions.</p>
              </div>
            </div>
            
            <div className="right-card">
              <div className="right-icon">C</div>
              <div className="right-content">
                <h5>Right to Correct</h5>
                <p>Request correction of inaccurate personal information.</p>
              </div>
            </div>
            
            <div className="right-card">
              <div className="right-icon">D</div>
              <div className="right-content">
                <h5>Right to Opt Out</h5>
                <p>Opt out of the sale or sharing of your personal information at any time.</p>
              </div>
            </div>
            
            <div className="right-card">
              <div className="right-icon">E</div>
              <div className="right-content">
                <h5>Limit Sensitive Info</h5>
                <p>Request limitations on how sensitive personal information is used.</p>
              </div>
            </div>
            
            <div className="right-card">
              <div className="right-icon">F</div>
              <div className="right-content">
                <h5>Non-Discrimination</h5>
                <p>We will not discriminate against you for exercising your privacy rights.</p>
              </div>
            </div>
          </div>

          <div className="opt-out-box">
            <h4>Do Not Sell or Share My Personal Information</h4>
            <p>To opt out of the sale or sharing of your personal information:</p>
            <a href="mailto:contact@paydaytodaycash.com" className="opt-out-email">
              <i className="bi bi-envelope"></i>
              contact@paydaytodaycash.com
            </a>
          </div>
        </>
      )
    },
    {
      id: "requests",
      title: "How to Submit a Privacy Request",
      icon: "📨",
      content: (
        <>
          <p>You may submit a request by contacting us at:</p>
          <div className="contact-email-large">
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:contact@paydaytodaycash.com">contact@paydaytodaycash.com</a>
          </div>
          <p className="section-note">We may verify your identity before processing your request.</p>
        </>
      )
    },
    {
      id: "agents",
      title: "Authorized Agents",
      icon: "👤",
      content: (
        <>
          <p>You may designate an authorized agent to submit a request on your behalf.</p>
          <p className="section-note">Proof of authorization may be required.</p>
        </>
      )
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: "⏳",
      content: (
        <>
          <p>We retain personal information only as long as necessary to:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Fulfill lead-generation purposes</li>
            <li><i className="bi bi-check-circle-fill"></i> Meet legal and regulatory obligations</li>
            <li><i className="bi bi-check-circle-fill"></i> Resolve disputes</li>
            <li><i className="bi bi-check-circle-fill"></i> Enforce agreements</li>
          </ul>
        </>
      )
    },
    {
      id: "minors",
      title: "Minors",
      icon: "👶",
      content: (
        <>
          <p>Paydaytodaycash does not knowingly sell or share the personal information of individuals under 16 years of age.</p>
        </>
      )
    },
    {
      id: "updates",
      title: "Updates to This Notice",
      icon: "📝",
      content: (
        <>
          <p>We may update this California Privacy Notice from time to time. Any updates will be posted on this page with a revised effective date.</p>
        </>
      )
    }
  ];

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="california-privacy-page">
      {/* Hero Section */}
      <section className="california-hero">
        <div className="hero-pattern">
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
        </div>
        
        <div className="container">
          <div className="row align-items-center min-vh-30">
            <div className="col-12 col-lg-8 mx-auto text-center">
              <div className="hero-content">
                <span className="hero-subtitle wow fadeInUp" data-wow-duration="0.8s">
                  <i className="bi bi-shield-check"></i>
                  CCPA / CPRA
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  California <span className="highlight">Privacy Notice</span>
                </h1>
                <div className="privacy-meta wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  <div className="meta-item">
                    <i className="bi bi-calendar-check"></i>
                    <span><strong>Effective:</strong> January 06, 2026</span>
                  </div>
                  <div className="meta-divider"></div>
                  <div className="meta-item">
                    <i className="bi bi-clock-history"></i>
                    <span><strong>Updated:</strong> January 06, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Card */}
      <section className="california-intro">
        <div className="container">
          <div className="intro-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="intro-icon">
              <i className="bi bi-building"></i>
            </div>
            <div className="intro-content">
              <p>
                This California Privacy Notice supplements the Privacy Policy of <strong>Paydaytodaycash</strong> ("Company," "we," "us," or "our") and applies solely to California residents ("Consumers") as defined by the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Accordion */}
      <section className="california-accordion-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="california-accordion wow fadeInUp" data-wow-duration="0.8s">
                {sections.map((section, index) => (
                  <div 
                    key={section.id} 
                    className={`california-item ${activeIndex === index ? 'active' : ''}`}
                  >
                    <button 
                      className="california-question"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="question-content">
                        <div className="question-left">
                          <span className="question-icon-large">{section.icon}</span>
                          <span className="question-text">{section.title}</span>
                        </div>
                        <span className="question-toggle">
                          {activeIndex === index ? (
                            <i className="bi bi-dash"></i>
                          ) : (
                            <i className="bi bi-plus"></i>
                          )}
                        </span>
                      </div>
                    </button>
                    
                    <div className={`california-answer ${activeIndex === index ? 'open' : ''}`}>
                      <div className="answer-content">
                        {section.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="california-contact">
        <div className="container">
          <div className="contact-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <h3 className="contact-title">California Privacy Questions?</h3>
                <p className="contact-text">
                  If you have questions about your California privacy rights or wish to exercise your rights, please contact us.
                </p>
                <div className="contact-details">
                  <div className="contact-row">
                    <i className="bi bi-envelope"></i>
                    <a href="mailto:contact@paydaytodaycash.com">contact@paydaytodaycash.com</a>
                  </div>
                  <div className="contact-row">
                    <i className="bi bi-globe"></i>
                    <span>www.paydaytodaycash.com</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="contact-illustration">
                  <i className="bi bi-shield-check"></i>
                  <div className="floating-elements">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="california-cta">
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

export default CaliforniaPrivacyClient;