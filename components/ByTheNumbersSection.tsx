"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ByTheNumbersSection = () => {
  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  // Updated content with point #6
  const whyChooseUs = [
    {
      icon: "bi-shield-check",
      title: "Secure & Encrypted Application",
      description: "Your information is protected with advanced SSL security.",
      color: "primary"
    },
    {
      icon: "bi-clock",
      title: "Fast Online Process",
      description: "Complete the form in minutes — no paperwork required.",
      color: "accent"
    },
    {
      icon: "bi-x-circle",
      title: "No Obligation",
      description: "Review offers before deciding. You're not required to accept anything.",
      color: "secondary"
    },
    {
      icon: "bi-people",
      title: "All Credit Backgrounds Considered",
      description: "Lenders may review applications from various credit profiles.",
      color: "primary"
    },
    {
      icon: "bi-eye",
      title: "Transparent Terms",
      description: "Loan terms and costs are clearly shown before you agree.",
      color: "accent"
    },
    {
      icon: "bi-lightning-charge",
      title: "Quick Funding Options",
      description: "Receive lender offers fast, with funds available as soon as the next business day.*",
      color: "secondary"
    }
  ];

  return (
    <section className="by-the-numbers-section section">
      {/* Background decoration */}
      <div className="numbers-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xxl-7">
            <div className="section__header text-center">
              <span className="section__header-sub-title headingFour wow fadeInDown" data-wow-duration="0.8s">
                <Image src="/images/title_vector.png" alt="vector" width={20} height={20} />
                Why People Choose Us
              </span>
              <h2 className="section__header-title wow fadeInUp" data-wow-duration="0.8s">
                Thousands Trust <span className="highlight-text">Paydaytodaycash</span>
              </h2>
              <p className="section__header-content wow fadeInDown" data-wow-duration="0.8s">
                Built to help you compare options quickly, safely, and with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Why People Choose Us Cards - Now with 6 items */}
        <div className="row g-4">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className={`stat-card stat-${item.color} wow fadeInUp`} data-wow-duration="0.8s" data-wow-delay={`${index * 0.1}s`}>
                <div className="stat-icon-wrapper">
                  <i className={`bi ${item.icon}`}></i>
                  <div className="icon-ring"></div>
                </div>
                
                <h3 className="stat-title">{item.title}</h3>
                <p className="stat-description">{item.description}</p>
                
                <div className="stat-footer">
                  <span className="stat-number">{index + 1}</span>
                  <div className="stat-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges - Upgraded with emoji icons */}
        <div className="row justify-content-center mt-5">
          <div className="col-12">
            <div className="trust-badges wow fadeInUp" data-wow-duration="0.8s">
              <div className="badge-item">
                <span className="badge-emoji">📝</span>
                <span>10,000+ Applications Processed</span>
              </div>
              <div className="badge-item">
                <span className="badge-emoji">🌎</span>
                <span>Nationwide U.S. Coverage</span>
              </div>
              <div className="badge-item">
                <span className="badge-emoji">🛡</span>
                <span>256-Bit SSL Secured</span>
              </div>
              <div className="badge-item">
                <span className="badge-emoji">⏱</span>
                <span>3-Minute Online Form</span>
              </div>
              <div className="badge-item">
                <span className="badge-emoji">✔</span>
                <span>No Obligation to Accept Offers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Count */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 text-center">
            <p className="customer-note wow fadeInUp" data-wow-duration="0.8s">
              <i className="bi bi-people-fill"></i> 
              Join the thousands of US Citizens who've found the right loan through Paydaytodaycash
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbersSection;