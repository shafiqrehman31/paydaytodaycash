"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    // Initialize animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }

    // Auto-play carousel
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      location: "Austin, TX",
      rating: 5,
      text: "I was really nervous about applying for a loan online, but Paydaytodaycash made it so simple. The whole process took maybe 10 minutes, and the money was in my account the next morning. When my car broke down unexpectedly, I didn't know what I was going to do. These guys really came through for me.",
      date: "2 months ago",
      loanAmount: "$1,200",
      avatar: "/images/avatar-placeholder.jpg",
      initials: "MT"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      location: "Orlando, FL",
      rating: 5,
      text: "What I appreciated most was the transparency. They showed me exactly what the payments would be, no hidden fees or surprises. My credit isn't great (around 580), but they still found options for me. I've already recommended Paydaytodaycash to two of my coworkers.",
      date: "1 week ago",
      loanAmount: "$500",
      avatar: "/images/avatar-placeholder.jpg",
      initials: "SJ"
    },
    {
      id: 3,
      name: "David Ramirez",
      location: "Phoenix, AZ",
      rating: 4,
      text: "Honestly, I was skeptical at first. There are so many sketchy sites out there. But Paydaytodaycash connected me with a legitimate lender and I got the funds I needed for my daughter's school supplies. The whole experience was straightforward and professional.",
      date: "3 weeks ago",
      loanAmount: "$800",
      avatar: "/images/avatar-placeholder.jpg",
      initials: "DR"
    },
    {
      id: 4,
      name: "Jennifer Walsh",
      location: "Chicago, IL",
      rating: 5,
      text: "Emergency vet bill came out of nowhere. I didn't have the $900 and my credit card was maxed. Paydaytodaycash helped me find a lender that worked with my situation. Funds were deposited the next day. My dog is doing great now, and I'm so grateful for the help.",
      date: "1 month ago",
      loanAmount: "$900",
      avatar: "/images/avatar-placeholder.jpg",
      initials: "JW"
    },
    {
      id: 5,
      name: "Robert Chen",
      location: "Seattle, WA",
      rating: 5,
      text: "I've used Paydaytodaycash three times now when I've needed quick cash between paychecks. It's always been reliable. The application is simple, and I love that I can see multiple offers at once to pick the best terms. Highly recommend.",
      date: "2 weeks ago",
      loanAmount: "$600",
      avatar: "/images/avatar-placeholder.jpg",
      initials: "RC"
    },
    {
      id: 6,
      name: "Lisa Martinez",
      location: "Denver, CO",
      rating: 4,
      text: "Applied on a Saturday evening, figured I'd hear back Monday. Got an offer Sunday morning and the money hit my account Monday afternoon. Couldn't believe how fast it was. The interest rate was fair for my credit score too.",
      date: "5 days ago",
      loanAmount: "$1,500",
      avatar: "/images/avatar-placeholder.jpg",
      initials: "LM"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i 
        key={index} 
        className={`bi bi-star-fill ${index < rating ? 'star-gold' : 'star-gray'}`}
      ></i>
    ));
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-premium">
      {/* Background Pattern */}
      <div className="testimonials-pattern">
        <div className="pattern-circle circle-1"></div>
        <div className="pattern-circle circle-2"></div>
        <div className="pattern-circle circle-3"></div>
        <div className="pattern-circle circle-4"></div>
      </div>

      <div className="container">
        {/* Section Header with Gradient */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <div className="testimonials-header">
              <span className="testimonials-subtitle">
                <i className="bi bi-chat-quote-fill"></i>
                Customer Experiences
              </span>
              <h2 className="testimonials-title">
                Trusted by Thousands Across America
              </h2>
              <p className="testimonials-description">
                Don't just take our word for it — hear from real customers who found the financial help they needed with Paydaytodaycash.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="testimonials-stats">
              <div className="stat-block">
                <div className="stat-number">4.8</div>
                <div className="stat-stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <div className="stat-label">Overall Rating</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-block">
                <div className="stat-number">2,847+</div>
                <div className="stat-label">Verified Reviews</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-block">
                <div className="stat-number">98%</div>
                <div className="stat-label">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="testimonial-carousel">
          <div className="carousel-container">
            {/* Main Card */}
            <div className="testimonial-main-card">
              <div className="card-pattern">
                <i className="bi bi-quote quote-icon-large"></i>
              </div>
              
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  {renderStars(testimonials[activeIndex].rating)}
                  <span className="testimonial-date">{testimonials[activeIndex].date}</span>
                </div>

                <p className="testimonial-quote">"{testimonials[activeIndex].text}"</p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    <div className="avatar-gradient">
                      {testimonials[activeIndex].initials}
                    </div>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                    <div className="author-details">
                      <span className="author-location">
                        <i className="bi bi-geo-alt-fill"></i>
                        {testimonials[activeIndex].location}
                      </span>
                      <span className="author-loan">
                        <i className="bi bi-cash-stack"></i>
                        {testimonials[activeIndex].loanAmount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="trust-badge">
                <i className="bi bi-patch-check-fill"></i>
                <span>Verified Customer</span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="testimonial-thumbnails">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`thumbnail-btn ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                >
                  <div className="thumbnail-avatar">
                    {testimonial.initials}
                  </div>
                  <div className="thumbnail-info">
                    <span className="thumbnail-name">{testimonial.name}</span>
                    <span className="thumbnail-rating">
                      {testimonial.rating} <i className="bi bi-star-fill"></i>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <button 
              className="control-btn prev-btn"
              onClick={handlePrev}
              onMouseEnter={() => setIsAutoPlaying(false)}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <div className="control-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                />
              ))}
            </div>
            <button 
              className="control-btn next-btn"
              onClick={handleNext}
              onMouseEnter={() => setIsAutoPlaying(false)}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Trust Signals Row */}
        <div className="trust-signals">
          <div className="trust-signal-item">
            <i className="bi bi-shield-check"></i>
            <span>All reviews verified</span>
          </div>
          <div className="trust-signal-item">
            <i className="bi bi-incognito"></i>
            <span>Real customer stories</span>
          </div>
          <div className="trust-signal-item">
            <i className="bi bi-star"></i>
            <span>Unedited feedback</span>
          </div>
          <div className="trust-signal-item">
            <i className="bi bi-clock-history"></i>
            <span>Updated weekly</span>
          </div>
        </div>

        {/* CTA */}
        <div className="testimonials-cta">
          <Link href="/contact" className="cta-button">
            <span>Share Your Experience</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
          <p className="cta-note">
            Your story could help someone else make a confident decision
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;