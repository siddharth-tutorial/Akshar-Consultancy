import React, { useState } from "react";
import Header from "../component/Header";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaCoins,
  FaFileInvoiceDollar,
  FaGlobeEurope,
  FaMoneyCheckAlt,
  FaPen,
  FaUniversity,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../component/Footer";
import bgImage from "../assets/bg1.webp";
function Service() {
  const services = [
    {
      title: "Bookkeeping",
      slug: "bookeeping",
      icon: <FaPen size={30} />,
      image: "https://static2.bigstockphoto.com/6/6/3/large1500/366399754.jpg",
      gradient: "linear-gradient(135deg, #ff6a00, #ee0979)",
    },
    {
      title: "Finance",
      slug: "msme",
      icon: <FaUniversity size={30} />,
      image:
        "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
      gradient: "linear-gradient(135deg, #1e3c72, #2a5298)",
    },
    {
      title: "TAX RETURN",
      slug: "taxreturn",
      icon: <FaMoneyCheckAlt size={30} />,
      image:
        "https://th-i.thgim.com/public/incoming/95hrwy/article69135505.ece/alternates/LANDSCAPE_1200/PO13_Tax_calculating.jpg",
      gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    },
    {
      title: "Audit",
      slug: "audit",
      icon: <FaCoins size={30} />,
      image:
        "https://i2.wp.com/www.dataprivacyadvisory.com/app/uploads/2022/10/AdobeStock_429325800-scaled.jpg",
      gradient: "linear-gradient(135deg, #ff512f, #dd2476)",
    },
    {
      title: "PAYROLL",
      slug: "payroll",
      icon: <FaFileInvoiceDollar size={30} />,
      image:
        "https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg",
      gradient: "linear-gradient(135deg, #000046, #1cb5e0)",
    },
    {
      title: "Foreign Accounting",
      slug: "foreign",
      icon: <FaGlobeEurope size={30} />,
      image:
        "https://avatars.mds.yandex.net/i?id=baf07b4ee305ca06e9491b20dab2334b93333101-8550886-images-thumbs&n=13",
      gradient: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);
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

  // Use brand colors for hover effect

  return (
    <div>
      <Header />
      <div style={heroStyles} className="hero-section">
        <div className="overlay-before"></div>
        <div className="overlay-after"></div>
        <Container style={contentStyle}>
          <Row>
            <Col>
              <h1 className="fw-bold display-4 mb-3 text-center text-md-start">
                Our Services
              </h1>
              <Breadcrumb className="custom-breadcrumb justify-content-center justify-content-md-start">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#e45c3c" }}>
                  Our Services
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="py-5 bg-light">
        <Container>
          <h4 className="text-center mb-4 head-title">Our Services</h4>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} xs={12} sm={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onMouseEnter={() => setFlippedIndex(index)}
                  onMouseLeave={() => setFlippedIndex(null)}
                  style={{
                    perspective: "1000px",
                    height: "320px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      transformStyle: "preserve-3d",
                      transition: "transform 0.6s",
                      transform:
                        flippedIndex === index
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                    }}
                  >
                    {/* Front */}
                    <Card
                      style={{
                        height: "100%",
                        backfaceVisibility: "hidden",
                        borderRadius: "16px",
                        overflow: "hidden",
                        position: "absolute",
                        width: "100%",
                      }}
                    >
                      <Card.Img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <Card.Body className="text-center">
                        <div
                          className="mb-3"
                          style={{
                            background: service.gradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {service.icon}
                        </div>
                        <Card.Title
                          className="fw-bold"
                          style={{
                            background: service.gradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {service.title}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                    {/* Back */}
                    <Card
                      style={{
                        background: service.gradient,
                        color: "#fff",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        position: "absolute",
                        width: "100%",
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="mb-3">{service.icon}</div>
                      <h5 className="fw-bold">{service.title}</h5>
                      <Link
                        to={`/service/${service.slug}`}
                        className="btn btn-light mt-3"
                      >
                        READ MORE
                      </Link>
                    </Card>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
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
}

export default Service;
