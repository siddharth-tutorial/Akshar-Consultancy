import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaShieldAlt,
  FaBusinessTime,
  FaUserTie,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import b3 from "../../assets/b-3.jpg";
import bgImage from "../../assets/bg1.webp";
import Loader from "../Loader";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Audit() {
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate async loading (API call / assets load etc.)
    const timer = setTimeout(() => {
      setLoading(false); // loader close
    }, 2000); // 2 sec demo

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header />

          {/* Hero with Parallax */}
          <div style={heroStyles} className="hero-section">
            <div className="overlay-before"></div>
            <div className="overlay-after"></div>
            <Container style={contentStyle}>
              <Row>
                <Col>
                  <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
                    Audit,Assurance
                  </h1>
                  <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/service">Service</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                      Audit,Assurance
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Services Section */}
          <section className="py-5 bg-light">
            <Container>
              <Row className="align-items-center">
                <Col md={6}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={fadeUp}
                  >
                    <h2 className="fw-bold mb-3" style={{ color: "#e45c3c" }}>
                      What We Offer
                    </h2>
                    <p>
                      As a trusted tax consultant, Akshar Consultancy delivers
                      strategic audit and compliance support tailored to
                      businesses and professionals. We ensure your tax,
                      licensing, and financial records meet current regulatory
                      expectations.
                    </p>
                    <ul className="list-unstyled">
                      {[
                        "Tax Compliance Audits",
                        "GST & Return Accuracy Checks",
                        "TDS / TCS Filing Reviews",
                        "Financial Control Evaluations",
                        "Regulatory & Document Compliance",
                      ].map((item, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start">
                          <FaCheck className="text-success me-2 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Col>
                <Col md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={b3}
                      alt="Tax Audit Services"
                      className="img-fluid rounded-3 shadow"
                    />
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Audit Process Timeline */}
          <section className="py-5">
            <Container>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={fadeUp}
              >
                <h2
                  className="text-center fw-bold mb-4"
                  style={{ color: "#e45c3c" }}
                >
                  Our Audit Process
                </h2>
              </motion.div>
              <Row className="g-4">
                {[
                  {
                    step: "01",
                    title: "Initial Consultation",
                    desc: "Understand your business and audit goals.",
                  },
                  {
                    step: "02",
                    title: "Document Review",
                    desc: "Collect and verify required records and returns.",
                  },
                  {
                    step: "03",
                    title: "Compliance Check",
                    desc: "Evaluate GST, TDS, and income tax status.",
                  },
                  {
                    step: "04",
                    title: "Report & Insights",
                    desc: "Deliver an audit report with key observations.",
                  },
                  {
                    step: "05",
                    title: "Recommendations",
                    desc: "Suggest corrective actions and ongoing support.",
                  },
                ].map((item, i) => (
                  <Col md={4} key={i}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-100 border-0 shadow-sm">
                        <Card.Body>
                          <h4 className="fw-bold text-primary">{item.step}</h4>
                          <h5 className="mb-2">{item.title}</h5>
                          <p className="text-muted mb-0">{item.desc}</p>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          {/* Why Choose Us */}
          <section className="py-5 bg-light">
            <Container>
              <Row className="align-items-center">
                <Col md={6}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={fadeUp}
                  >
                    <h2 className="fw-bold mb-3" style={{ color: "#e45c3c" }}>
                      Why Clients Choose Us
                    </h2>
                    <ul className="list-unstyled">
                      <li className="d-flex mb-3">
                        <FaShieldAlt className="text-warning me-3 mt-1" />
                        <span>
                          <strong>Confidential & Ethical:</strong> Data security
                          and professionalism guaranteed.
                        </span>
                      </li>
                      <li className="d-flex mb-3">
                        <FaBusinessTime className="text-danger me-3 mt-1" />
                        <span>
                          <strong>SME Focused:</strong> We simplify audit
                          language and guide you practically.
                        </span>
                      </li>
                      <li className="d-flex mb-3">
                        <FaUserTie className="text-success me-3 mt-1" />
                        <span>
                          <strong>Experience You Can Trust:</strong> Decades of
                          handling tax compliance and audits.
                        </span>
                      </li>
                    </ul>
                    <Button
                      href="/Akshar_Consultancy.pdf"
                      target="_blank"
                      download
                      variant="outline-primary"
                      className="mt-4"
                    >
                      <FaDownload className="me-2" /> Download Brochure
                    </Button>
                  </motion.div>
                </Col>
                <Col md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60"
                      alt="Why Choose Us"
                      className="img-fluid rounded-3 shadow"
                    />
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* CTA Section */}

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/9190676640237"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "fixed",
              bottom: "20px",
              left: "20px",
              backgroundColor: "#25d366",
              color: "#fff",
              borderRadius: "50%",
              width: "55px",
              height: "55px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              zIndex: 9999,
              fontSize: "24px",
            }}
          >
            <FaWhatsapp />
          </a>

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
    color: #e45c3c !important;
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

export default Audit;
