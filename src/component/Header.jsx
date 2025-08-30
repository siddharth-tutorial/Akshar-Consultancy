import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  Modal,
  Card,
  Row,
  Col,
  InputGroup,
  NavDropdown,
} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoLocation } from "react-icons/io5";
import { FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import * as Yup from "yup";

const Header = () => {
  const [show, setShow] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Brand colors
  const brandColors = {
    primary: "#e45c3c",
    primaryDark: "#fd7e14",
    accent: "#fd7e14",
    accentDark: "#fd7e14",
    deep: "#da4b2d",
  };

  // Styles for links
  const defaultLinkStyle = {
    position: "relative",
    fontWeight: 600,
    color: "#333",
    textDecoration: "none",
    paddingBottom: "4px",
    borderBottom: "2px solid transparent",
    transition: "all 0.3s ease",
  };

  const activeLinkStyle = {
    ...defaultLinkStyle,
    color: brandColors.primaryDark,
    borderBottom: `2px solid ${brandColors.primary}`,
  };

  const hoverLinkStyle = {
    ...defaultLinkStyle,
    color: brandColors.primary,
    borderBottom: `2px solid ${brandColors.primary}`,
  };

  const getLinkStyle = (path, isHovered) => {
    const isActive = location.pathname === path;
    if (isHovered) return hoverLinkStyle;
    return isActive ? activeLinkStyle : defaultLinkStyle;
  };

  // ✅ Formik Validation Schema
  const InquirySchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
      .required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // ✅ Send Email function
  const sendEmail = (values, { resetForm, setSubmitting }) => {
    emailjs
      .send("service_2972obs", "template_o39oevo", values, "l5Lgkphm5U96EYtna")
      .then(
        () => {
          toast.success("Email sent successfully!");
          resetForm();
          handleClose();
        },
        (error) => {
          toast.error("Failed to send email.");
          console.error(error.text);
        }
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <Navbar expand="lg" bg="white" variant="light" className="shadow-sm py-2">
        <Container>
          {/* Logo & Title */}
          <Navbar.Brand href="/" className="d-flex align-items-center p-0 m-0">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "70px", marginRight: "10px" }}
            />
            <div className="d-flex flex-column">
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: brandColors.deep,
                }}
              >
                Akshar Consultancy
              </span>
              <small
                style={{
                  fontSize: "0.9rem",
                  color: brandColors.primary,
                  fontStyle: "italic",
                }}
              >
                Tax Consultant
              </small>
            </div>
          </Navbar.Brand>

          {/* Menu */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center gap-lg-4">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/team", label: "Our Team" },
                { path: "/service", label: "Service" },
              ].map((link) => (
                <Nav.Link
                  key={link.path}
                  href={link.path}
                  style={getLinkStyle(link.path, hoveredLink === link.path)}
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink("")}
                >
                  {link.label}
                </Nav.Link>
              ))}

              {/* Calculator Dropdown */}
              <NavDropdown
                title="Calculator"
                id="calculator-dropdown"
                style={getLinkStyle(
                  "/calculator",
                  hoveredLink === "/calculator"
                )}
                onMouseEnter={() => setHoveredLink("/calculator")}
                onMouseLeave={() => setHoveredLink("")}
              >
                {[
                  {
                    path: "/calculator/incometax",
                    label: "Income Tax Calculator",
                  },
                  { path: "/calculator/tds", label: "TDS Calculator" },
                  { path: "/calculator/gst", label: "GST Calculator" },
                  {
                    path: "/calculator/netprofit",
                    label: "Net Profit Calculator",
                  },
                ].map((item) => {
                  const isHovered = hoveredLink === item.path;
                  return (
                    <NavDropdown.Item
                      key={item.path}
                      as={NavLink}
                      to={item.path}
                      style={getLinkStyle(item.path, isHovered)}
                      onMouseEnter={() => setHoveredLink(item.path)}
                      onMouseLeave={() => setHoveredLink("")}
                    >
                      {item.label}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>

              <Nav.Link
                href="/contact"
                style={getLinkStyle("/contact", hoveredLink === "/contact")}
                onMouseEnter={() => setHoveredLink("/contact")}
                onMouseLeave={() => setHoveredLink("")}
              >
                Contact
              </Nav.Link>
            </Nav>

            {/* Button */}
            <Button
              className="px-3 py-2 border-0 text-white mt-3 mt-lg-0 mx-auto d-block d-lg-inline"
              style={{
                background: `linear-gradient(45deg, ${brandColors.primary}, ${brandColors.accent})`,
                fontWeight: "600",
              }}
              onClick={handleShow}
            >
              Download Brochure
            </Button>

            {/* Modal */}
            <Modal
              show={show}
              onHide={handleClose}
              centered
              backdrop="static"
              keyboard={false}
              size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title
                  className="fs-4 fw-semibold"
                  style={{ color: brandColors.primary }}
                >
                  📩 Inquiry Form
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Row>
                  <Col md={7} sm={12}>
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      }}
                      validationSchema={InquirySchema}
                      onSubmit={sendEmail}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                      }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                          <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>👤</InputGroup.Text>
                              <Form.Control
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.name && !!errors.name}
                                placeholder="Enter your name"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.name}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <MdEmail />
                              </InputGroup.Text>
                              <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.email && !!errors.email}
                                placeholder="Enter your email"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.email}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <FaPhoneAlt />
                              </InputGroup.Text>
                              <Form.Control
                                type="tel"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.phone && !!errors.phone}
                                placeholder="Enter phone number"
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.phone}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                              type="text"
                              name="subject"
                              value={values.subject}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.subject && !!errors.subject}
                              placeholder="Subject"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.subject}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              name="message"
                              value={values.message}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.message && !!errors.message}
                              placeholder="Your message here..."
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.message}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                              backgroundColor: brandColors.accentDark,
                              border: "none",
                              fontWeight: 600,
                            }}
                            className="w-100"
                          >
                            {isSubmitting ? "Sending..." : "Send Inquiry"}{" "}
                            <FaLongArrowAltRight className="ms-2" />
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Col>

                  {/* Contact Info */}
                  <Col md={5} sm={12} className="mt-4 mt-md-0">
                    <Card className="mb-3 shadow-sm">
                      <Card.Body>
                        <Card.Title
                          className="fs-6 fw-bold mb-2"
                          style={{ color: brandColors.primaryDark }}
                        >
                          Contact Details
                        </Card.Title>
                        <Card.Text className="mb-2">
                          <MdEmail
                            className="me-2"
                            style={{ color: brandColors.accent }}
                          />
                          aksharconsultancy99@gmail.com
                        </Card.Text>
                        <Card.Text className="mb-2">
                          <FaPhoneAlt
                            className="me-2"
                            style={{ color: brandColors.accent }}
                          />
                          +91 90676 40237
                        </Card.Text>
                        <Card.Text className="mb-2">
                          <FaPhoneAlt
                            className="me-2"
                            style={{ color: brandColors.accent }}
                          />
                          +91 89804 71710
                        </Card.Text>
                        <Card.Text className="mb-0">
                          <IoLocation
                            className="me-2"
                            style={{ color: brandColors.accent }}
                          />
                          A-505, Rose Vill Sky, Ahmedabad
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>

            <ToastContainer position="top-right" autoClose={3000} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
