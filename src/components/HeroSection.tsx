"use client";

import React from 'react';
import panelHead from "../assets/video/Untitled video - Made with Clipchamp.mp4"


const HeroSection: React.FC = () => {
  return (
    <section id="peanut-hero-section" className="peanut-hero-wrapper">
      {/* Background Video */}
      <video
        id="peanut-hero-video"
        className="peanut-video-bg"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=1920&q=80"
      >
        <source
          src={panelHead}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div id="peanut-hero-overlay" className="peanut-overlay"></div>

      {/* Hero Content - Left Side */}
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-8">
            <div id="peanut-hero-content" className="peanut-content-wrapper">
              <span id="peanut-hero-tagline" className="peanut-tagline">
                {/* Premium Quality Since 1985 */}
                Naturelink Organics Private Limited
                </span>
              <h1 id="peanut-hero-title" className="peanut-main-title">
                {/* The Finest <span className="peanut-highlight">Peanuts</span> Crafted with Passion */}
               <span style={{color:"green"}}> nature</span><span className="peanut-highlight">link </span>
                Cold Pressed Groundnut Oil
              </h1>
              <p id="peanut-hero-bio" className="peanut-bio-text">
                {/* Experience the perfect crunch and rich flavor of our artisanal peanuts. 
                Sourced from the best farms, roasted to perfection, and delivered fresh 
                to your doorstep. Every bite tells a story of dedication and quality 
                that spans three generations. */}
                Naturelink is 100% pure and unrefined cold-
pressed groundnut oil is extracted from selected
premium groundnuts. Cold-pressing helps preserve
essential nutrients, natural aroma, and the
authentic flavour of real groundnuts, making it ideal
for daily cooking.
              </p>

              {/* Stats Section */}
              <div id="peanut-stats-container" className="peanut-stats-row">
                <div id="peanut-stat-experience" className="peanut-stat-box">
                  <div className="peanut-stat-value">40+</div>
                  <div className="peanut-stat-desc">Years Experience</div>
                </div>
                <div id="peanut-stat-customers" className="peanut-stat-box">
                  <div className="peanut-stat-value">50M+</div>
                  <div className="peanut-stat-desc">Happy Customers</div>
                </div>
                <div id="peanut-stat-natural" className="peanut-stat-box">
                  <div className="peanut-stat-value">100%</div>
                  <div className="peanut-stat-desc">Natural</div>
                </div>
              </div>

              {/* Buttons */}
              <div id="peanut-cta-container" className="peanut-btn-group d-flex flex-wrap">
                <button id="peanut-btn-explore" className="btn peanut-btn-primary">Explore Products</button>
                <button id="peanut-btn-watch" className="btn peanut-btn-outline">Watch Story</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Right Side */}
      <div id="peanut-social-sidebar" className="peanut-social-links d-none d-lg-flex">
        <a id="peanut-social-facebook" href="#" className="peanut-social-icon" aria-label="Facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a id="peanut-social-instagram" href="#" className="peanut-social-icon" aria-label="Instagram">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a id="peanut-social-twitter" href="#" className="peanut-social-icon" aria-label="Twitter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a id="peanut-social-youtube" href="#" className="peanut-social-icon" aria-label="YouTube">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div id="peanut-scroll-indicator" className="peanut-scroll-hint">
        <span className="peanut-scroll-text">Scroll Down</span>
        <div className="peanut-mouse-icon"></div>
      </div>
    </section>
  );
};

export default HeroSection;
