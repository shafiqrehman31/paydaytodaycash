"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StepsSection = () => {
  useEffect(() => {
    // Initialize any animations if needed
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <section className="steps-section section">
      {/* Background decorations */}
      <div className="animation">
        <Image src="/images/hero_vector_dollar.png" alt="" width={50} height={50} />
        <Image src="/images/hero_vector_message.png" alt="" width={50} height={50} />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xxl-7">
            <div className="section__header">
              <span className="section__header-sub-title headingFour wow fadeInDown" data-wow-duration="0.8s">
                <Image src="/images/title_vector.png" alt="vector" width={20} height={20} /> 
                3 Simple Steps to Your Funds
              </span>
              <h2 className="section__header-title wow fadeInUp" data-wow-duration="0.8s">
                Get Cash When You Need It Most
              </h2>
              <p className="section__header-content wow fadeInDown" data-wow-duration="0.8s">
                We believe getting a loan shouldn't be complicated or stressful. That's why we've created a simple, 
                transparent process that puts you in control every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Cards */}
        <div className="row g-4 justify-content-center">
          {/* Step 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="step-card wow fadeInUp" data-wow-duration="0.8s">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">See Your Rate in Minutes</h3>
                <p className="step-description">
                  Just answer a few quick questions about yourself and how much you need. We'll check your information 
                  instantly and let you know if you pre-qualify.
                </p>
                
                <div className="step-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Won't affect your credit score — we use a soft credit check</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>See potential offers in as little as 2 minutes</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Your information is protected with bank-level security</span>
                  </div>
                </div>

                <div className="step-action">
                  <Link href="/contact" className="btn_theme btn_theme_active step-btn">
                    Check My Rate <i className="bi bi-arrow-up-right"></i><span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="step-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Choose What Works for You</h3>
                <p className="step-description">
                  If we find a match, we'll show you the loan details side-by-side. Take your time reading through the 
                  terms — there's no pressure to accept anything that doesn't feel right.
                </p>
                
                <div className="step-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Compare offers from multiple lenders at once</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Pick payment terms that fit your budget</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Questions? Our team is here to help, not hard-sell you</span>
                  </div>
                </div>

                <div className="step-action">
                  <Link href="/contact" className="btn_theme step-btn">
                    See My Options <i className="bi bi-arrow-up-right"></i><span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="step-card wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Get Your Money Fast</h3>
                <p className="step-description">
                  Once you're happy with your choice, sign the paperwork online from anywhere — your phone, tablet, 
                  or computer. Most people see the money in their account the next business day.
                </p>
                
                <div className="step-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Money sent straight to your checking or savings account</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Funds often available by the next morning</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Check your balance anytime through your online account</span>
                  </div>
                </div>

                <div className="step-action">
                  <Link href="/contact" className="btn_theme step-btn">
                    Track My Funds <i className="bi bi-arrow-up-right"></i><span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-8">
            <div className="steps-cta wow fadeInUp" data-wow-duration="0.8s">
              <div className="cta-content">
                <h3 className="cta-title">Why wait? Your money could be just a few clicks away</h3>
                <p className="cta-text">
                  Join over 50,000 US Citizen who've used Paydaytodaycash to find the funds they needed, when they needed them most. No surprises, no hidden fees — just honest help.
                </p>
                <Link href="/contact" className="btn_theme btn_theme_active cta-button">
                  Start My Application <i className="bi bi-arrow-up-right"></i><span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;