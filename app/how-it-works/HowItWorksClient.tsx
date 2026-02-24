"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HowItWorksClient = () => {
  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <main className="how-it-works-page">
      {/* Hero Section */}
      <section className="how-hero">
        <div className="hero-pattern">
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
        </div>
        
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-12 col-lg-8 mx-auto text-center">
              <div className="hero-content">
                <span className="hero-subtitle wow fadeInUp" data-wow-duration="0.8s">
                  <i className="bi bi-gear"></i>
                  How it works
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  From Request to Funds: <span className="highlight">The Full Process</span>
                </h1>
                <p className="hero-description wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  We've designed our process to remove stress and confusion from borrowing. Everything is handled online, securely, and in just a few easy steps.
                </p>
                <p className="hero-sub-description wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  From checking your rate to receiving funds, the entire journey is built to save you time and effort.
                </p>
                <div className="hero-cta wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                  <Link href="/contact" className="btn_theme btn_theme_active">
                    Check My Rate <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Overview */}
      <section className="process-overview">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-3">
              <div className="overview-card wow fadeInUp" data-wow-duration="0.8s">
                <div className="overview-number">1</div>
                <div className="overview-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
                <h3 className="overview-title">The Secure Request</h3>
                <p className="overview-text">Complete our streamlined online form. It takes less than 5 minutes.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-3">
              <div className="overview-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                <div className="overview-number">2</div>
                <div className="overview-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h3 className="overview-title">The Match</h3>
                <p className="overview-text">Our Ping-Tree technology securely matches you with lenders instantly.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-3">
              <div className="overview-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <div className="overview-number">3</div>
                <div className="overview-icon">
                  <i className="bi bi-pencil-square"></i>
                </div>
                <h3 className="overview-title">Review & E-Sign</h3>
                <p className="overview-text">Review the offer, accept or decline, then e-sign securely if it works for you.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-3">
              <div className="overview-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <div className="overview-number">4</div>
                <div className="overview-icon">
                  <i className="bi bi-cash-stack"></i>
                </div>
                <h3 className="overview-title">Funding</h3>
                <p className="overview-text">Funds available as fast as the next business day.</p>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12">
              <div className="success-badge wow fadeInUp" data-wow-duration="0.8s">
                <i className="bi bi-check-circle-fill"></i>
                <span>Your request has been matched — Funds available next business day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="detailed-steps">
        <div className="container">
          {/* Step 1 */}
          <div className="step-detailed-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="row align-items-center">
              <div className="col-12 col-lg-5">
                <div className="step-content">
                  <div className="step-badge">Step 1</div>
                  <h2 className="step-title">The Secure Request</h2>
                  <p className="step-description">Complete our streamlined online form. It takes less than 5 minutes.</p>
                  
                  <div className="step-requirements">
                    <h4>What we need:</h4>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Basic identity information (Name, Address)</span>
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Income source (Employment, Benefits, or Self-Employed)</span>
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Banking details (Where you want the money sent)</span>
                      </li>
                    </ul>
                    <div className="step-note">
                      <i className="bi bi-info-circle-fill"></i>
                      <span>Note: Providing your SSN is required for identity verification and fraud prevention.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="step-visual">
                  <div className="form-mockup">
                    <div className="form-field">
                      <span className="field-label">Full Name</span>
                      <span className="field-value">John Smith</span>
                    </div>
                    <div className="form-field">
                      <span className="field-label">Address</span>
                      <span className="field-value">123 Main St</span>
                    </div>
                    <div className="form-field">
                      <span className="field-label">Income Source</span>
                      <span className="field-value">Employed</span>
                    </div>
                    <div className="form-field highlight">
                      <span className="field-label">Bank Account</span>
                      <span className="field-value">•••• 4567</span>
                    </div>
                    <div className="progress-indicator">
                      <div className="progress-step active"></div>
                      <div className="progress-step"></div>
                      <div className="progress-step"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-detailed-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-12 col-lg-5">
                <div className="step-content">
                  <div className="step-badge">Step 2</div>
                  <h2 className="step-title">The Match</h2>
                  <p className="step-description">Once you click "Submit," our Ping-Tree technology instantly securely shares your anonymous profile with our lender network.</p>
                  
                  <div className="step-requirements">
                    <h4>How it works:</h4>
                    <ul>
                      <li>
                        <i className="bi bi-lightning-charge-fill"></i>
                        <span>Lenders compete to accept your request.</span>
                      </li>
                      <li>
                        <i className="bi bi-arrow-left-right"></i>
                        <span>If a lender accepts, you are instantly redirected to their secure page.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="step-visual">
                  <div className="network-mockup">
                    <div className="network-center">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <div className="network-nodes">
                      <div className="node"></div>
                      <div className="node"></div>
                      <div className="node"></div>
                      <div className="node"></div>
                      <div className="node"></div>
                    </div>
                    <div className="ping-animation">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-detailed-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
            <div className="row align-items-center">
              <div className="col-12 col-lg-5">
                <div className="step-content">
                  <div className="step-badge">Step 3</div>
                  <h2 className="step-title">Review & E-Sign</h2>
                  <p className="step-description">You will see the specific offer from the lender. This includes:</p>
                  
                  <div className="step-requirements">
                    <h4>Your offer includes:</h4>
                    <ul>
                      <li>
                        <i className="bi bi-percent"></i>
                        <span>The exact interest rate (APR).</span>
                      </li>
                      <li>
                        <i className="bi bi-calendar-check"></i>
                        <span>The repayment schedule (e.g., "Pay $120 every two weeks").</span>
                      </li>
                      <li>
                        <i className="bi bi-x-circle"></i>
                        <span>You have the right to decline. If the terms don't work for you, simply close the window.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="step-visual">
                  <div className="offer-mockup">
                    <div className="offer-header">
                      <span className="lender-name">QuickLend</span>
                      <span className="offer-badge">Approved</span>
                    </div>
                    <div className="offer-details">
                      <div className="offer-row">
                        <span>Loan Amount</span>
                        <span className="offer-value">$2,500</span>
                      </div>
                      <div className="offer-row">
                        <span>APR</span>
                        <span className="offer-value highlight">16.99%</span>
                      </div>
                      <div className="offer-row">
                        <span>Monthly Payment</span>
                        <span className="offer-value">$126.89</span>
                      </div>
                      <div className="offer-row">
                        <span>Term</span>
                        <span className="offer-value">24 months</span>
                      </div>
                    </div>
                    <div className="offer-actions">
                      <button className="btn-accept">Accept & E-Sign</button>
                      <button className="btn-decline">Decline</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="step-detailed-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-12 col-lg-5">
                <div className="step-content">
                  <div className="step-badge">Step 4</div>
                  <h2 className="step-title">Funding & Repayment</h2>
                  <p className="step-description">If you sign the digital agreement:</p>
                  
                  <div className="step-requirements">
                    <h4>What happens next:</h4>
                    <ul>
                      <li>
                        <i className="bi bi-bank2"></i>
                        <span><strong>Funding:</strong> Most lenders initiate the transfer immediately. Depending on your bank, funds are usually available the next business morning.</span>
                      </li>
                      <li>
                        <i className="bi bi-arrow-repeat"></i>
                        <span><strong>Repayment:</strong> Payments are typically set up as automatic deductions from the same bank account, so you never miss a due date.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="step-visual">
                  <div className="funding-mockup">
                    <div className="bank-row">
                      <i className="bi bi-bank"></i>
                      <div className="bank-detail">
                        <span className="bank-name">Lender</span>
                        <span className="bank-amount">$2,500</span>
                      </div>
                    </div>
                    <div className="arrow-down">
                      <i className="bi bi-arrow-down"></i>
                    </div>
                    <div className="bank-row highlight">
                      <i className="bi bi-wallet2"></i>
                      <div className="bank-detail">
                        <span className="bank-name">Your Account</span>
                        <span className="bank-amount success">$2,500</span>
                      </div>
                    </div>
                    <div className="time-indicator">
                      <i className="bi bi-clock"></i>
                      <span>Next business day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <span className="section-subtitle">Am I Eligible?</span>
              <h2 className="section-title">Personal Loan Requirements</h2>
            </div>
          </div>
          
          <div className="row g-4 mt-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="eligibility-card wow fadeInUp" data-wow-duration="0.8s">
                <div className="card-icon">
                  <i className="bi bi-person-badge"></i>
                </div>
                <h3 className="card-title">Age/ID/Residency</h3>
                <p className="card-text">You must be at least 18 years old, provide proof of citizenship, and have a valid SSN.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-3">
              <div className="eligibility-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                <div className="card-icon">
                  <i className="bi bi-cash-stack"></i>
                </div>
                <h3 className="card-title">Income</h3>
                <p className="card-text">You must have regular income from employment, self-employment, disability, or Social Security.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-3">
              <div className="eligibility-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <div className="card-icon">
                  <i className="bi bi-bank"></i>
                </div>
                <h3 className="card-title">Bank Account</h3>
                <p className="card-text">You must hold a valid checking account for direct deposit.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-3">
              <div className="eligibility-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <div className="card-icon">
                  <i className="bi bi-star"></i>
                </div>
                <h3 className="card-title">Credit Type</h3>
                <p className="card-text">Good credit is not required — lower scores may still qualify.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="benefits-grid-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <div className="benefits-header">
                <span className="benefits-subtitle">Eligibility</span>
                <h2 className="benefits-title">No hidden fees and zero obligation.</h2>
                <p className="benefits-description">It only takes a few minutes to get a loan decision.</p>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="benefits-grid">
                <div className="benefit-grid-item wow fadeInUp" data-wow-duration="0.8s">
                  <i className="bi bi-cash"></i>
                  <span>No fees — our service is free.</span>
                </div>
                <div className="benefit-grid-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  <i className="bi bi-clock"></i>
                  <span>Hassle-free — apply and get results fast.</span>
                </div>
                <div className="benefit-grid-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  <i className="bi bi-x-circle"></i>
                  <span>No obligation — view offers without commitment.</span>
                </div>
                <div className="benefit-grid-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <i className="bi bi-people"></i>
                  <span>All credit types — everyone is considered.</span>
                </div>
                <div className="benefit-grid-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                  <i className="bi bi-send"></i>
                  <span>Quick transfer — direct funding to your bank.</span>
                </div>
                <div className="benefit-grid-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                  <i className="bi bi-calendar-check"></i>
                  <span>Flexible terms — repay the easy way.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="how-cta">
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

export default HowItWorksClient;