import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Loader from "./Loader";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [buttonAnimating, setButtonAnimating] = useState(false);

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Name is required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number")
      .required("Phone number is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid email address"
      )
      .required("Email is required"),

    message: Yup.string().trim().required("Message is required"),
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="contact-section py-5">
            <Container>
              <Row className="justify-content-center">
                <Col lg={10}>
                  <motion.div
                    className="glass-card p-4 p-md-5 rounded-4 shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <Row>
                      {/* Contact Info */}
                      <motion.div
                        className="text-white mb-4 mb-md-0 pe-md-5 col-md-5"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="fw-bold mb-3">Let’s Talk</h4>
                        <p className="mb-4">
                          Have questions about taxes, GST, or financial
                          planning? We’re here to help you with reliable
                          solutions.
                        </p>

                        <div className="mb-3 d-flex align-items-start">
                          <FaMapMarkerAlt className="me-3 mt-1 fs-5" />
                          <p className="mb-0">
                            A-505 RoseVill Sky, Opp. Pushkar Icon,
                            <br />
                            Ahmedabad, Gujarat - 382350
                          </p>
                        </div>

                        <div className="mb-3 d-flex align-items-center">
                          <FaPhoneAlt className="me-3 fs-5" />
                          <a
                            href="tel:+919067640237"
                            className="text-white text-decoration-none hover-link hover-underline"
                          >
                            +91 90676 40237,+91 89804 71710
                          </a>
                        </div>

                        <div className="mb-3 d-flex align-items-center">
                          <FaEnvelope className="me-3 fs-5" />
                          <a
                            href="mailto:aksharconsultancy99@gmail.com"
                            className="text-white text-decoration-none hover-link"
                          >
                            aksharconsultancy99@gmail.com
                          </a>
                        </div>
                      </motion.div>

                      {/* Contact Form */}
                      <motion.div
                        className="col-md-7"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="fw-semibold mb-4 text-white">
                          Get in Touch
                        </h4>
                        {submitted && (
                          <Alert variant="success">
                            Thank you! We'll contact you shortly.
                          </Alert>
                        )}

                        <Formik
                          initialValues={{
                            name: "",
                            phone: "",
                            email: "",
                            message: "",
                          }}
                          validationSchema={validationSchema}
                          onSubmit={(values, { resetForm }) => {
                            setSubmitted(true);
                            setButtonAnimating(true);
                            resetForm();
                            setTimeout(() => {
                              setButtonAnimating(false);
                              setSubmitted(false);
                            }, 4000);
                          }}
                        >
                          {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                          }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                              <Row>
                                <Col md={6} className="mb-4">
                                  <Form.Floating>
                                    <Form.Control
                                      id="name"
                                      type="text"
                                      placeholder="Full Name"
                                      value={values.name}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      isInvalid={touched.name && !!errors.name}
                                      className="glass-input"
                                    />
                                    <label htmlFor="name">Full Name</label>
                                    <Form.Control.Feedback type="invalid">
                                      {errors.name}
                                    </Form.Control.Feedback>
                                  </Form.Floating>
                                </Col>

                                <Col md={6} className="mb-4">
                                  <Form.Floating>
                                    <Form.Control
                                      id="phone"
                                      type="number"
                                      placeholder="Phone"
                                      value={values.phone}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      isInvalid={
                                        touched.phone && !!errors.phone
                                      }
                                      className="glass-input"
                                    />
                                    <label htmlFor="phone">Phone Number</label>
                                    <Form.Control.Feedback type="invalid">
                                      {errors.phone}
                                    </Form.Control.Feedback>
                                  </Form.Floating>
                                </Col>
                              </Row>

                              <Form.Floating className="mb-4">
                                <Form.Control
                                  id="email"
                                  type="email"
                                  placeholder="Email"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={touched.email && !!errors.email}
                                  className="glass-input"
                                />
                                <label htmlFor="email">Email Address</label>
                                <Form.Control.Feedback type="invalid">
                                  {errors.email}
                                </Form.Control.Feedback>
                              </Form.Floating>

                              <Form.Floating className="mb-4">
                                <Form.Control
                                  as="textarea"
                                  id="message"
                                  placeholder="Message"
                                  style={{ height: "120px" }}
                                  value={values.message}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={
                                    touched.message && !!errors.message
                                  }
                                  className="glass-input"
                                />
                                <label htmlFor="message">Your Message</label>
                                <Form.Control.Feedback type="invalid">
                                  {errors.message}
                                </Form.Control.Feedback>
                              </Form.Floating>

                              <div className="text-end">
                                <motion.div
                                  whileTap={{ scale: 0.9 }}
                                  whileHover={{ scale: 1.05 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                >
                                  <Button
                                    type="submit"
                                    variant="light"
                                    className={`submit-button px-4 py-2 fw-semibold ${
                                      buttonAnimating ? "fly" : ""
                                    }`}
                                    style={{ borderRadius: "30px" }}
                                  >
                                    <FaPaperPlane className="me-2" />
                                    Send Message
                                  </Button>
                                </motion.div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </motion.div>
                    </Row>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Full Width Map */}
          <div className="w-100">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.522981178017!2d72.66195142435235!3d23.05445671513943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e878bd3d4c3f9%3A0x218f4d26a542afaa!2sRosevill%20Sky!5e1!3m2!1sen!2sin!4v1749834240012!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <Footer />

          {/* Custom CSS */}
          <style jsx>{`
            .hover-underline {
              text-decoration: none; /* no underline by default */
              transition: all 0.3s ease;
            }

            .hover-underline:hover {
              text-decoration: underline;
            }

            .contact-section {
              background: linear-gradient(to right, #2c3e50, #3498db);
            }
            .glass-card {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(15px);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .glass-input {
              background-color: rgba(255, 255, 255, 0.2);
              color: white;
              border: 1px solid rgba(255, 255, 255, 0.3);
            }
            .glass-input:focus {
              background-color: rgba(255, 255, 255, 0.3);
              color: white;
              box-shadow: none;
              border-color: #fff;
            }
            .glass-input::placeholder {
              color: rgba(255, 255, 255, 0.7);
            }
            .submit-button.fly {
              animation: flyUp 0.6s ease-in-out forwards;
            }
            @keyframes flyUp {
              0% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
              50% {
                transform: translateY(-20px) scale(1.2);
                opacity: 0.7;
              }
              100% {
                transform: translateY(-40px) scale(0.8);
                opacity: 0;
              }
            }
            .hover-link:hover {
              color: #ffc107;
              text-decoration: underline;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default Contact;
