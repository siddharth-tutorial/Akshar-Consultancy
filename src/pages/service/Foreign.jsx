import React from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import bgImage from "../../assets/bg1.webp";
const ForeignAccountingDetailed = () => {
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
      <Header />
      <div style={heroStyles} className="hero-section">
        <div className="overlay-before"></div>
        <div className="overlay-after"></div>
        <Container style={contentStyle}>
          <Row>
            <Col>
              <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
                Foreign Accounting
              </h1>
              <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/service">Service</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                  Foreign Accounting
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <h1 className="mb-4 text-center">
          Comprehensive Foreign Accounting Services
        </h1>

        <Row className="mb-5">
          <Col>
            <p>
              In today's globalized economy, managing foreign income, assets,
              and tax obligations can be complex and challenging. At{" "}
              <strong>Akshar Consultancy</strong>, we specialize in providing
              expert foreign accounting services tailored to meet the unique
              needs of individuals and businesses dealing with cross-border
              financial matters.
            </p>
            <p>
              Whether you earn income abroad, hold foreign assets, or conduct
              international business transactions, understanding the intricate
              tax laws and regulatory compliance requirements is crucial. Our
              experienced team ensures your foreign accounting is handled with
              precision and compliance to avoid penalties and optimize your tax
              position.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <h3>Foreign Income Reporting</h3>
            <p>
              Accurate reporting of foreign income is mandatory under Indian
              Income Tax laws. We assist clients in documenting and reporting
              all income sources earned outside India, including salaries,
              business income, dividends, interest, and capital gains.
            </p>
            <p>
              Our team calculates the appropriate taxable amounts, applies the
              correct exchange rates as per RBI guidelines, and ensures timely
              filing of returns with complete disclosures.
            </p>
          </Col>
          <Col md={6}>
            <h3>Foreign Tax Credit & Double Taxation Avoidance</h3>
            <p>
              Avoid paying tax twice on the same income! We help you claim
              Foreign Tax Credits (FTC) under Double Taxation Avoidance
              Agreements (DTAA) between India and other countries. Our experts
              analyze your tax payments abroad and optimize your Indian tax
              liability accordingly.
            </p>
            <p>
              With comprehensive knowledge of treaties and international tax
              laws, we minimize your tax burden while maintaining full
              compliance.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <h3>Foreign Asset Disclosures</h3>
            <p>
              Indian taxpayers must disclose foreign assets and bank accounts in
              their income tax returns and comply with RBI's Foreign Exchange
              Management Act (FEMA) regulations. We guide you through the entire
              disclosure process, helping you avoid penalties or legal
              complications.
            </p>
            <p>
              From investment portfolios to foreign property, we ensure all
              assets are correctly reported with full transparency.
            </p>
          </Col>
          <Col md={6}>
            <h3>Currency Conversion & Compliance</h3>
            <p>
              Managing foreign currency transactions requires precise
              calculations to comply with RBI exchange rate rules and accounting
              standards. Our team handles currency conversion, recognizes
              gains/losses, and aligns accounting with Indian statutory
              requirements.
            </p>
            <p>
              Whether you need to prepare financial statements or file returns,
              we ensure accuracy and compliance in every step.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>Why Choose Akshar Consultancy?</h3>
            <ul>
              <li>
                <strong>Expertise in International Taxation:</strong> Years of
                experience handling complex foreign income and asset taxation.
              </li>
              <li>
                <strong>Personalized Solutions:</strong> Tailored advice to fit
                your unique financial situation and cross-border activities.
              </li>
              <li>
                <strong>Compliance Assurance:</strong> Keep worry-free with our
                rigorous adherence to all legal and regulatory requirements.
              </li>
              <li>
                <strong>Transparent Pricing:</strong> Clear fees with no hidden
                costs.
              </li>
              <li>
                <strong>Timely Support:</strong> Dedicated assistance to meet
                deadlines and avoid penalties.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4 text-center">
          <Col>
            <Button variant="primary" size="lg">
              Get Your Foreign Accounting Consultation
            </Button>
          </Col>
        </Row>
      </Container>
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
  );
};

export default ForeignAccountingDetailed;
