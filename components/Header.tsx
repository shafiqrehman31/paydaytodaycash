"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // This ensures Bootstrap dropdowns work with client-side navigation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Bootstrap dropdowns after component mounts
      const initDropdowns = () => {
        const dropdowns = document.querySelectorAll('.dropdown-toggle');
        dropdowns.forEach((dropdown) => {
          dropdown.addEventListener('click', (e) => {
            e.preventDefault();
            const menu = dropdown.nextElementSibling;
            if (menu) {
              menu.classList.toggle('show');
            }
          });
        });
      };
      
      // Small delay to ensure DOM is ready
      setTimeout(initDropdowns, 100);
    }
  }, []);

  return (
    <>
      <header className={`header-section index ${isScrolled ? 'sticky' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-xl nav-shadow" id="#navbar">
                <Link className="navbar-brand" href="/">
                  <Image 
                    src="/images/Payday-Today-Cash.png" 
                    className="logo" 
                    alt="Paydaytodaycash" 
                    width={150} 
                    height={100}
                    priority
                  />
                </Link>
                <button 
                  className="navbar-toggler" 
                  type="button"
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasRight" 
                  aria-controls="offcanvasRight"
                >
                  <i className="bi bi-list"></i>
                </button>

                <div className="collapse navbar-collapse ms-auto" id="navbar-content">
                  <div className="main-menu index-page">
                    <ul className="navbar-nav mb-lg-0 mx-auto">
                      <li className="nav-item">
                        <Link className="nav-link" href="/about">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/how-it-works">
                          How it Works
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/faq">
                          FAQ
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/contact">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                    <div className="nav-right d-none d-xl-block">
                      <Link href="/contact" className="btn_theme btn_theme_active">
                        Request Funds Now <i className="bi bi-arrow-up-right"></i><span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas More info */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
        <div className="offcanvas-body custom-nevbar">
          <div className="row">
            <div className="col-md-7 col-xl-8">
              <div className="custom-nevbar__left">
                <button type="button" className="close-icon d-md-none ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="bi bi-x"></i>
                </button>
                <ul className="custom-nevbar__nav mb-lg-0">
                  <li className="menu_item">
                    <Link className="menu_link" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link className="menu_link" href="/how-it-works">
                      How it Works
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link className="menu_link" href="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link className="menu_link" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link className="menu_link" href="/contact">
                      Request Funds Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-xl-4">
              <div className="custom-nevbar__right">
                <div className="custom-nevbar__top d-none d-md-block">
                  <button type="button" className="close-icon ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i className="bi bi-x"></i>
                  </button>
                  <div className="custom-nevbar__right-thumb mb-auto">
                    <Image src="/images/logo.png" alt="Paydaytodaycash" width={150} height={50} />
                  </div>
                </div>
                <ul className="custom-nevbar__right-location">
  
                  <li className="location">
                    <p className="mb-2">Email: </p>
                    <a href="mailto:info@paydaytodaycash.com" className="fs-4 contact">info@paydaytodaycash.com</a>
                  </li>
                  <li className="location">
                    <p className="mb-2">Location: </p>
                    <p className="fs-4 contact">67 Albion Street, Leeds, England LS1 5AA</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;