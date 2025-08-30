import React from "react";
import { Container, Row, Col, Card, Button, Breadcrumb } from "react-bootstrap";
import bgImage from "../../assets/bg1.webp";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Bookkeeping = () => {
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
                Bookkeeping
              </h1>
              <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/service">Service</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                  Bookkeeping
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>

      {/* What is Bookkeeping? */}
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h2 className="text-center">What is Bookkeeping?</h2>
            <p className="text-center text-muted">
              Bookkeeping is the process of recording and organizing all the
              financial transactions of your business. It provides a solid
              foundation for financial decision-making, ensuring accuracy and
              compliance.
            </p>
          </Col>
        </Row>

        {/* Benefits Section */}
        <Row className="text-center mb-5">
          <Col md={4}>
            <h5>📊 Financial Clarity</h5>
            <p>
              Track your business performance with up-to-date financial records.
            </p>
          </Col>
          <Col md={4}>
            <h5>🧾 Accurate Tax Filing</h5>
            <p>Avoid penalties with accurate reports and timely submissions.</p>
          </Col>
          <Col md={4}>
            <h5>💼 Better Business Decisions</h5>
            <p>Use organized data to make informed financial decisions.</p>
          </Col>
        </Row>

        {/* Services Offered */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Our Bookkeeping Services</h2>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Daily Transaction Recording</Card.Title>
                <Card.Text>
                  We handle all your daily expenses and income entries with
                  accuracy and consistency.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Bank Reconciliation</Card.Title>
                <Card.Text>
                  Matching your books with bank statements to ensure everything
                  adds up correctly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Financial Reports</Card.Title>
                <Card.Text>
                  Get monthly profit & loss, balance sheet, and cash flow
                  statements for clarity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>GST & TDS Recordkeeping</Card.Title>
                <Card.Text>
                  Ensure proper classification and record maintenance for GST
                  and TDS returns.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Accounts Payable/Receivable</Card.Title>
                <Card.Text>
                  Stay on top of invoices, bills, and payments with accurate
                  aging reports.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Customized Reports</Card.Title>
                <Card.Text>
                  We provide tailored reports as per your business needs for
                  better analysis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="bg-dark text-white py-5 text-center">
        <Container>
          <h3>Need Help Managing Your Books?</h3>
          <p>
            Our experts ensure error-free bookkeeping so you can focus on
            growing your business.
          </p>
          <Button variant="light" size="lg" href="/contact">
            Contact Us
          </Button>
        </Container>
      </div>
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
  );
};

export default Bookkeeping;
