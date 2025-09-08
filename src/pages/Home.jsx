import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

import b1 from "../assets/img-1.png";
import b2 from "../assets/img-2.webp";
import b3 from "../assets/img-3.webp";

import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";

import "animate.css";
import { motion } from "framer-motion";
import {
  FaCoins,
  FaMoneyCheckAlt,
  FaPen,
  FaUniversity,
  FaFileInvoiceDollar,
  FaGlobeEurope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const slideDelay = 4000;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const slides = [
    {
      image: b1,
      heading: "Simplifying Your Tax Journey",
      subtext: "Expert guidance for individuals & businesses across Gujarat.",
      buttonText: "Explore Services",
      link: "/service/msme",
    },
    {
      image: b2,
      heading: "Trusted Financial Advisory",
      subtext:
        "From project finance to government subsidies — we’ve got you covered.",
      buttonText: "Get Consultation",
      link: "/contact",
    },
    {
      image: b3,
      heading: "Startup & Compliance Made Easy",
      subtext: "Company Registration, GST, and Audit support under one roof.",
      buttonText: "Learn More",
      link: "/about",
    },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (animationDone) {
      const timer = setTimeout(() => {
        const nextIndex = (activeIndex + 1) % slides.length;
        setActiveIndex(nextIndex);
        setAnimationDone(false);
      }, slideDelay);
      return () => clearTimeout(timer);
    }
  }, [animationDone, activeIndex]);

  // Responsive font sizes
  const getHeadingSize = () => {
    if (windowWidth < 576) return "2rem"; // mobile
    if (windowWidth < 992) return "2.5rem"; // tablet
    return "3rem"; // desktop
  };

  const getSubtextSize = () => {
    if (windowWidth < 576) return "1rem";
    if (windowWidth < 992) return "1.1rem";
    return "1.25rem";
  };

  const getButtonPadding = () => {
    if (windowWidth < 576) return "8px 16px";
    if (windowWidth < 992) return "9px 20px";
    return "10px 24px";
  };

  const getButtonFontSize = () => {
    if (windowWidth < 576) return "0.85rem";
    if (windowWidth < 992) return "0.95rem";
    return "1rem";
  };

  const services = [
    {
      title: "Bookkeeping",
      icon: <FaPen size={30} />,
      image: "https://static2.bigstockphoto.com/6/6/3/large1500/366399754.jpg",
      gradient: "linear-gradient(135deg, #e45c3c, #e5613d)",
    },
    {
      title: "Finance",
      icon: <FaUniversity size={30} />,
      image:
        "https://avatars.mds.yandex.net/get-altay/12813969/2a0000018e16a8c1a6609b070fa83c18bac9/XXL_height",
      gradient: "linear-gradient(135deg, #dc522e, #e1553a)",
    },
    {
      title: "TAX RETURN",
      icon: <FaMoneyCheckAlt size={30} />,
      image:
        "https://th-i.thgim.com/public/incoming/95hrwy/article69135505.ece/alternates/LANDSCAPE_1200/PO13_Tax_calculating.jpg",
      gradient: "linear-gradient(135deg, #e5613d, #e45c3c)",
    },
    {
      title: "Audit",
      icon: <FaCoins size={30} />,
      image:
        "https://i2.wp.com/www.dataprivacyadvisory.com/app/uploads/2022/10/AdobeStock_429325800-scaled.jpg",
      gradient: "linear-gradient(135deg, #e1553a, #da4b2d)",
    },
    {
      title: "PAYROLL",
      icon: <FaFileInvoiceDollar size={30} />,
      image:
        "https://img.freepik.com/free-photo/top-view-payroll-concept-with-items_23-2149103952.jpg",
      gradient: "linear-gradient(135deg, #e45c3c, #dc522e)",
    },
    {
      title: "Foreign Accounting",
      icon: <FaGlobeEurope size={30} />,
      image:
        "https://avatars.mds.yandex.net/i?id=baf07b4ee305ca06e9491b20dab2334b93333101-8550886-images-thumbs&n=13",
      gradient: "linear-gradient(135deg, #e5613d, #da4b2d)",
    },
  ];

  useEffect(() => {
    // simulate async loading (API call / assets load etc.)
    const timer = setTimeout(() => {
      setLoading(false); // loader close
    }, 3000); // 3 sec demo

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // 👈 loader fullscreen
      ) : (
        <>
          <Header />

          {/* Carousel */}

          <Carousel
            fade
            activeIndex={activeIndex}
            controls={false}
            indicators
            interval={null}
          >
            {slides.map((slide, idx) => (
              <Carousel.Item key={idx}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "92vh", // fixed height for all slides
                    minHeight: "400px", // ensures some minimum height on small screens
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={slide.image}
                    className="d-block w-100"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%", // fill the div, maintain same height
                      filter: "brightness(70%)",
                    }}
                    alt={`Slide ${idx}`}
                    loading="lazy"
                  />
                  <motion.div
                    key={activeIndex}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "#fff",
                      textAlign: "center",
                      zIndex: 10,
                      padding: windowWidth < 576 ? "0 10px" : "0 20px",
                      width: windowWidth < 576 ? "90%" : "auto",
                    }}
                  >
                    <motion.h1
                      style={{
                        fontSize: getHeadingSize(),
                        fontWeight: "bold",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundImage:
                          "linear-gradient(to right, #e45c3c, #da4b2d)",
                        marginBottom: "1rem",
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      {slide.heading}
                    </motion.h1>
                    <motion.p
                      style={{
                        fontSize: getSubtextSize(),
                        color: "#f0f0f0",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      {slide.subtext}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      onAnimationComplete={() => setAnimationDone(true)}
                    >
                      <Button
                        href={slide.link}
                        style={{
                          marginTop: "1.5rem",
                          padding: getButtonPadding(),
                          fontWeight: 600,
                          fontSize: getButtonFontSize(),
                          background:
                            "linear-gradient(to right, #e45c3c, #dc522e)",
                          border: "none",
                          borderRadius: "8px",
                        }}
                      >
                        {slide.buttonText}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* About Section */}
          <section
            style={{
              padding: "80px 20px",
              background: "linear-gradient(135deg, #fdf2ef, #ffffff)",
            }}
          >
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Row className="justify-content-center text-center mb-4">
                  <Col md={8}>
                    <h2 className="fw-bold display-5">
                      Discover{" "}
                      <span style={{ color: "#e45c3c" }}>
                        Akshar Consultancy
                      </span>
                    </h2>
                  </Col>
                </Row>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Row className="justify-content-center">
                  <Col md={10}>
                    <p
                      className="text-center fs-5 text-muted fw-medium"
                      style={{ lineHeight: "1.8" }}
                    >
                      At <strong>Akshar Consultancy</strong>, we empower
                      entrepreneurs and businesses to grow with confidence.
                      Based in Ahmedabad, we offer comprehensive financial and
                      strategic support across Gujarat — from{" "}
                      <strong>Taxation & GST</strong> to{" "}
                      <strong>Business Loans</strong>,{" "}
                      <strong>Project Financing</strong>,{" "}
                      <strong>Government Subsidy Advisory</strong>, and{" "}
                      <strong>Company Registrations</strong>. Our client-first
                      approach and deep domain expertise help you make informed,
                      profitable decisions.
                    </p>
                  </Col>
                </Row>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Row className="justify-content-center mt-4">
                  <Col xs="auto">
                    <Button
                      href="/about"
                      className="px-4 py-2 fw-semibold rounded-pill"
                      style={{
                        background:
                          "linear-gradient(to right, #e45c3c, #dc522e)",
                        border: "none",
                        fontSize: "1.1rem",
                      }}
                    >
                      Learn More
                    </Button>
                  </Col>
                </Row>
              </motion.div>
            </Container>
          </section>

          {/* Services Section */}
          <section className="py-5 bg-light">
            <Container>
              <h4
                className="text-center fw-bold text-uppercase pb-2 mb-4 border-bottom d-inline-block"
                style={{ borderColor: "#e45c3c" }}
              >
                Our Services
              </h4>
              <Row>
                {services.map((service, index) => (
                  <Col key={index} xs={12} sm={6} lg={4} className="mb-4">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setFlippedIndex(index)}
                      onMouseLeave={() => setFlippedIndex(null)}
                      style={{
                        perspective: "1200px",
                        height: "340px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          transformStyle: "preserve-3d",
                          transition: "transform 0.7s ease-in-out",
                          transform:
                            flippedIndex === index
                              ? "rotateY(180deg)"
                              : "rotateY(0deg)",
                        }}
                      >
                        {/* Front Side */}
                        <Card
                          className="shadow-lg"
                          style={{
                            height: "100%",
                            backfaceVisibility: "hidden",
                            borderRadius: "18px",
                            overflow: "hidden",
                            position: "absolute",
                            width: "100%",
                            transition: "transform 0.3s",
                          }}
                        >
                          <Card.Img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            style={{
                              height: "200px",
                              objectFit: "cover",
                              filter: "brightness(0.9)",
                            }}
                          />
                          <Card.Body className="text-center">
                            <div
                              className="mb-3 fs-2"
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

                        {/* Back Side */}
                        <Card
                          className="shadow-lg"
                          style={{
                            background: service.gradient,
                            color: "#fff",
                            height: "100%",
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            position: "absolute",
                            width: "100%",
                            borderRadius: "18px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "20px",
                          }}
                        >
                          <div className="mb-3 fs-2">{service.icon}</div>
                          <h5 className="fw-bold text-center">
                            {service.title}
                          </h5>
                          <Link
                            to={"/service"}
                            className="btn btn-light mt-3 fw-bold px-4 rounded-pill shadow-sm"
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
        </>
      )}
    </>
  );
}

export default Home;
