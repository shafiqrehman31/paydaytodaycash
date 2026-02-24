"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-pattern">
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
          <div className="pattern-circle"></div>
        </div>
        
        <div className="container">
          <div className="row align-items-center min-vh-40">
            <div className="col-12 col-lg-8 mx-auto text-center">
              <div className="hero-content">
                <span className="hero-subtitle wow fadeInUp" data-wow-duration="0.8s">
                  <i className="bi bi-envelope-paper"></i>
                  Contact Us
                </span>
                <h1 className="hero-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                  We Are <span className="highlight">Here To Help</span>
                </h1>
                <p className="hero-description wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  Have a question about how our service works? Our support team is ready to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="contact-note-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="note-card wow fadeInUp" data-wow-duration="0.8s">
                <div className="note-icon">
                  <i className="bi bi-exclamation-triangle-fill"></i>
                </div>
                <div className="note-content">
                  <h3 className="note-title">Important Note</h3>
                  <p className="note-text">
                    If you have questions about an existing loan, repayment, or collections, you must contact your lender directly, as we do not have access to your loan details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-12 col-lg-7">
              <div className="form-card wow fadeInLeft" data-wow-duration="0.8s">
                <div className="form-header">
                  <h2 className="form-title">Send us a Message</h2>
                  <p className="form-subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                {submitSuccess && (
                  <div className="success-message">
                    <i className="bi bi-check-circle-fill"></i>
                    <div>
                      <h4>Message Sent!</h4>
                      <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                    <button className="close-success" onClick={() => setSubmitSuccess(false)}>
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="bi bi-person"></i>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="bi bi-envelope"></i>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="bi bi-telephone"></i>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <i className="bi bi-chat-dots"></i>
                      Write your message...
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you today?"
                      rows={5}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="bi bi-arrow-right"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-12 col-lg-5">
              <div className="info-card wow fadeInRight" data-wow-duration="0.8s">
                <div className="info-header">
                  <i className="bi bi-info-circle-fill"></i>
                  <h3>Contact Information</h3>
                </div>

                <div className="info-content">
                  {/* Email */}
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="info-details">
                      <span className="info-label">Email Us</span>
                      <a href="mailto:contact@paydaytodaycash.com" className="info-value">
                        contact@paydaytodaycash.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}


                  {/* Office Address */}
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="bi bi-building"></i>
                    </div>
                    <div className="info-details">
                      <span className="info-label">Office</span>
                      <address className="info-value">
                        67 Albion Street, Leeds, England LS1 5AA<br />
                      </address>
                    </div>
                  </div>

                  {/* Map/Illustration */}


                  {/* Business Hours */}
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="contact-faq">
        <div className="container">
          <div className="faq-quick-card wow fadeInUp" data-wow-duration="0.8s">
            <div className="row align-items-center">
              <div className="col-12 col-lg-8">
                <div className="faq-quick-content">
                  <h3>Looking for quick answers?</h3>
                  <p>Check our Frequently Asked Questions section for instant answers to common questions.</p>
                </div>
              </div>
              <div className="col-12 col-lg-4 text-lg-end">
                <Link href="/faq" className="btn_theme">
                  Visit FAQ <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-cta">
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

export default ContactClient;