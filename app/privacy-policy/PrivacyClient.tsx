"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PrivacyClient = () => {
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
      title: "Our Role (Important Disclosure)",
      icon: "🏦",
      content: (
        <>
          <div className="highlight-box">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span>We are not a lender and do not make credit decisions.</span>
          </div>
          <p>We operate as a <strong>lead generator / marketplace</strong> that matches consumers with potential lenders and financial partners.</p>
          <p>When you submit information:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Your data may be shared with multiple lenders or buyers</li>
            <li><i className="bi bi-check-circle-fill"></i> Distribution occurs via automated decisioning (ping-tree technology)</li>
            <li><i className="bi bi-check-circle-fill"></i> Buyers may evaluate eligibility independently</li>
          </ul>
        </>
      )
    },
    {
      id: "collect",
      title: "Information We Collect",
      icon: "📋",
      content: (
        <>
          <h4 className="subsection-title">A. Information You Provide</h4>
          <p>When you submit a loan request or inquiry, we may collect:</p>
          <div className="badge-container">
            <span className="badge-item">Full name</span>
            <span className="badge-item">Email address</span>
            <span className="badge-item">Phone number</span>
            <span className="badge-item">Mailing address</span>
            <span className="badge-item">Date of birth</span>
            <span className="badge-item">Loan amount requested</span>
            <span className="badge-item">Employment details</span>
            <span className="badge-item">Banking information</span>
            <span className="badge-item">Consent records</span>
          </div>

          <h4 className="subsection-title">B. Automatically Collected Information</h4>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> IP address</li>
            <li><i className="bi bi-check-circle-fill"></i> Device and browser data</li>
            <li><i className="bi bi-check-circle-fill"></i> Geolocation (approximate)</li>
            <li><i className="bi bi-check-circle-fill"></i> Time and date stamps</li>
            <li><i className="bi bi-check-circle-fill"></i> Referral and affiliate source data</li>
          </ul>

          <h4 className="subsection-title">C. Information From Third Parties</h4>
          <p>We may receive data from:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Affiliate publishers</li>
            <li><i className="bi bi-check-circle-fill"></i> Marketing partners</li>
            <li><i className="bi bi-check-circle-fill"></i> Data verification services</li>
            <li><i className="bi bi-check-circle-fill"></i> Fraud-prevention providers</li>
          </ul>
        </>
      )
    },
    {
      id: "ping-tree",
      title: "How the Ping-Tree Model Uses Your Data",
      icon: "🌲",
      content: (
        <>
          <p>Your information may be used as follows:</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h5>Initial Evaluation (Ping)</h5>
                <p>Limited data is shared with multiple potential lenders to determine eligibility and pricing. May occur simultaneously or sequentially.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h5>Lead Delivery (Post)</h5>
                <p>Full application data is sent to one or more matched lenders based on eligibility, availability, and business rules.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h5>Fallback Distribution</h5>
                <p>If one lender declines, your information may be shared with others until a match is found or buyers are exhausted.</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: "use",
      title: "How We Use Your Information",
      icon: "🔍",
      content: (
        <>
          <p>We use personal information to:</p>
          <div className="grid-list">
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Match consumers with lenders</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Operate lead-distribution systems</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Communicate about your request</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Verify identity and detect fraud</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Maintain compliance records</span>
            </div>
            <div className="grid-item">
              <i className="bi bi-check-lg"></i>
              <span>Improve platform performance</span>
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
      id: "sharing",
      title: "Information Sharing & Sale Disclosure",
      icon: "📤",
      content: (
        <>
          <h4 className="subsection-title">A. Lenders & Financial Buyers</h4>
          <p>We may share or sell your personal information to:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Banks</li>
            <li><i className="bi bi-check-circle-fill"></i> Licensed lenders</li>
            <li><i className="bi bi-check-circle-fill"></i> Loan servicers</li>
            <li><i className="bi bi-check-circle-fill"></i> Financial service providers</li>
          </ul>
          <div className="highlight-box">
            <i className="bi bi-info-circle-fill"></i>
            <span>This sharing may be considered a "sale" or "sharing" under certain state privacy laws.</span>
          </div>

          <h4 className="subsection-title">B. Service Providers</h4>
          <p>Including:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Lead-routing platforms</li>
            <li><i className="bi bi-check-circle-fill"></i> Hosting providers</li>
            <li><i className="bi bi-check-circle-fill"></i> Analytics services</li>
            <li><i className="bi bi-check-circle-fill"></i> CRM and call-tracking vendors</li>
            <li><i className="bi bi-check-circle-fill"></i> Compliance and audit partners</li>
          </ul>

          <h4 className="subsection-title">C. Legal & Compliance</h4>
          <p>We may disclose information to:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Comply with law or court order</li>
            <li><i className="bi bi-check-circle-fill"></i> Respond to regulatory requests</li>
            <li><i className="bi bi-check-circle-fill"></i> Prevent fraud or abuse</li>
            <li><i className="bi bi-check-circle-fill"></i> Enforce agreements</li>
          </ul>
        </>
      )
    },
    {
      id: "tcpa",
      title: "TCPA & Communication Consent",
      icon: "📱",
      content: (
        <>
          <p>By submitting your information, you expressly consent to receive communications from us and our partners, including:</p>
          <div className="communication-icons">
            <div className="comm-item">
              <i className="bi bi-telephone"></i>
              <span>Phone calls</span>
            </div>
            <div className="comm-item">
              <i className="bi bi-chat-dots"></i>
              <span>Text messages (SMS)</span>
            </div>
            <div className="comm-item">
              <i className="bi bi-envelope"></i>
              <span>Emails</span>
            </div>
          </div>
          <p className="mt-3">This may include automated dialing systems or prerecorded messages, as permitted by law.</p>
          
          <div className="consent-box">
            <p><strong>Consent:</strong></p>
            <ul>
              <li><i className="bi bi-dash"></i> Is not required to obtain credit</li>
              <li><i className="bi bi-dash"></i> Can be revoked at any time by following opt-out instructions</li>
            </ul>
          </div>
        </>
      )
    },
    {
      id: "glba",
      title: "Gramm-Leach-Bliley Act (GLBA)",
      icon: "🏛️",
      content: (
        <>
          <p>As a financial lead-generation entity, we comply with the GLBA by:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Limiting access to consumer information</li>
            <li><i className="bi bi-check-circle-fill"></i> Implementing security safeguards</li>
            <li><i className="bi bi-check-circle-fill"></i> Sharing data only as permitted by law</li>
          </ul>
        </>
      )
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: "🍪",
      content: (
        <>
          <p>We use cookies and similar technologies to:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Enable Website functionality</li>
            <li><i className="bi bi-check-circle-fill"></i> Track affiliate attribution</li>
            <li><i className="bi bi-check-circle-fill"></i> Measure performance</li>
            <li><i className="bi bi-check-circle-fill"></i> Detect fraud</li>
          </ul>
          <p className="section-note">You may disable cookies in your browser settings.</p>
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
            <li><i className="bi bi-check-circle-fill"></i> Meet regulatory requirements</li>
            <li><i className="bi bi-check-circle-fill"></i> Resolve disputes</li>
            <li><i className="bi bi-check-circle-fill"></i> Maintain audit and compliance records</li>
          </ul>
        </>
      )
    },
    {
      id: "rights",
      title: "Your Privacy Rights (U.S.)",
      icon: "⚖️",
      content: (
        <>
          <h4 className="subsection-title">California Residents (CCPA/CPRA)</h4>
          <p>You have the right to:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Know what personal information we collect</li>
            <li><i className="bi bi-check-circle-fill"></i> Request deletion or correction</li>
            <li><i className="bi bi-check-circle-fill"></i> Opt out of the sale or sharing of personal information</li>
            <li><i className="bi bi-check-circle-fill"></i> Limit use of sensitive personal information</li>
            <li><i className="bi bi-check-circle-fill"></i> Not be discriminated against</li>
          </ul>
          
          <div className="opt-out-box">
            <p><strong>Opt-Out:</strong></p>
            <a href="mailto:contact@paydaytodaycash.com" className="opt-out-email">
              <i className="bi bi-envelope"></i>
              contact@paydaytodaycash.com
            </a>
          </div>
        </>
      )
    },
    {
      id: "dnt",
      title: "Do Not Track Signals",
      icon: "🚫",
      content: (
        <>
          <p>We do not currently respond to "Do Not Track" signals.</p>
        </>
      )
    },
    {
      id: "children",
      title: "Children's Privacy",
      icon: "👶",
      content: (
        <>
          <p>Our Website is intended for individuals <strong>18 years or older</strong>.</p>
          <p>We do not knowingly collect information from minors.</p>
        </>
      )
    },
    {
      id: "security",
      title: "Security Measures",
      icon: "🔒",
      content: (
        <>
          <p>We use reasonable safeguards including:</p>
          <div className="badge-container">
            <span className="badge-item">SSL encryption</span>
            <span className="badge-item">Access controls</span>
            <span className="badge-item">Secure storage</span>
            <span className="badge-item">Regular security reviews</span>
          </div>
        </>
      )
    },
    {
      id: "updates",
      title: "Policy Updates",
      icon: "📝",
      content: (
        <>
          <p>We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date.</p>
        </>
      )
    }
  ];

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
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
                  <i className="bi bi-shield-lock"></i>
                  Privacy
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  Privacy <span className="highlight">Policy</span>
                </h1>
                <div className="privacy-meta wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  <div className="meta-item">
                    <i className="bi bi-calendar-check"></i>
                    <span><strong>Effective:</strong> 06:01:2026</span>
                  </div>
                  <div className="meta-divider"></div>
                  <div className="meta-item">
                    <i className="bi bi-clock-history"></i>
                    <span><strong>Updated:</strong> 06:01:2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Card */}
      <section className="privacy-intro">
        <div className="container">
          <div className="intro-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="intro-icon">
              <i className="bi bi-building"></i>
            </div>
            <div className="intro-content">
              <p>
                <strong>Paydaytodaycash</strong> ("Company," "we," "us," or "our") operates a financial lead-generation platform that connects consumers seeking loan products with third-party lenders and financial service providers through a real-time distribution (ping-tree) model.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, share, and protect personal information when you visit <strong>www.paydaytodaycash.com</strong> ("Website") or submit information through our forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Accordion */}
      <section className="privacy-accordion-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="privacy-accordion wow fadeInUp" data-wow-duration="0.8s">
                {sections.map((section, index) => (
                  <div 
                    key={section.id} 
                    className={`privacy-item ${activeIndex === index ? 'active' : ''}`}
                  >
                    <button 
                      className="privacy-question"
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
                    
                    <div className={`privacy-answer ${activeIndex === index ? 'open' : ''}`}>
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
      <section className="privacy-contact">
        <div className="container">
          <div className="contact-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <h3 className="contact-title">Questions About Your Privacy?</h3>
                <p className="contact-text">
                  If you have any questions about our privacy practices or your rights, please contact us.
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
      <section className="privacy-cta">
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

export default PrivacyClient;