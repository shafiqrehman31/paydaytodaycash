"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BeforeYouApplyClient = () => {
  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const importantPoints = [
    {
      icon: "⚠️",
      title: "If You Pay Late or Miss Payments",
      content: (
        <>
          <p>When you accept a loan, you agree to pay it back:</p>
          <ul className="check-list">
            <li><i className="bi bi-clock"></i> On time</li>
            <li><i className="bi bi-percent"></i> With interest</li>
            <li><i className="bi bi-calendar-check"></i> According to the repayment schedule set by the lender</li>
          </ul>
          
          <div className="warning-box">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <div>
              <p className="warning-title">If you pay late, miss a payment, or don't repay the loan, the lender may charge:</p>
              <ul className="penalty-list">
                <li><span className="penalty-badge">Late fees</span></li>
                <li><span className="penalty-badge">Penalties</span></li>
                <li><span className="penalty-badge">Additional interest</span></li>
              </ul>
            </div>
          </div>
          
          <div className="important-note">
            <i className="bi bi-info-circle-fill"></i>
            <p><strong>Paydaytodaycash is not a lender,</strong> and we do not control loan fees, penalties, or repayment rules. Always read the lender's loan agreement carefully so you know what happens if a payment is late or missed.</p>
          </div>
        </>
      )
    },
    {
      icon: "📊",
      title: "How Your Credit Score May Be Affected",
      content: (
        <>
          <p>Lenders may check your credit to decide whether to offer you a loan.</p>
          
          <div className="credit-check-grid">
            <div className="credit-card soft">
              <div className="credit-icon">
                <i className="bi bi-check-circle"></i>
              </div>
              <h4>Soft Credit Check</h4>
              <p>Some lenders use a soft credit check, which <strong>does not affect</strong> your credit score.</p>
            </div>
            
            <div className="credit-card hard">
              <div className="credit-icon">
                <i className="bi bi-exclamation-triangle"></i>
              </div>
              <h4>Hard Credit Check</h4>
              <p>If you move forward with a loan, the lender may perform a hard credit check, which <strong>can affect</strong> your credit score.</p>
            </div>
          </div>
          
          <div className="impact-note">
            <i className="bi bi-graph-down-arrow"></i>
            <p>Missing or late payments can also hurt your credit score and stay on your credit report.</p>
          </div>
        </>
      )
    },
    {
      icon: "💰",
      title: "Debt Collection",
      content: (
        <>
          <div className="collection-box">
            <div className="collection-icon">
              <i className="bi bi-telephone-x"></i>
            </div>
            <div className="collection-content">
              <p><strong>Paydaytodaycash does not collect payments</strong> and does not handle debt collection.</p>
              <p>If you do not repay your loan, the lender may contact you to collect the debt. The lender's collection rules will be explained in your loan agreement.</p>
              <div className="contact-lender">
                <i className="bi bi-chat-dots"></i>
                <span>If you have questions about payments or collections, contact your lender directly.</span>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      icon: "⏱️",
      title: "How Long It Takes to Get Your Money",
      content: (
        <>
          <p>If a lender approves your loan, the time it takes to receive funds can vary.</p>
          
          <div className="funding-factors">
            <h4>It depends on:</h4>
            <div className="factors-grid">
              <div className="factor-item">
                <i className="bi bi-bank"></i>
                <span>The lender</span>
              </div>
              <div className="factor-item">
                <i className="bi bi-credit-card"></i>
                <span>Your bank</span>
              </div>
              <div className="factor-item">
                <i className="bi bi-clock"></i>
                <span>The day and time of approval</span>
              </div>
            </div>
          </div>
          
          <div className="funding-note">
            <i className="bi bi-info-circle"></i>
            <p><strong>Paydaytodaycash does not control funding times.</strong></p>
          </div>
        </>
      )
    },
    {
      icon: "🏦",
      title: "Our Role",
      content: (
        <>
          <div className="role-box">
            <p className="role-highlight">Paydaytodaycash helps connect you with lenders — <strong>we do not provide loans.</strong></p>
            
            <div className="role-list">
              <div className="role-item">
                <i className="bi bi-x-circle"></i>
                <span>We do not decide who gets approved</span>
              </div>
              <div className="role-item">
                <i className="bi bi-x-circle"></i>
                <span>We do not set loan terms</span>
              </div>
              <div className="role-item">
                <i className="bi bi-x-circle"></i>
                <span>We do not control interest rates or fees</span>
              </div>
            </div>
            
            <div className="role-conclusion">
              <i className="bi bi-arrow-right-circle"></i>
              <p>All loan decisions and terms come directly from the lender.</p>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <main className="before-you-apply-page">
      {/* Hero Section */}
      <section className="before-hero">
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
                  <i className="bi bi-info-circle"></i>
                  Important Information
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  Before You <span className="highlight">Apply</span>
                </h1>
                <p className="hero-description wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  Taking out a loan is a serious financial decision. Before you accept any loan offer, make sure you understand how it works and what could happen if you don't follow the loan terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Points Cards */}
      <section className="important-points-section">
        <div className="container">
          <div className="row g-4">
            {importantPoints.map((point, index) => (
              <div key={index} className="col-12">
                <div className="point-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay={`${index * 0.1}s`}>
                  <div className="point-header">
                    <span className="point-icon">{point.icon}</span>
                    <h2 className="point-title">{point.title}</h2>
                  </div>
                  <div className="point-content">
                    {point.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Reminder */}
      <section className="final-reminder">
        <div className="container">
          <div className="reminder-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="reminder-icon">
              <i className="bi bi-exclamation-diamond"></i>
            </div>
            <div className="reminder-content">
              <h3>Always Read Your Loan Agreement</h3>
              <p>Before signing any loan agreement, take time to read all terms and conditions. Make sure you understand the interest rate, fees, repayment schedule, and what happens if you miss a payment.</p>
              <p className="reminder-note">If something isn't clear, ask your lender before you agree.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="before-contact">
        <div className="container">
          <div className="contact-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <h3 className="contact-title">Have Questions?</h3>
                <p className="contact-text">
                  If you have questions about the loan process or need help understanding your options, our team is here to help.
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

      {/* Final CTA */}
      <section className="before-cta">
        <div className="container">
          <div className="cta-card">
            <div className="row align-items-center">
              <div className="col-12 col-lg-8">
                <h2 className="cta-title">Ready to check your rate?</h2>
                <p className="cta-text">No impact on your credit score — see your options in minutes.</p>
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

export default BeforeYouApplyClient;