import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import b1 from "../../assets/b-1.jpeg";
import b5 from "../../assets/b-5.jpg";
import bgImage from "../../assets/bg1.webp";
import Loader from "../Loader";
import { FaWhatsapp } from "react-icons/fa";
function Msme() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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

          {/* Hero */}
          <div style={heroStyles} className="hero-section">
            <div className="overlay-before"></div>
            <div className="overlay-after"></div>
            <Container style={contentStyle}>
              <Row>
                <Col>
                  <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
                    Finance,MSME Subsidy
                  </h1>
                  <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/service">Service</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                      Finance,MSME Subsidy
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Container>
          </div>

          {/* MSME Subsidy Assistance */}
          <section className="py-5 bg-white">
            <Container>
              <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <h4 className="fw-bold mb-3 text-primary">
                      MSME Subsidy Assistance
                    </h4>
                    <p>
                      Government subsidies for MSMEs are essential for reducing
                      costs, improving efficiency, and increasing
                      competitiveness. At Akshar Consultancy, we simplify the
                      entire subsidy application process so you can focus on
                      growing your business.
                    </p>
                    <p>
                      Whether you're a manufacturer upgrading equipment or a
                      service provider expanding operations, our team ensures
                      that you receive the maximum benefits available under
                      various Central and State subsidy schemes.
                    </p>

                    <ul className="mb-4">
                      <li>
                        <strong>Capital Subsidy:</strong> Helps reduce
                        investment burden on new machinery and infrastructure.
                        Ideal for modernization or capacity expansion.
                      </li>
                      <li>
                        <strong>Interest Subsidy:</strong> Enables you to avail
                        loans at lower interest rates by reimbursing a portion
                        of the interest paid.
                      </li>
                      <li>
                        <strong>Net GST Subsidy:</strong> Refunds on the GST
                        paid on purchases help maintain healthy cash flow for
                        daily operations.
                      </li>
                    </ul>

                    <p>
                      <strong>We assist with:</strong> Eligibility assessment,
                      documentation, application filing, follow-ups with
                      departments, and receiving disbursement on time.
                    </p>

                    <p>
                      Don't miss out on the financial benefits that are
                      rightfully yours. Our consultants guide you step-by-step
                      so your business doesn’t lose out due to technical errors
                      or delays.
                    </p>

                    <Button variant="primary" className="mt-3" href="/contact">
                      Apply for Subsidy
                    </Button>
                  </motion.div>
                </Col>

                <Col md={6}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={b1}
                      alt="MSME Subsidy"
                      className="img-fluid rounded shadow"
                      style={{
                        maxHeight: "600px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </section>

          {/* MSME Finance Assistance */}
          <section className="py-5 bg-light">
            <Container>
              <Row className="align-items-center">
                <Col md={6} className="order-2 order-md-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={b5}
                      alt="MSME Finance"
                      className="img-fluid rounded shadow"
                      style={{
                        maxHeight: "600px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </motion.div>
                </Col>

                <Col md={6} className="order-1 order-md-2 mb-4 mb-md-0">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <h4 className="fw-bold mb-3 text-success">
                      MSME Finance Assistance
                    </h4>
                    <p>
                      Every MSME requires funding at some stage — whether for
                      starting operations, purchasing machinery, hiring
                      manpower, or handling seasonal demand. Akshar Consultancy
                      provides end-to-end guidance for getting the right
                      financial support.
                    </p>
                    <p>
                      Our consultants work with you to prepare loan proposals,
                      ensure documentation accuracy, and liaise with banks or
                      NBFCs to secure financing quickly and efficiently.
                    </p>

                    <ul className="mb-4">
                      <li>
                        <strong>Working Capital Loans:</strong> Smoothen daily
                        operations like raw material purchase, salaries, rent,
                        etc., with short-term funding.
                      </li>
                      <li>
                        <strong>Term Loans:</strong> Suitable for asset
                        purchase, equipment upgrade, business expansion, or real
                        estate acquisition.
                      </li>
                      <li>
                        <strong>Collateral-Free Loans:</strong> Avail loans
                        under CGTMSE and other schemes without providing
                        property/security.
                      </li>
                    </ul>

                    <p>
                      <strong>Our finance support includes:</strong> bank
                      coordination, business projections, financial ratios
                      analysis, credit score review, and post-sanction
                      compliance support.
                    </p>

                    <p>
                      With Akshar Consultancy, you gain a long-term partner who
                      supports not just loan approval, but also renewal,
                      top-ups, and restructuring when needed.
                    </p>

                    <Button variant="success" className="mt-3" href="/contact">
                      Apply for Finance
                    </Button>
                  </motion.div>
                </Col>
              </Row>
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
}

export default Msme;
