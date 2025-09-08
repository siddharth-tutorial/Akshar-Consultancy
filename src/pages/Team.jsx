import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { Breadcrumb, Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import a1 from "../assets/akshar1.jpg";
import a2 from "../assets/jaynish.png";
import Footer from "../component/Footer";
import bgImage from "../assets/bg1.webp";
import Loader from "./Loader";
function Team() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // loader close
    }, 2000); // 2 sec demo

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Akash Vanecha",
      role: "Founder & Tax Consultant",
      image: a1,
      description:
        "He has 8+ years of experience in Accounts, Finance, Audit, and Taxation. He advises on Indirect and Direct Tax Compliance, Appeals, and represents clients before Adjudicating Authorities. Practicing since Aug 2016.",
    },
    {
      name: "Jaynish Patel",
      role: "Co-Founder & Audit Specialist",
      image: a2,
      description:
        "He has 8+ years of experience in Project Loans, Government Subsidies, and Business Advisory. He has worked with several national and international companies.",
    },
  ];

  const heroStyles = {
    position: "relative",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "100px 0",
    overflow: "hidden",
  };

  const contentStyle = { position: "relative", zIndex: 3 };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header />

          {/* Hero Section */}
          <div style={heroStyles} className="hero-section">
            <div className="overlay-before"></div>
            <div className="overlay-after"></div>
            <Container style={contentStyle}>
              <Row>
                <Col>
                  <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
                    Our Team
                  </h1>
                  <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "#dc522e  " }}>
                      Our Team
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Team Members */}
          <section className="py-5 bg-white">
            <Container>
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.3 }}
                >
                  <Row
                    className={`align-items-center py-5 ${
                      idx % 2 === 1 ? "flex-md-row-reverse" : ""
                    }`}
                  >
                    <Col md={5} className="text-center mb-4 mb-md-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        roundedCircle
                        fluid
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                          width: "280px",
                          height: "280px",
                          objectFit: "cover",
                          objectPosition: "top",
                          border: `6px solid ${
                            hoveredIndex === idx ? "#fd7e14" : "#e0e0e0"
                          }`,
                          transition: "border-color 0.3s ease",
                          boxShadow:
                            hoveredIndex === idx
                              ? "0 0 30px rgba(253, 126, 20, 0.3)"
                              : "0 0 20px rgba(0, 0, 0, 0.08)",
                          cursor: "pointer",
                        }}
                      />
                    </Col>
                    <Col md={7}>
                      <h3
                        className="fw-bold"
                        style={{
                          color: hoveredIndex === idx ? "#fd7e14" : "#000",
                          transition: "color 0.3s ease",
                        }}
                      >
                        Partner, {member.name}
                      </h3>
                      <h6 className="mb-3" style={{ color: "#6f42c1" }}>
                        {member.role}
                      </h6>
                      <p
                        className="fw-medium"
                        style={{ color: "#444", fontSize: "1.1rem" }}
                      >
                        {member.description}
                      </p>
                    </Col>
                  </Row>
                </motion.div>
              ))}
            </Container>
          </section>
          <Footer />
          <style>{`
  .hero-section .overlay-before {
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 1;
  }
  .hero-section .overlay-after {
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
    z-index: 2;
  }

  /* Breadcrumb text color */
  .breadcrumb-item,
  .breadcrumb-item a {
    color: white !important;
    text-decoration: none !important;
  }
  
  /* Hover underline */
  .custom-breadcrumb .breadcrumb-item a:hover {
    text-decoration: underline !important;
  }

  /* Active item color */
  .custom-breadcrumb .breadcrumb-item.active {
    color: #fd7e14  !important;
    font-weight: bold;
  }
  /* Divider color and symbol */
  .breadcrumb-item + .breadcrumb-item::before {
    color: white !important;
    content: ">" !important;
    margin: 0 8px !important;
  }
`}</style>
        </div>
      )}
    </>
  );
}

export default Team;
