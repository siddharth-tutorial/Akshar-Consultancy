import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Button,
  ListGroup,
} from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import b4 from "../../assets/b-4.jpg";
import b5 from "../../assets/1b.png";
import b6 from "../../assets/2b.png";
import { FaWhatsapp, FaDownload, FaCheckCircle } from "react-icons/fa";
import bgImage from "../../assets/bg1.webp";
import Loader from "../Loader";
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TaxReturn = () => {
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
  const processSteps = [
    "Initial Consultation & Requirement Gathering",
    "Collection of Income, Investment, and Deduction Documents",
    "Detailed Tax Computation & Optimization Strategy",
    "Preparation of Draft Return & Client Review",
    "Final Return Filing & Acknowledgement Generation",
    "Post-Filing Guidance, Compliance & Year-Round Assistance",
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const AnimatedSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
      >
        {children}
      </motion.div>
    );
  };

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
                    Tax Return Services
                  </h1>
                  <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/service">Service</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                      Tax Return Services
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Income Tax Filing Services */}
          <section className="py-5 bg-light">
            <Container>
              <AnimatedSection>
                <Row>
                  <Col md={6} className="mb-4">
                    <h3 className="fw-bold mb-3">Income Tax Filing Services</h3>
                    <p>
                      At Akshar Consultancy, we understand that every taxpayer
                      is unique...
                    </p>
                    <h5 className="fw-bold mt-4">Our Offerings:</h5>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        ✔ ITR Filing for Salaried...
                      </ListGroup.Item>
                      <ListGroup.Item>✔ Capital Gains...</ListGroup.Item>
                      <ListGroup.Item>
                        ✔ Income from Multiple Sources
                      </ListGroup.Item>
                      <ListGroup.Item>✔ Tax Deduction Planning</ListGroup.Item>
                      <ListGroup.Item>
                        ✔ Late Filing or Revised Returns
                      </ListGroup.Item>
                      <ListGroup.Item>✔ Tax Notice Handling</ListGroup.Item>
                    </ListGroup>
                    <Button
                      href="/Akshar_Consultancy.pdf"
                      target="_blank"
                      download
                      variant="outline-primary"
                      className="mt-4"
                    >
                      <FaDownload className="me-2" /> Download Brochure
                    </Button>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src={b4}
                      alt="Tax Services"
                      className="img-fluid rounded shadow"
                      loading="lazy"
                    />
                  </Col>
                </Row>
              </AnimatedSection>
            </Container>
          </section>

          {/* GST Section */}
          <section className="py-5">
            <Container>
              <AnimatedSection>
                <Row>
                  <Col md={6} className="text-center mb-4">
                    <img
                      src={b6}
                      alt="GST Filing"
                      className="img-fluid rounded shadow"
                      loading="lazy"
                    />
                  </Col>
                  <Col md={6}>
                    <h3 className="fw-bold mb-3">GST Filing & Compliance</h3>
                    <p>GST filing can be complex and time-sensitive...</p>
                    <h5 className="fw-bold mt-4">Our GST Solutions:</h5>
                    <ListGroup variant="flush">
                      <ListGroup.Item>✔ GST Registration</ListGroup.Item>
                      <ListGroup.Item>✔ GSTR-1, GSTR-3B</ListGroup.Item>
                      <ListGroup.Item>✔ Reconciliation of ITC</ListGroup.Item>
                      <ListGroup.Item>✔ Monthly Filings</ListGroup.Item>
                      <ListGroup.Item>✔ GST Audit Assistance</ListGroup.Item>
                      <ListGroup.Item>✔ GST Notice Handling</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </AnimatedSection>
            </Container>
          </section>

          {/* TDS Section */}
          <section className="py-5 bg-light">
            <Container>
              <AnimatedSection>
                <Row>
                  <Col md={6}>
                    <h3 className="fw-bold mb-3">TDS Return Filing</h3>
                    <p>Ensure your business remains compliant...</p>
                    <h5 className="fw-bold mt-4">Our TDS Offerings:</h5>
                    <ListGroup variant="flush">
                      <ListGroup.Item>✔ TDS Computation</ListGroup.Item>
                      <ListGroup.Item>✔ Quarterly e-Filing</ListGroup.Item>
                      <ListGroup.Item>✔ Form 16/16A Preparation</ListGroup.Item>
                      <ListGroup.Item>✔ PAN Verification</ListGroup.Item>
                      <ListGroup.Item>✔ Corrections & Defaults</ListGroup.Item>
                      <ListGroup.Item>✔ Compliance Support</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src={b5}
                      alt="TDS Filing"
                      className="img-fluid rounded shadow"
                      loading="lazy"
                    />
                  </Col>
                </Row>
              </AnimatedSection>
            </Container>
          </section>

          {/* Process Timeline */}
          <section className="py-5">
            <Container>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="text-center fw-bold mb-4">Our Filing Process</h3>
                <p className="text-center mb-5">
                  Our step-by-step filing process ensures transparency and
                  efficiency.
                </p>
                <Row className="g-4">
                  {processSteps.map((step, index) => (
                    <Col xs={12} md={4} key={index}>
                      <motion.div
                        className="p-4 text-center border rounded shadow-sm h-100 bg-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaCheckCircle
                          className="text-success mb-3"
                          size={28}
                        />
                        <h6 className="fw-bold">{step}</h6>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Container>
          </section>

          {/* Why Choose Us */}
          <section className="py-5 bg-light">
            <Container>
              <AnimatedSection>
                <h3 className="text-center fw-bold mb-4">
                  Why Akshar Consultancy?
                </h3>
                <Row className="my-5 justify-content-center text-start">
                  <Col md={5} className="mb-3">
                    <ul className="ps-0 list-unstyled">
                      <li className="mb-2">✅ Over 8 Years of Tax Expertise</li>
                      <li className="mb-2">✅ Personalized Guidance</li>
                      <li className="mb-2">✅ Transparent Fee Structure</li>
                      <li className="mb-2">
                        ✅ Timely Filing to Avoid Penalties
                      </li>
                    </ul>
                  </Col>
                  <Col md={5} className="mb-3">
                    <ul className="ps-0 list-unstyled">
                      <li className="mb-2">✅ Support for Tax Notices</li>
                      <li className="mb-2">✅ Confidentiality Guaranteed</li>
                      <li className="mb-2">✅ Online + In-Person Help</li>
                      <li className="mb-2">
                        ✅ Trusted by SMEs & Professionals
                      </li>
                    </ul>
                  </Col>
                </Row>
              </AnimatedSection>
            </Container>
          </section>

          {/* WhatsApp Floating */}
          <a
            href="https://wa.me/919067640237"
            className="position-fixed"
            style={{
              bottom: "20px",
              left: "20px",
              backgroundColor: "#25D366",
              color: "white",
              padding: "12px",
              borderRadius: "50%",
              zIndex: 9999,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
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
};

export default TaxReturn;
