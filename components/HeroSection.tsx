"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  useEffect(() => {
    // WOW.js will be initialized by main.js
    // This ensures any client-side specific hero animations work
  }, []);

  return (
    <section className="hero">
      <div className="hero__animation">
        <Image src="/images/hero_vector_dollar.png" alt="Image" width={50} height={50} />
        <Image src="/images/hero_vector_message.png" alt="Image" width={50} height={50} />
        <Image src="/images/hero_vector_dollar.png" alt="Image" width={50} height={50} />
        <Image src="/images/hero_vector_setting.png" alt="Image" width={50} height={50} />
        <Image src="/images/hero_vector_arrow.png" alt="Image" width={50} height={50} />
      </div>
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-center justify-content-between">
          <div className="col-12 col-lg-6">
            <div className="section__content">
              <span className="section__content-sub-title headingFour wow fadeInDown" data-wow-duration="0.8s">
                <Image src="/images/1.png" alt="vector" width={20} height={20} /> Find loan offers from trusted lenders across the USA.
              </span>
              <h1 className="section__content-title display-3 wow fadeInUp" data-wow-duration="0.8s">
                Get Fast <span className="word d-inline-flex">
                  <span data-wow-duration="0.6s" className="letter wow fadeInDown">C</span>
                  <span data-wow-duration="0.6s" data-wow-delay="0.1s" className="letter wow fadeInDown">a</span>
                  <span data-wow-duration="0.6s" data-wow-delay="0.2s" className="letter wow fadeInDown">s</span>
                  <span data-wow-duration="0.6s" data-wow-delay="0.3s" className="letter wow fadeInDown">h</span>
                </span> Loans
              </h1>
              <p className="section__content-text wow fadeInDown" data-wow-duration="0.8s">
                Welcome to Paydaytodaycash, your trusted resource for fast loan approval across the USA. 
                Our dedicated team ensures quick and easy access to funds when you need them most.
              </p>
              <div className="btn-group mt_40 wow fadeInUp" data-wow-duration="0.8s">
                <a href="#calculator" className="btn_theme btn_theme_active">
                  Loan Calculator <i className="bi bi-arrow-up-right"></i><span></span>
                </a>
                <a href="/about" className="btn_theme">
                  About us <i className="bi bi-arrow-up-right"></i><span></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="hero__thumb wow fadeInUp" data-wow-duration="0.8s">
              <Image 
                src="/images/1.png" 
                alt="Image" 
                width={600} 
                height={500}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;