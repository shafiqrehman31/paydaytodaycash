"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TermsClient = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const sections = [
    {
      id: "arbitration",
      title: "Binding Arbitration Agreement",
      icon: "⚖️",
      content: (
        <>
          <p className="section-emphasis">PLEASE READ THESE TERMS CAREFULLY.</p>
          <p>They include a binding arbitration agreement, a class-action waiver, and limitations on your legal rights. By using the Service, you agree that disputes will be resolved individually through arbitration, not in court, and not as part of a class action.</p>
        </>
      )
    },
    {
      id: "service",
      title: "Loan Referral & Lead Generation Service",
      icon: "🔄",
      content: (
        <>
          <p>Paydaytodaycash operates an online loan referral and lead-distribution platform that connects consumers with third-party lenders, lender networks, and financial service providers (<strong>"Lender Partners"</strong>).</p>
          <p>To use the Service, you must complete an online request form (<strong>"Request Form"</strong>) that may require personal information, including but not limited to:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Name</li>
            <li><i className="bi bi-check-circle-fill"></i> Address</li>
            <li><i className="bi bi-check-circle-fill"></i> Phone number</li>
            <li><i className="bi bi-check-circle-fill"></i> Email address</li>
            <li><i className="bi bi-check-circle-fill"></i> Employment and income information</li>
            <li><i className="bi bi-check-circle-fill"></i> Banking or financial details</li>
            <li><i className="bi bi-check-circle-fill"></i> Social Security number (where required by lenders)</li>
          </ul>
          <p>Our <Link href="/privacy-policy" className="inline-link">Privacy Policy</Link> governs how we collect and use this information and is incorporated into these Terms by reference.</p>
        </>
      )
    },
    {
      id: "lending",
      title: "No Lending or Credit Decisions",
      icon: "🏦",
      content: (
        <>
          <p><strong>Paydaytodaycash is not a lender</strong>, does not issue loans, and does not make credit decisions.</p>
          <p>We do not guarantee:</p>
          <ul className="section-list negative">
            <li><i className="bi bi-x-circle-fill"></i> That you will receive a loan offer</li>
            <li><i className="bi bi-x-circle-fill"></i> That you will be matched with a lender</li>
            <li><i className="bi bi-x-circle-fill"></i> Any specific loan amount, rate, fee, or term</li>
          </ul>
          <p>All lending decisions are made solely by Lender Partners.</p>
        </>
      )
    },
    {
      id: "sharing",
      title: "Information Sharing & Contact Consent",
      icon: "📤",
      content: (
        <>
          <p>By submitting a Request Form, you:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Authorize Paydaytodaycash to share your information with multiple Lender Partners</li>
            <li><i className="bi bi-check-circle-fill"></i> Acknowledge that you are requesting loan offers from third parties</li>
            <li><i className="bi bi-check-circle-fill"></i> Agree that Paydaytodaycash and Lender Partners may contact you via:
              <ul className="nested-list">
                <li>Phone calls</li>
                <li>Text messages (SMS)</li>
                <li>Emails</li>
                <li>Automated dialing systems or prerecorded messages (where permitted by law)</li>
              </ul>
            </li>
          </ul>
          <div className="highlight-box">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span>Consent is not required to purchase goods or services.</span>
          </div>
        </>
      )
    },
    {
      id: "credit",
      title: "Credit Checks",
      icon: "📊",
      content: (
        <>
          <p>Lender Partners may review your information in real time and may perform:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Soft credit checks (which do not affect credit scores)</li>
            <li><i className="bi bi-exclamation-triangle-fill"></i> Hard credit inquiries (which may affect your credit score)</li>
          </ul>
          <p>These checks may be conducted through:</p>
          <div className="badge-container">
            <span className="badge-item">Experian</span>
            <span className="badge-item">Equifax</span>
            <span className="badge-item">TransUnion</span>
            <span className="badge-item">DataX</span>
            <span className="badge-item">MicroBilt</span>
            <span className="badge-item">Teletrack</span>
          </div>
          <p>By submitting a Request Form, you authorize such reviews.</p>
        </>
      )
    },
    {
      id: "redirection",
      title: "Redirection to Lender Websites",
      icon: "↗️",
      content: (
        <>
          <p>If a Lender Partner determines that your information meets its criteria, you may be redirected to the lender's website.</p>
          <p>Once redirected:</p>
          <ul className="section-list negative">
            <li><i className="bi bi-dash-circle-fill"></i> Paydaytodaycash is no longer involved</li>
            <li><i className="bi bi-dash-circle-fill"></i> The lender's own terms and privacy policies apply</li>
            <li><i className="bi bi-dash-circle-fill"></i> Paydaytodaycash is not responsible for lender actions or decisions</li>
          </ul>
        </>
      )
    },
    {
      id: "electronic",
      title: "Electronic Disclosures & E-Sign Consent",
      icon: "✍️",
      content: (
        <>
          <p>By using the Service, you consent to receive:</p>
          <ul className="section-list">
            <li><i className="bi bi-check-circle-fill"></i> Electronic disclosures</li>
            <li><i className="bi bi-check-circle-fill"></i> Notices</li>
            <li><i className="bi bi-check-circle-fill"></i> Agreements</li>
            <li><i className="bi bi-check-circle-fill"></i> Communications</li>
          </ul>
          <p>Lender Partners may require electronic signatures, which are legally binding and equivalent to handwritten signatures.</p>
          <p className="section-note">You may withdraw electronic consent directly with the lender, though doing so may affect your ability to obtain a loan.</p>
        </>
      )
    },
    {
      id: "accuracy",
      title: "Accuracy of Information",
      icon: "✓",
      content: (
        <>
          <p>You represent that all information you submit is accurate, current, and truthful.</p>
          <p>Providing false or misleading information may result in:</p>
          <ul className="section-list negative">
            <li><i className="bi bi-x-circle-fill"></i> Rejection of your request</li>
            <li><i className="bi bi-x-circle-fill"></i> Suspension or termination of access to the Service</li>
          </ul>
        </>
      )
    },
    {
      id: "changes",
      title: "Changes to the Service",
      icon: "🔄",
      content: (
        <>
          <p>Paydaytodaycash may modify, suspend, or discontinue any part of the Service at any time without notice.</p>
          <p>We are not responsible for delays or failures caused by:</p>
          <ul className="section-list negative">
            <li><i className="bi bi-exclamation-triangle-fill"></i> Incorrect user information</li>
            <li><i className="bi bi-exclamation-triangle-fill"></i> Internet or system issues beyond our control</li>
          </ul>
        </>
      )
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      icon: "⚠️",
      content: (
        <>
          <div className="disclaimer-box">
            <p className="disclaimer-text">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE."</p>
          </div>
          <p>Paydaytodaycash DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:</p>
          <ul className="section-list negative">
            <li><i className="bi bi-dash-circle-fill"></i> MERCHANTABILITY</li>
            <li><i className="bi bi-dash-circle-fill"></i> FITNESS FOR A PARTICULAR PURPOSE</li>
            <li><i className="bi bi-dash-circle-fill"></i> NON-INFRINGEMENT</li>
          </ul>
          <p className="section-emphasis">USE OF THE SERVICE IS AT YOUR OWN RISK.</p>
        </>
      )
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: "🔒",
      content: (
        <>
          <p>To the maximum extent permitted by law, Paydaytodaycash, its partners, affiliates, and service providers are not liable for:</p>
          <ul className="section-list negative">
            <li><i className="bi bi-dash-circle-fill"></i> Indirect or consequential damages</li>
            <li><i className="bi bi-dash-circle-fill"></i> Credit decisions or lender actions</li>
            <li><i className="bi bi-dash-circle-fill"></i> Loss of data or business</li>
            <li><i className="bi bi-dash-circle-fill"></i> Unauthorized access beyond reasonable security measures</li>
          </ul>
          <p className="section-note">Some states may not allow these limitations; rights may vary.</p>
        </>
      )
    },
    {
      id: "indemnification",
      title: "Indemnification",
      icon: "🛡️",
      content: (
        <>
          <p>You agree to indemnify and hold harmless Paydaytodaycash and its partners from any claims, damages, or expenses arising from:</p>
          <ul className="section-list negative">
            <li><i className="bi bi-dash-circle-fill"></i> Your use of the Service</li>
            <li><i className="bi bi-dash-circle-fill"></i> Your violation of these Terms</li>
            <li><i className="bi bi-dash-circle-fill"></i> Your violation of any law or third-party rights</li>
          </ul>
        </>
      )
    },
    {
      id: "third-party",
      title: "Third-Party Links",
      icon: "🔗",
      content: (
        <>
          <p>The Service may include links to third-party websites.</p>
          <p>Paydaytodaycash does not control or endorse third-party content or services.</p>
        </>
      )
    },
    {
      id: "arbitration-detail",
      title: "Binding Arbitration & Class Action Waiver",
      icon: "⚖️",
      content: (
        <>
          <p>Any dispute arising from or relating to these Terms or the Service shall be resolved exclusively through binding arbitration, governed by the Federal Arbitration Act, administered by the American Arbitration Association (AAA).</p>
          <p>You agree:</p>
          <ul className="section-list">
            <li><i className="bi bi-dash-circle-fill"></i> No class actions</li>
            <li><i className="bi bi-dash-circle-fill"></i> No representative claims</li>
            <li><i className="bi bi-check-circle-fill"></i> Arbitration on an individual basis only</li>
          </ul>
          <p>You may pursue qualifying claims in small-claims court.</p>
        </>
      )
    },
    {
      id: "governing",
      title: "Governing Law",
      icon: "🏛️",
      content: (
        <>
          <p>These Terms are governed by the laws of the United States and the applicable state, without regard to conflict-of-law principles.</p>
        </>
      )
    },
    {
      id: "updates",
      title: "Changes to These Terms",
      icon: "📝",
      content: (
        <>
          <p>We may update these Terms at any time by posting changes on the Site.</p>
          <p>Continued use of the Service constitutes acceptance of the revised Terms.</p>
        </>
      )
    }
  ];

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="terms-page">
      {/* Hero Section - Matching other pages */}
      <section className="terms-hero">
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
                  <i className="bi bi-file-text"></i>
                  Legal
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  Terms and <span className="highlight">Conditions</span>
                </h1>
                <div className="terms-meta wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
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

      {/* Introduction Card - Matching other pages */}
      <section className="terms-intro">
        <div className="container">
          <div className="intro-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="intro-icon">
              <i className="bi bi-building"></i>
            </div>
            <div className="intro-content">
              <p>
                <strong>Paydaytodaycash.com</strong> and its owner and operator ("Paydaytodaycash," "we," "us," or "our") provide loan referral and lead-generation services through our website at <strong>www.paydaytodaycash.com</strong> (the "Site") and related technologies (the "Service").
              </p>
              <div className="intro-highlight">
                <i className="bi bi-info-circle-fill"></i>
                <p>By accessing or using any part of the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions of Use ("Terms").</p>
              </div>
              <div className="intro-warning">
                <i className="bi bi-exclamation-triangle-fill"></i>
                <p>If you do not agree to these Terms, you must not use the Service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Style Accordion - Matching FAQ page */}
      <section className="terms-accordion-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="terms-accordion wow fadeInUp" data-wow-duration="0.8s">
                {sections.map((section, index) => (
                  <div 
                    key={section.id} 
                    className={`terms-item ${activeIndex === index ? 'active' : ''}`}
                  >
                    <button 
                      className="terms-question"
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
                    
                    <div className={`terms-answer ${activeIndex === index ? 'open' : ''}`}>
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

      {/* Contact Section - Matching other pages */}
      <section className="terms-contact">
        <div className="container">
          <div className="contact-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <h3 className="contact-title">Have Questions About Our Terms?</h3>
                <p className="contact-text">
                  Our support team is here to help you understand our terms and conditions. Reach out anytime.
                </p>
                <div className="contact-details">
                  <div className="contact-row">
                    <i className="bi bi-globe"></i>
                    <span>www.paydaytodaycash.com</span>
                  </div>
                  <div className="contact-row">
                    <i className="bi bi-envelope"></i>
                    <a href="mailto:contact@paydaytodaycash.com">contact@paydaytodaycash.com</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="contact-illustration">
                  <i className="bi bi-file-earmark-text"></i>
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

      {/* Final CTA - Matching other pages */}
      <section className="terms-cta">
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

export default TermsClient;