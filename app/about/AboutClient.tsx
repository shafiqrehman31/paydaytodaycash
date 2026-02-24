"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutClient = () => {
  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-pattern">
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
        </div>
        
        <div className="container">
          <div className="row align-items-center min-vh-60">
            <div className="col-12 col-lg-6">
              <div className="hero-content">
                <span className="hero-subtitle wow fadeInUp" data-wow-duration="0.8s">
                  <i className="bi bi-star"></i>
                  About Us
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  We Make Borrowing <span className="highlight">Simple, Fast,</span> and Transparent.
                </h1>
                <p className="hero-description wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  At Paydaytodaycash, we believe that financial emergencies shouldn't be complicated. Whether you need $200 for a repair or $5,000 for a project, the process should be accessible, dignified, and secure.
                </p>
                <div className="hero-cta wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <Link href="/contact" className="btn_theme btn_theme_active">
                    Check My Rate <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <span className="cta-note">No hidden fees or upfront costs</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="hero-stats-card wow fadeInRight" data-wow-duration="0.8s">
                <div className="stats-grid">
                  <div className="stat-item-large">
                    <span className="stat-value">$200</span>
                    <span className="stat-label">to</span>
                    <span className="stat-value">$5,000</span>
                    <p className="stat-desc">Loan amounts for any need</p>
                  </div>
                  <div className="stat-features">
                    <div className="feature-badge">
                      <i className="bi bi-shield-check"></i>
                      <span>No hidden fees</span>
                    </div>
                    <div className="feature-badge">
                      <i className="bi bi-credit-card"></i>
                      <span>Complete transparency</span>
                    </div>
                  </div>
                </div>
                
                {/* App Preview Mockup */}
                <div className="app-preview">
                  <div className="phone-mockup">
                    <div className="mockup-screen">
                      <div className="mockup-header">
                        <span className="mockup-title">Loan Calculator</span>
                      </div>
                      <div className="mockup-content">
                        <div className="mockup-row">
                          <span>Loan Amount</span>
                          <span className="mockup-value">$2,500</span>
                        </div>
                        <div className="mockup-row">
                          <span>Interest Rate</span>
                          <span className="mockup-value">16.0%</span>
                        </div>
                        <div className="mockup-row highlight">
                          <span>Monthly Payment</span>
                          <span className="mockup-value">$126.89</span>
                        </div>
                        <div className="mockup-progress">
                          <div className="progress-bar" style={{ width: '70%' }}></div>
                        </div>
                        <div className="mockup-button"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="value-props">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="value-card wow fadeInUp" data-wow-duration="0.8s">
                <div className="value-icon">
                  <i className="bi bi-percent"></i>
                </div>
                <h3 className="value-title">No hidden fees</h3>
                <p className="value-text">No hidden fees or upfront costs — complete transparency from start to finish.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-4">
              <div className="value-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                <div className="value-icon">
                  <i className="bi bi-credit-card-2-front"></i>
                </div>
                <h3 className="value-title">No credit impact</h3>
                <p className="value-text">Checking your rate has no impact on your credit score.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-4">
              <div className="value-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <div className="value-icon">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <h3 className="value-title">Fast & simple</h3>
                <p className="value-text">Apply in minutes and receive personalized loan offers quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="section-header left-aligned">
                <span className="section-subtitle">What We Do</span>
                <h2 className="section-title">We find the best lenders</h2>
                <p className="section-description">
                  We are a technology company, not a bank. We operate a specialized search engine that connects borrowers with a network of trusted US-based lenders.
                </p>
              </div>
              
              <div className="benefits-list">
                <div className="benefit-item wow fadeInLeft" data-wow-duration="0.8s">
                  <div className="benefit-icon">
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>We save you time</h4>
                    <p>Instead of filling out forms on ten different sites, you fill out one form with us.</p>
                  </div>
                </div>
                
                <div className="benefit-item wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  <div className="benefit-icon">
                    <i className="bi bi-emoji-smile"></i>
                  </div>
                  <div className="benefit-content">
                    <h4>We save you stress</h4>
                    <p>We filter through lenders to find the one most likely to approve you.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-lg-6">
              <div className="lender-grid wow fadeInRight" data-wow-duration="0.8s">
                <div className="lender-card">
                  <i className="bi bi-bank2"></i>
                  <span>Trusted Lenders</span>
                </div>
                <div className="lender-card">
                  <i className="bi bi-shield-check"></i>
                  <span>Secure Matching</span>
                </div>
                <div className="lender-card">
                  <i className="bi bi-arrow-repeat"></i>
                  <span>Quick Process</span>
                </div>
                <div className="lender-card">
                  <i className="bi bi-cash-stack"></i>
                  <span>Up to $35,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="process-steps">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <span className="section-subtitle">How It Works</span>
              <h2 className="section-title">We make it really simple</h2>
              <p className="section-description">
                Apply online in minutes at a time that suits your schedule.
              </p>
            </div>
          </div>
          
          <div className="row g-4 mt-4">
            <div className="col-12 col-md-4">
              <div className="process-card wow fadeInUp" data-wow-duration="0.8s">
                <div className="process-number">1</div>
                <div className="process-icon">
                  <i className="bi bi-file-text"></i>
                </div>
                <h3 className="process-title">Apply Online</h3>
                <p className="process-text">Fill out one simple form in minutes from any device.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-4">
              <div className="process-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                <div className="process-number">2</div>
                <div className="process-icon">
                  <i className="bi bi-arrow-left-right"></i>
                </div>
                <h3 className="process-title">Get Matched</h3>
                <p className="process-text">We connect you with lenders who fit your unique situation.</p>
              </div>
            </div>
            
            <div className="col-12 col-md-4">
              <div className="process-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <div className="process-number">3</div>
                <div className="process-icon">
                  <i className="bi bi-cash"></i>
                </div>
                <h3 className="process-title">Get Funds</h3>
                <p className="process-text">Receive money directly to your account as fast as next day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="values-grid">
                <div className="value-item wow fadeInUp" data-wow-duration="0.8s">
                  <div className="value-header">
                    <i className="bi bi-rocket-takeoff"></i>
                    <h3>Speed</h3>
                  </div>
                  <p>We know that when you need money, you usually need it now. Our system processes requests in milliseconds.</p>
                </div>
                
                <div className="value-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  <div className="value-header">
                    <i className="bi bi-shield-lock"></i>
                    <h3>Security</h3>
                  </div>
                  <p>We treat your data with the same security standards as a major financial institution.</p>
                </div>
                
                <div className="value-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  <div className="value-header">
                    <i className="bi bi-people"></i>
                    <h3>Inclusivity</h3>
                  </div>
                  <p>We believe a credit score doesn't tell your whole story. Our network includes lenders who help people rebuild their financial health.</p>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-card">
            <div className="row align-items-center">
              <div className="col-12 col-lg-8">
                <h2 className="cta-title">Ready to get started?</h2>
                <p className="cta-text">Check your rate in minutes with no impact on your credit score.</p>
              </div>
              <div className="col-12 col-lg-4 text-lg-end">
                <Link href="/contact" className="btn_theme btn_theme_active cta-button">
                  Get Started Now <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutClient;