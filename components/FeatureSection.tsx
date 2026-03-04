"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeatureSection = () => {
  useEffect(() => {
    // Initialize any animations if needed
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <section className="feature-section section">
      {/* Background decorations */}
      <div className="animation">
        <Image src="/images/hero_vector_dollar.png" alt="" width={50} height={50} />
        <Image src="/images/hero_vector_message.png" alt="" width={50} height={50} />
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-lg-6">
            <div className="feature-content">
              <span className="feature-sub-title headingFour wow fadeInDown" data-wow-duration="0.8s">
                <Image src="/images/title_vector.png" alt="vector" width={20} height={20} /> 
                Why Choose Paydaytodaycash
              </span>
              
              <h2 className="feature-title wow fadeInUp" data-wow-duration="0.8s">
                Instant Loans, <span className="highlight">No Waiting</span>
              </h2>
              
              <p className="feature-description wow fadeInDown" data-wow-duration="0.8s">
                Our network includes lenders that may offer options based on your needs. 
                Paydaytodaycash is your ideal partner in finding loans when you need them most.
              </p>
              
              <p className="feature-description wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.1s">
                Compare lenders, understand costs, and choose the offer that fits you best.
              </p>

              {/* Feature Icons Grid */}
              <div className="feature-grid wow fadeInUp" data-wow-duration="0.8s">
                <div className="feature-grid-item">
                  <div className="feature-icon">
                    <i className="bi bi-credit-card"></i>
                  </div>
                  <div className="feature-text">
                    <h4>Bad credit OK</h4>
                    <p>Options for many credit profiles.</p>
                  </div>
                </div>

                <div className="feature-grid-item">
                  <div className="feature-icon">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <div className="feature-text">
                    <h4>Start online</h4>
                    <p>Apply quickly, compare offers.</p>
                  </div>
                </div>

                <div className="feature-grid-item">
                  <div className="feature-icon">
                    <i className="bi bi-cash-stack"></i>
                  </div>
                  <div className="feature-text">
                    <h4>Withdraw cash in your A/c</h4>
                    <p>Fast funding options available.</p>
                  </div>
                </div>

                <div className="feature-grid-item">
                  <div className="feature-icon">
                    <i className="bi bi-globe"></i>
                  </div>
                  <div className="feature-text">
                    <h4>Global Presence</h4>
                    <p>Wide U.S. Lender Network</p>
                  </div>
                </div>
              </div>

              <div className="feature-cta wow fadeInUp" data-wow-duration="0.8s">
                <Link href="/contact" className="btn_theme btn_theme_active">
                  Get Started <i className="bi bi-arrow-up-right"></i><span></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image/Phone */}
          <div className="col-12 col-lg-6">
            <div className="feature-image wow fadeInRight" data-wow-duration="0.8s">
              <div className="phone-mockup">
                <Image 
                  src="/images/3.png" 
                  alt="Paydaytodaycash " 
                  width={500} 
                  height={600}
                  className="img-fluid"
                />
                {/* If you don't have a phone image, use this gradient circle instead */}
               
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="floating-badge badge-1">
                <i className="bi bi-check-circle-fill"></i>
                <span>Fast Approval</span>
              </div>
              <div className="floating-badge badge-2">
                <i className="bi bi-shield-check"></i>
                <span>Secure</span>
              </div>
              <div className="floating-badge badge-3">
                <i className="bi bi-clock"></i>
                <span>24hr Funding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;