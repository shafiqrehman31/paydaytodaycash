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

  const stats = [
    {
      icon: "bi-shield-lock",
      title: "Secure & Private",
      highlight: "Bank-Level Encryption",
      description: "Your data is protected by 256-bit SSL security and never sold to unauthorized parties.",
      color: "primary"
    },
    {
      icon: "bi-lightning-charge",
      title: "Fast Funding",
      highlight: "Next-Day Availability",
      description: "Many lenders in our network can deposit funds directly to your account by the next business day.",
      color: "accent"
    },
    {
      icon: "bi-people",
      title: "All Credit Types",
      highlight: "Fair Consideration",
      description: "Our lenders look beyond just your credit score. We accept requests from all credit backgrounds.",
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
                By The Numbers
              </span>
              <h2 className="section__header-title wow fadeInUp" data-wow-duration="0.8s">
                Why Thousands Choose <span className="highlight-text">Paydaytodaycash</span>
              </h2>
              <p className="section__header-content wow fadeInDown" data-wow-duration="0.8s">
                Built to help you compare options quickly, safely, and with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className={`stat-card stat-${stat.color} wow fadeInUp`} data-wow-duration="0.8s" data-wow-delay={`${index * 0.15}s`}>
                <div className="stat-icon-wrapper">
                  <i className={`bi ${stat.icon}`}></i>
                  <div className="icon-ring"></div>
                </div>
                
                <h3 className="stat-title">{stat.title}</h3>
                <h4 className="stat-highlight">{stat.highlight}</h4>
                
                <p className="stat-description">{stat.description}</p>
                
                <div className="stat-footer">
                  <span className="stat-number">{index + 1}</span>
                  <div className="stat-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="row justify-content-center mt-5">
          <div className="col-12">
            <div className="trust-badges wow fadeInUp" data-wow-duration="0.8s">
              <div className="badge-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>10,000+ Loans Connected</span>
              </div>
              <div className="badge-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>4.8 ★ Trustpilot Rating</span>
              </div>
              <div className="badge-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>50 State Coverage</span>
              </div>
              <div className="badge-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>BBB Accredited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Count */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 text-center">
            <p className="customer-note wow fadeInUp" data-wow-duration="0.8s">
              <i className="bi bi-people-fill"></i> 
              Join the thousands of Americans who've found the right loan through Paydaytodaycash
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbersSection;