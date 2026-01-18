
import farmersourcing from "../assets/images/farmer-sourcing.jpg";
import traditionalroasting from "../assets/images/traditional-roasting.jpg";
import coldpressed from "../assets/images/cold-pressed.jpg";
import pureoil from "../assets/images/pure-oil.jpg";

import certiso from "../assets/images/cert-gmp.jpg";
import certorganic from "../assets/images/cert-organic.jpg";
// import certfssai from "../assets/images/cert-fssai.jpg";
import certhaccp from "../assets/images/cert-haccp.jpg";
import certgmp from "../assets/images/cert-gmp.jpg";
import certnongmo from "../assets/images/cert-nongmo.jpg";


interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

interface Certification {
  id: string;
  name: string;
  image: string;
}

const certifications: Certification[] = [
  { id: "nl-cert-iso", name: "ISO Certified", image: certiso },
  { id: "nl-cert-organic", name: "Organic Certified", image: certorganic },
  { id: "nl-cert-fssai", name: "FSSAI Approved", image: certorganic },
  { id: "nl-cert-haccp", name: "HACCP Certified", image: certhaccp },
  { id: "nl-cert-gmp", name: "GMP Certified", image: certgmp },
  { id: "nl-cert-nongmo", name: "Non-GMO Verified", image: certnongmo },
];

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "DIRECT FARMERS",
    subtitle: "SOURCING",
    description:
      "We partner directly with local farmers who cultivate premium quality peanuts using traditional, sustainable methods.",
    image: farmersourcing ,
  },
  {
    id: 2,
    title: "TRADITIONAL",
    subtitle: "ROASTING",
    description:
      "Our peanuts are carefully roasted using time-honored techniques to bring out their natural, rich flavors.",
    image: traditionalroasting,
  },
  {
    id: 3,
    title: "COLD PRESSED",
    subtitle: "EXTRACTION",
    description:
      "Using wooden cold-press methods, we extract pure oil without chemicals, preserving all natural nutrients.",
    image: coldpressed,
  },
  {
    id: 4,
    title: "100% PURE",
    subtitle: "NATURAL OIL",
    description:
      "The result is pure, unrefined peanut oil that retains all its natural goodness and authentic taste.",
    image: pureoil,
  },
];

export default function NatureLinkProcess() {
  return (
    <section className="naturelink-section">
      <style>{`
        .naturelink-section {
          background: linear-gradient(135deg, #fdf8f0 0%, #f5e6d3 100%);
          min-height: 100vh;
          padding: 60px 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-subtitle {
          color: #8b6914;
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .section-title {
          color: #3d2914;
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .section-title-accent {
          color: #c9a227;
          font-style: italic;
          font-weight: 400;
        }

        .section-divider {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #c9a227, #8b6914);
          margin: 20px auto;
          border-radius: 2px;
        }

        .process-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          position: relative;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
          }
        }

        @media (max-width: 576px) {
          .process-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .process-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .process-number {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #c9a227, #8b6914);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(201, 162, 39, 0.4);
        }

        .image-container {
          position: relative;
          width: 200px;
          height: 200px;
          margin-bottom: 25px;
        }

        @media (max-width: 768px) {
          .image-container {
            width: 180px;
            height: 180px;
          }
        }

        .circle-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 4px solid transparent;
          background: linear-gradient(135deg, #c9a227, #8b6914, #c9a227) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: rotateBorder 8s linear infinite;
        }

        @keyframes rotateBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .circle-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fff;
          box-shadow: 0 10px 30px rgba(61, 41, 20, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .process-card:hover .circle-image {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(201, 162, 39, 0.3);
        }

        .process-title {
          color: #3d2914;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 5px;
          text-transform: uppercase;
        }

        .process-subtitle {
          color: #c9a227;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .process-description {
          color: #5a4a3a;
          font-size: 14px;
          line-height: 1.7;
          max-width: 220px;
        }

        .connector-line {
          display: none;
        }

        @media (min-width: 1025px) {
          .connector-line {
            display: block;
            position: absolute;
            top: 100px;
            height: 2px;
            background: linear-gradient(
              90deg,
              transparent,
              #c9a227,
              #8b6914,
              #c9a227,
              transparent
            );
            z-index: 0;
          }
          .connector-1 {
            left: calc(25% - 20px);
            width: calc(25% - 40px);
          }
          .connector-2 {
            left: calc(50% - 20px);
            width: calc(25% - 40px);
          }
          .connector-3 {
            left: calc(75% - 20px);
            width: calc(25% - 40px);
          }
        }

        .leaf-decoration {
          position: absolute;
          width: 30px;
          height: 30px;
          opacity: 0.3;
        }

        .leaf-1 {
          top: 20px;
          left: 10%;
        }

        .leaf-2 {
          bottom: 30px;
          right: 15%;
        }

        .bottom-accent {
          text-align: center;
          margin-top: 60px;
          padding: 30px;
          background: rgba(201, 162, 39, 0.1);
          border-radius: 20px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .bottom-accent-text {
          color: #3d2914;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .bottom-accent-highlight {
          color: #c9a227;
          font-size: 24px;
          font-weight: 700;
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 28px;
          }

          .process-title {
            font-size: 16px;
          }

          .process-subtitle {
            font-size: 14px;
          }
        }

        /* Certification Section Styles */
        #nl-certification-section {
          background: linear-gradient(180deg, #3d2914 0%, #2a1d0e 100%);
          padding: 60px 0;
          margin-top: 60px;
          overflow: hidden;
        }

        .nl-cert-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .nl-cert-subtitle {
          color: #c9a227;
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .nl-cert-title {
          color: #fdf8f0;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .nl-cert-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #c9a227, #8b6914);
          margin: 15px auto;
          border-radius: 2px;
        }

        .nl-cert-track-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
        }

        .nl-cert-track-wrapper::before,
        .nl-cert-track-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .nl-cert-track-wrapper::before {
          left: 0;
          background: linear-gradient(90deg, #3d2914, transparent);
        }

        .nl-cert-track-wrapper::after {
          right: 0;
          background: linear-gradient(270deg, #3d2914, transparent);
        }

        .nl-cert-scroll-track {
          display: flex;
          animation: nl-scroll-certifications 25s linear infinite;
          width: max-content;
        }

        .nl-cert-scroll-track:hover {
          animation-play-state: paused;
        }

        @keyframes nl-scroll-certifications {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .nl-cert-item {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 40px;
          transition: transform 0.3s ease;
        }

        .nl-cert-item:hover {
          transform: scale(1.1);
        }

        .nl-cert-image-wrapper {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #fdf8f0;
          padding: 10px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          margin-bottom: 15px;
          transition: box-shadow 0.3s ease;
        }

        .nl-cert-item:hover .nl-cert-image-wrapper {
          box-shadow: 0 12px 35px rgba(201, 162, 39, 0.4);
        }

        .nl-cert-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .nl-cert-name {
          color: #fdf8f0;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          #nl-certification-section {
            padding: 40px 0;
          }

          .nl-cert-title {
            font-size: 24px;
          }

          .nl-cert-item {
            margin: 0 25px;
          }

          .nl-cert-image-wrapper {
            width: 100px;
            height: 100px;
          }

          .nl-cert-name {
            font-size: 12px;
          }
        }

        @media (max-width: 576px) {
          .nl-cert-image-wrapper {
            width: 80px;
            height: 80px;
          }

          .nl-cert-item {
            margin: 0 20px;
          }
        }
      `}</style>

      <div className="process-container">
        <div className="section-header">
          <p className="section-subtitle">Our Journey</p>
          <h2 className="section-title">
            The NatureLink Process
            <br />
            <span className="section-title-accent">Crafted the Natural Way</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="process-grid">
          {/* Connector Lines */}
          <div className="connector-line connector-1"></div>
          <div className="connector-line connector-2"></div>
          <div className="connector-line connector-3"></div>

          {processSteps.map((step) => (
            <div className="process-card" key={step.id}>
              <div className="process-number">{step.id}</div>
              <div className="image-container">
                <div className="circle-border"></div>
                <img
                  src={step.image || "/placeholder.svg"}
                  alt={`${step.title} ${step.subtitle}`}
                  className="circle-image"
                />
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-subtitle">{step.subtitle}</p>
              <p className="process-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bottom-accent">
          <p className="bottom-accent-text">From Farm to Your Kitchen</p>
          <p className="bottom-accent-highlight">
            100% Pure & Natural Peanut Oil
          </p>
        </div>
      </div>

      {/* Certification Auto-Scroll Section */}
      <section id="nl-certification-section">
        <div className="nl-cert-header">
          <p className="nl-cert-subtitle">Trust & Quality</p>
          <h2 className="nl-cert-title">Our Certifications</h2>
          <div className="nl-cert-divider"></div>
        </div>

        <div className="nl-cert-track-wrapper">
          <div className="nl-cert-scroll-track">
            {/* First set of certifications */}
            {certifications.map((cert) => (
              <div className="nl-cert-item" key={cert.id}>
                <div className="nl-cert-image-wrapper">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    className="nl-cert-image"
                  />
                </div>
                <span className="nl-cert-name">{cert.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {certifications.map((cert) => (
              <div className="nl-cert-item" key={`${cert.id}-duplicate`}>
                <div className="nl-cert-image-wrapper">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    className="nl-cert-image"
                  />
                </div>
                <span className="nl-cert-name">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
