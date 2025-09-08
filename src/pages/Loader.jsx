import React from "react";
import { Container } from "react-bootstrap";

const Loader = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {/* Ripple animation container */}
      <div className="ripple-loader">
        <div className="circle one"></div>
        <div className="circle two"></div>
      </div>

      {/* Loading text */}
      <span className="loading-text">Loading...</span>

      {/* Inline CSS for ripple effect */}
      <style>{`
        .ripple-loader {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .circle {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: #CD5C5C;
          transform: translate(-50%, -50%);
          opacity: 0.7;
        }

        .circle.one {
          animation: rippleOne 2s infinite ease-in-out;
        }

        .circle.two {
          animation: rippleTwo 2s infinite ease-in-out;
        }

        @keyframes rippleOne {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.7;
          }
          100% {
            width: 120px;
            height: 120px;
            opacity: 0;
          }
        }

        @keyframes rippleTwo {
          0%, 40% {
            width: 0px;
            height: 0px;
            opacity: 0.7;
          }
          100% {
            width: 120px;
            height: 120px;
            opacity: 0;
          }
        }

        .loading-text {
          margin-top: 20px;
          font-family: sans-serif;
          font-size: 20px;
          font-weight: bold;
          color: #CD5C5C;
        }
      `}</style>
    </Container>
  );
};

export default Loader;
