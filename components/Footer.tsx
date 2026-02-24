"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  useEffect(() => {
    // Set current year in copyright
    const yearElement = document.getElementById('copyYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <footer className="footer-premium">
      {/* Wave decoration at top */}
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#074C3E" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="footer-premium-content">
        <div className="container">
          {/* Main Footer - 4 Column Layout */}
          <div className="row g-5">
            {/* Column 1 - Company Info */}
            <div className="col-12 col-lg-4">
              <div className="footer-brand">
                <Link href="/" className="footer-logo-link">
                  <Image 
                    src="/images/logo.png" 
                    alt="Paydaytodaycash" 
                    width={200} 
                    height={70}
                    className="footer-logo"
                  />
                </Link>
                <p className="footer-tagline">
                  Fast, transparent loans when you need them most. Connecting you with trusted lenders since 2020.
                </p>
                
                <div className="footer-contact-info">

                  <div className="contact-item">
                    <i className="bi bi-envelope-fill"></i>
                    <a href="mailto:support@paydaytodaycash.com">support@paydaytodaycash.com</a>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-clock-fill"></i>
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="col-12 col-md-4 col-lg-2">
              <div className="footer-links">
                <h4 className="footer-title">Company</h4>
                <ul className="footer-menu">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/how-it-works">How It Works</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 3 - Legal */}
            <div className="col-12 col-md-4 col-lg-2">
              <div className="footer-links">
                <h4 className="footer-title">Legal</h4>
                <ul className="footer-menu">
                  <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/california-privacy">California Privacy</Link></li>
                  <li><Link href="/before-you-apply">Before You Apply</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 4 - Social & Trust */}
            <div className="col-12 col-md-4 col-lg-4">
              <div className="footer-trust">
                <h4 className="footer-title">Trust & Security</h4>
                
                <div className="trust-badges-grid">
                  <div className="trust-badge-item">
                    <i className="bi bi-shield-check"></i>
                    <span>256-bit SSL</span>
                  </div>
                  <div className="trust-badge-item">
                    <i className="bi bi-lock-fill"></i>
                    <span>Encrypted</span>
                  </div>
                  <div className="trust-badge-item">
                    <i className="bi bi-credit-card"></i>
                    <span>Secure Payment</span>
                  </div>
                  <div className="trust-badge-item">
                    <i className="bi bi-incognito"></i>
                    <span>Privacy First</span>
                  </div>
                </div>

                <div className="footer-social">
                  <h5 className="social-title">Follow Us</h5>
                  <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                      <i className="bi bi-facebook"></i>
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclosures Section - Card Style */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="disclosures-card">
                <div className="disclosure-grid">
                  <div className="disclosure-item-compact">
                    <span className="disclosure-label">Material Disclosure</span>
                    <p className="disclosure-text-compact">Paydaytodaycash is a loan search platform, not a lender. We connect you with lenders offering $100-$5,000 loans.</p>
                  </div>
                  
                  <div className="disclosure-item-compact">
                    <span className="disclosure-label">APR Disclosure</span>
                    <p className="disclosure-text-compact">Representative APRs range from 5.99% to 35.99%. Repayment terms: 61 days to 72 months.</p>
                  </div>
                  
                  <div className="disclosure-item-compact">
                    <span className="disclosure-label">Credit Check</span>
                    <p className="disclosure-text-compact">Lenders may verify SSN and review credit through Equifax, Transunion, and Experian.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Bar */}
          <div className="row">
            <div className="col-12">
              <div className="address-bar">
                <i className="bi bi-geo-alt-fill"></i>
                <span>67 Albion Street, Leeds, England LS1 5AA</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Copyright */}
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-bar">
                <p className="copyright-text">
                  © <span id="copyYear"></span> Paydaytodaycash.com. All rights reserved.
                </p>
                                <p className="copyright-text">
                  Paydaytodaycash is a trading style of GROUND UP (BURY) Private LIMITED.
                </p>

                <div className="bottom-links">
                  <Link href="/sitemap">Sitemap</Link>
                  <span className="separator">|</span>
                  <Link href="/privacy">Privacy</Link>
                  <span className="separator">|</span>
                  <Link href="/terms">Terms</Link>
                  <span className="separator">|</span>
                  <Link href="/cookies">Cookies</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;