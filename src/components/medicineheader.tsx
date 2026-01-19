
import { useEffect, useState, useCallback } from "react"
import logo from './logo/logo.png';
// // import panelHead from './logo/p2.jpg';
// import panelHead from "../assets/video/video.mp4"
// import panelHead from "../assets/video/video.mp4"

// Navigation items configuration
const navItems = [
  { id: "peanut-nav-home", label: "Home", href: "/", isActive: true },
  {
    id: "peanut-nav-services",
    label: "Services",
    href: "#services",
    hasDropdown: true,
    dropdownItems: [
      { id: "peanut-dropdown-consultation", label: "Consultation", href: "#consultation" },
      { id: "peanut-dropdown-therapy", label: "Oil Therapy", href: "#therapy" },
      { id: "peanut-dropdown-nutrition", label: "Nutrition Plans", href: "#nutrition" },
      { id: "peanut-dropdown-wellness", label: "Wellness Programs", href: "#wellness" },
    ],
  },
  { id: "peanut-nav-about", label: "About Us", href: "#about" },
  { id: "peanut-nav-products", label: "Products", href: "product" },
  { id: "peanut-nav-testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "peanut-nav-blog", label: "Health Blog", href: "#blog" },
  { id: "peanut-nav-contact", label: "Contact", href: "#contact" },
]

// Logo Component
function PeanutLogo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <a href="#" id="peanut-logo-link" className="peanut-logo-wrapper navbar-brand d-inline-flex align-items-center gap-2 text-decoration-none m-0">
      {/* <div className="peanut-logo-icon d-flex align-items-center justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="20"
        >
          <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
        </svg>
      </div> */}
      <span className={`peanut-logo-text fw-bold ${isScrolled ? "text-white" : "peanut-text-brown"}`}>

      <img src={logo} alt="Peanut Logo" className="logo " />
            </span>

     
    </a>
  )
}

// Desktop Navigation Component
function DesktopNavigation({ isScrolled }: { isScrolled: boolean }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav id="peanut-desktop-nav" className="peanut-desktop-nav">
      <ul className="peanut-nav-list nav mb-0 align-items-center justify-content-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="peanut-nav-item nav-item position-relative"
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href={item.href}
              id={item.id}
              className={`peanut-nav-link nav-link d-inline-flex align-items-center justify-content-center gap-1 px-2 px-xl-3 py-2 rounded-3 fw-medium ${
                item.isActive
                  ? isScrolled
                    ? "peanut-nav-link-active"
                    : "peanut-nav-link-active"
                  : isScrolled
                    ? "text-black"
                    : "peanut-nav-link-default"
              }`}
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="12"
                  height="12"
                  className={`peanut-chevron ${activeDropdown === item.id ? "peanut-chevron-rotated" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </a>

            {item.hasDropdown && item.dropdownItems && (
              <ul
                className={`peanut-dropdown-menu dropdown-menu position-absolute start-50 translate-middle-x p-2 rounded-4 border-0 shadow-lg ${
                  activeDropdown === item.id ? "peanut-dropdown-show" : "peanut-dropdown-hide"
                }`}
              >
                {item.dropdownItems.map((dropdownItem) => (
                  <li key={dropdownItem.id}>
                    <a
                      href={dropdownItem.href}
                      id={dropdownItem.id}
                      className="peanut-dropdown-item dropdown-item px-3 py-2 rounded-3 text-start"
                    >
                      {dropdownItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Mobile Hamburger Button Component
function HamburgerButton({
  isOpen,
  onClick,
  isScrolled,
}: {
  isOpen: boolean
  onClick: () => void
  isScrolled: boolean
}) {
  return (
    <button
      id="peanut-mobile-toggle"
      className="peanut-hamburger-btn btn d-lg-none d-flex align-items-center justify-content-center p-0 rounded-3 border-0"
      onClick={onClick}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
      style={{position: "absolute" , right:"20px"}}
    >
      <div className="peanut-hamburger-lines d-flex flex-column align-items-center justify-content-center">
        <span className={`peanut-hamburger-line ${isScrolled ? "bg-white" : "peanut-bg-brown"} ${isOpen ? "peanut-line-1-open" : ""}`} />
        <span className={`peanut-hamburger-line ${isScrolled ? "bg-white" : "peanut-bg-brown"} ${isOpen ? "peanut-line-2-open" : ""}`} />
        <span className={`peanut-hamburger-line ${isScrolled ? "bg-white" : "peanut-bg-brown"} ${isOpen ? "peanut-line-3-open" : ""}`} />
      </div>
    </button>
  )
}

// Mobile Navigation Component
function MobileNavigation({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <nav
      id="peanut-mobile-nav"
      className={`peanut-mobile-nav d-lg-none ${isOpen ? "peanut-mobile-nav-open" : "peanut-mobile-nav-closed"}`}
    >
      <div className="container-fluid px-3 px-md-4 px-lg-5 py-3">
        <ul className="peanut-mobile-nav-list nav flex-column mb-0">
          {navItems.map((item) => (
            <li key={`mobile-${item.id}`} className="peanut-mobile-nav-item">
              <a
                href={item.href}
                className="peanut-mobile-nav-link nav-link py-3 fw-medium text-white text-start"
                onClick={onClose}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="peanut-mobile-nav-buttons d-flex flex-column flex-sm-row gap-2 gap-sm-3 pt-4 mt-2">
            <a
              href="#appointment"
              className="peanut-btn-appointment-mobile btn flex-grow-1 py-3 fw-semibold rounded-3 text-center"
              onClick={onClose}
            >
              Book Appointment
            </a>
            <a
              href="#portal"
              className="peanut-btn-portal-mobile btn flex-grow-1 py-3 fw-semibold rounded-3 text-center"
              onClick={onClose}
            >
              Patient Portal
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

// Header Action Buttons Component
function HeaderActions({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="peanut-header-actions d-none d-lg-flex align-items-center gap-2">
      <a
        href="#appointment"
        id="peanut-btn-appointment"
        className={`peanut-btn-appointment btn px-3 px-xl-4 py-2 fw-semibold rounded-3 ${isScrolled ? "peanut-btn-appointment" : ""}`}
      >
        Book Now
      </a>
      <a
        href="#portal"
        id="peanut-btn-portal"
        className="peanut-btn-portal btn px-3 px-xl-4 py-2 fw-semibold rounded-3"
      >
        Portal
      </a>
    </div>
  )
}

// Main Header Component
function PeanutHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header
      id="peanut-header-main"
      className={`peanut-header fixed-top ${isScrolled ? "bg-white" : "peanut-header-transparent"}`}
    >
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        <div className="row align-items-center peanut-header-row ">
          <div className="col-auto">
            <PeanutLogo isScrolled={isScrolled} />
          </div>
          <div className="col d-none d-lg-flex justify-content-center">
            <DesktopNavigation isScrolled={isScrolled} />
          </div>
          <div className="col-auto d-flex align-items-center gap-2 gap-md-3">
            <HeaderActions isScrolled={isScrolled} />
            <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} isScrolled={isScrolled} />
          </div>
        </div>
      </div>
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  )
}

// Hero Section Component


// Main Page Component
export default function medicineheader() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <style>{`
        /* ====== PEANUT OIL THEME COLORS ====== */
        :root {
          --peanut-primary: #D4A574;
          --peanut-secondary: #E8C88B;
          --peanut-brown-dark: #6B4423;
          --peanut-brown-medium: #8B6914;
          --peanut-brown-light: #3D2914;
          --peanut-cream: #FDF6E9;
          --peanut-cream-light: #FFF8F0;
        }

        /* ====== HEADER STYLES ====== */
        .peanut-header {
          transition: all 0.3s ease;
          z-index: 1030;
        }

        .peanut-header-transparent {
          background: transparent;
        }

        .peanut-header-scrolled {
          background: linear-gradient(90deg, var(--peanut-brown-dark), var(--peanut-brown-medium));
          box-shadow: 0 4px 30px rgba(107, 68, 35, 0.25);
        }

        .peanut-header-row {
          height: 70px;
        }

        @media (max-width: 991.98px) {
          .peanut-header-row {
            height: 60px;
          }
        }

        /* ====== LOGO STYLES ====== */
        .peanut-logo-wrapper {
          flex-shrink: 0;
        }

        .peanut-logo-wrapper:hover .peanut-logo-icon {
          transform: scale(1.05);
        }

        .peanut-logo-icon {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, var(--peanut-primary), var(--peanut-secondary));
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(212, 165, 116, 0.4);
          transition: transform 0.2s ease;
          color: var(--peanut-brown-dark);
        }

        .peanut-text-brown {
          color: var(--peanut-brown-dark);
        }

        .peanut-logo-text {
          transition: color 0.3s ease;
          font-size: 1.125rem;
        }

        @media (min-width: 768px) {
          .peanut-logo-icon {
            width: 42px;
            height: 42px;
          }
          .peanut-logo-text {
            font-size: 1.25rem;
          }
        }

        /* ====== NAVIGATION LINK STYLES ====== */
        .peanut-nav-list {
          gap: 0.125rem;
        }

        .peanut-nav-link {
          font-size: 0.875rem;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-align: center;
        }

        @media (min-width: 1200px) {
          .peanut-nav-list {
            gap: 0.25rem;
          }
          .peanut-nav-link {
            font-size: 0.9rem;
          }
        }

        

        .peanut-nav-link-scrolled {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        .peanut-nav-link-scrolled:hover {
          color: #fff !important;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .peanut-nav-link-active-scrolled {
          color: var(--peanut-secondary) !important;
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* ====== DROPDOWN STYLES ====== */
        .peanut-chevron {
          transition: transform 0.2s ease;
        }

        .peanut-chevron-rotated {
          transform: rotate(180deg);
        }

        .peanut-dropdown-menu {
          min-width: 200px;
          background: #fff;
          margin-top: 0.5rem;
          transition: all 0.2s ease;
        }

        .peanut-dropdown-show {
          display: block;
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .peanut-dropdown-hide {
          display: block;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-10px);
          pointer-events: none;
        }

        .peanut-dropdown-item {
          font-size: 0.875rem;
          color: var(--peanut-brown-light);
          transition: all 0.2s ease;
        }

        .peanut-dropdown-item:hover {
          background-color: var(--peanut-cream);
          color: var(--peanut-brown-dark);
        }

        /* ====== HAMBURGER BUTTON STYLES ====== */
        .peanut-hamburger-btn {
          background-color: rgba(212, 165, 116, 0.15);
          width: 42px;
          height: 42px;
        }

        .peanut-hamburger-btn:hover {
          background-color: rgba(212, 165, 116, 0.25);
        }

        .peanut-hamburger-lines {
          gap: 5px;
        }

        .peanut-hamburger-line {
          width: 22px;
          height: 2px;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .peanut-bg-brown {
          background-color: var(--peanut-brown-dark);
        }

        .peanut-line-1-open {
          transform: translateY(7px) rotate(45deg);
        }

        .peanut-line-2-open {
          opacity: 0;
        }

        .peanut-line-3-open {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ====== MOBILE NAVIGATION STYLES ====== */
        .peanut-mobile-nav {
          background: linear-gradient(135deg, var(--peanut-brown-dark), var(--peanut-brown-medium));
          border-top: 1px solid rgba(212, 165, 116, 0.2);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .peanut-mobile-nav-open {
          max-height: 700px;
          opacity: 1;
        }

        .peanut-mobile-nav-closed {
          max-height: 0;
          opacity: 0;
        }

        .peanut-mobile-nav-item {
          border-bottom: 1px solid rgba(212, 165, 116, 0.15);
        }

        .peanut-mobile-nav-item:last-of-type {
          border-bottom: none;
        }

        .peanut-mobile-nav-link:hover {
          color: var(--peanut-secondary) !important;
        }

        .peanut-btn-appointment-mobile {
          background: transparent;
          border: 2px solid var(--peanut-primary);
          color: #fff;
        }

        .peanut-btn-appointment-mobile:hover {
          background: var(--peanut-primary);
          color: var(--peanut-brown-dark);
        }

        .peanut-btn-portal-mobile {
          background: linear-gradient(90deg, var(--peanut-primary), var(--peanut-secondary));
          color: var(--peanut-brown-dark);
          border: none;
        }

        .peanut-btn-portal-mobile:hover {
          transform: translateY(-2px);
          color: var(--peanut-brown-dark);
        }

        /* ====== HEADER ACTION BUTTONS ====== */
        .peanut-btn-appointment {
          background: transparent;
          border: 2px solid var(--peanut-primary);
          color: var(--peanut-brown-dark);
          transition: all 0.2s ease;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        .peanut-btn-appointment:hover {
          background: var(--peanut-primary);
          color: var(--peanut-brown-dark);
        }

        .peanut-btn-appointment-scrolled {
          color: #fff;
        }

        .peanut-btn-appointment-scrolled:hover {
          background: var(--peanut-primary);
          color: var(--peanut-brown-dark);
        }

        .peanut-btn-portal {
          background: linear-gradient(90deg, var(--peanut-primary), var(--peanut-secondary));
          color: var(--peanut-brown-dark);
          border: none;
          box-shadow: 0 4px 15px rgba(212, 165, 116, 0.4);
          transition: all 0.2s ease;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        .peanut-btn-portal:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 165, 116, 0.5);
          color: var(--peanut-brown-dark);
        }

        /* ====== HERO SECTION ====== */
        .peanut-hero {
          background: linear-gradient(135deg, var(--peanut-cream), var(--peanut-cream-light), rgba(232, 200, 139, 0.3));
          padding-top: 100px;
        }

        .peanut-hero-title {
          color: var(--peanut-brown-dark);
          line-height: 1.2;
        }

        .peanut-hero-subtitle {
          color: rgba(61, 41, 20, 0.85);
        }

        .peanut-hero-btn-primary {
          background: linear-gradient(90deg, var(--peanut-primary), var(--peanut-secondary));
          color: var(--peanut-brown-dark);
          border: none;
          box-shadow: 0 4px 20px rgba(212, 165, 116, 0.4);
          transition: all 0.2s ease;
        }

        .peanut-hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(212, 165, 116, 0.5);
          color: var(--peanut-brown-dark);
        }

        .peanut-hero-btn-secondary {
          background: transparent;
          border: 2px solid var(--peanut-brown-dark);
          color: var(--peanut-brown-dark);
          transition: all 0.2s ease;
        }

        .peanut-hero-btn-secondary:hover {
          background: var(--peanut-brown-dark);
          color: #fff;
        }

        /* ====== DEMO SECTIONS ====== */
        .min-vh-75 {
          min-height: 75vh;
        }

        .peanut-section-light {
          background: var(--peanut-cream);
          color: var(--peanut-brown-dark);
        }

        .peanut-section-gold {
          background: linear-gradient(135deg, var(--peanut-secondary), var(--peanut-primary));
          color: var(--peanut-brown-dark);
        }

        .peanut-section-dark {
          background: var(--peanut-brown-dark);
          color: var(--peanut-cream);
        }

        /* ====== RESPONSIVE ADJUSTMENTS ====== */
        @media (max-width: 991.98px) {
          .peanut-logo-icon {
            width: 36px;
            height: 36px;
          }

          .peanut-logo-text {
            font-size: 1rem !important;
          }

          .peanut-hero-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 575.98px) {
          .peanut-hero-title {
            font-size: 1.75rem;
          }

          .peanut-hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
      
      <main className="peanut-main">
        <PeanutHeader />
       
      </main>
    </>
  )
}
