import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Breadcrumb,
} from "react-bootstrap";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import bgImage from "../../assets/bg1.webp";
import Loader from "../Loader";
import { FaWhatsapp } from "react-icons/fa";

const iconStyles = {
  width: "24px",
  height: "24px",
  marginRight: "8px",
  color: "#0d6efd",
};

const PayrollService = () => {
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
        <>
          <Header />
          <div style={heroStyles} className="hero-section">
            <div className="overlay-before"></div>
            <div className="overlay-after"></div>
            <Container style={contentStyle}>
              <Row>
                <Col>
                  <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
                    Payroll
                  </h1>
                  <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/service">Service</Breadcrumb.Item>
                    <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                      Payroll
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
            <Container>
              {/* Header */}
              <Row className="text-center mb-5">
                <Col>
                  <h2 className="fw-bold">End-to-End Payroll Solutions</h2>
                  <p className="text-muted">
                    Hassle-free payroll processing that ensures compliance,
                    accuracy, and peace of mind.
                  </p>
                </Col>
              </Row>

              {/* Main Content */}
              <Row className="align-items-center mb-5">
                <Col lg={6} className="mb-4 mb-lg-0">
                  <Image
                    src="https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg"
                    alt="Payroll Processing Illustration"
                    fluid
                    rounded
                  />
                </Col>

                <Col lg={6}>
                  <h4 className="fw-semibold mb-3">
                    Your Trusted Payroll Partner
                  </h4>
                  <p className="text-muted mb-4">
                    Managing payroll can be complex and time-consuming. At
                    Akshar Consultancy, we simplify the process by offering
                    comprehensive payroll services — from salary calculations to
                    statutory compliance — all while maintaining the highest
                    level of confidentiality.
                  </p>

                  <Row className="g-3">
                    <Col sm={6}>
                      <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="d-flex">
                          <svg
                            style={iconStyles}
                            fill="#0d6efd"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4 4h16v2H4V4zm0 6h16v2H4v-2zm0 6h10v2H4v-2z" />
                          </svg>
                          <div>
                            <Card.Title className="fs-6 mb-1">
                              Salary Processing
                            </Card.Title>
                            <Card.Text className="text-muted small">
                              Accurate monthly payroll with payslips, tax
                              deductions, and reimbursements.
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="d-flex">
                          <svg
                            style={iconStyles}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 1L3 5v6c0 5.25 3.66 10.74 9 12 5.34-1.26 9-6.75 9-12V5l-9-4zM5 7.03l7-3.11 7 3.11V11c0 4.39-3.08 8.88-7 10-3.92-1.12-7-5.61-7-10V7.03z" />
                          </svg>
                          <div>
                            <Card.Title className="fs-6 mb-1">
                              Statutory Compliance
                            </Card.Title>
                            <Card.Text className="text-muted small">
                              Timely filing of PF, ESI, PT, TDS, and labor law
                              obligations.
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="d-flex">
                          <svg
                            style={iconStyles}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                          </svg>
                          <div>
                            <Card.Title className="fs-6 mb-1">
                              Employee Records
                            </Card.Title>
                            <Card.Text className="text-muted small">
                              Manage leaves, attendance, and employee HR
                              documentation efficiently.
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="d-flex">
                          <svg
                            style={iconStyles}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                          </svg>
                          <div>
                            <Card.Title className="fs-6 mb-1">
                              Year-End Reports
                            </Card.Title>
                            <Card.Text className="text-muted small">
                              Form 16, tax reports, and audit-ready documents
                              prepared on time.
                            </Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>

              {/* CTA */}
              <Row className="text-center mt-5">
                <Col>
                  <h5 className="fw-semibold mb-3">
                    Focus on Growth, Leave Payroll to Us
                  </h5>
                  <p className="text-muted">
                    Whether you're a startup or an enterprise, we ensure your
                    payroll is handled with precision and care.
                  </p>
                  <Button variant="primary" size="lg">
                    Schedule a Free Payroll Consultation
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
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
        </>
      )}
    </>
  );
};

export default PayrollService;
