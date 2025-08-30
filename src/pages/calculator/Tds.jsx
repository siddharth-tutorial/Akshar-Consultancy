import React, { useState, useEffect } from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const sectionRates = {
  "193,interest on Securities": 10,
  "194, Dividend": 10,
  "194A,Interest other than interest on Securities": 10,
  "194B, Winnings from lotteries, crossword puzzles,": 30,
  "194BB,Winnings from Horse Races": 30,
  "194C, Payment to Contractor/Sub Contractor(INDIVIDUAL/HUF)": 1,
  "194C,payment to Contractors/Sub Contractor(OTHERS)": 2,
  "194C,Payment to Transporter": 0,
  "194D,Insurance Commission": 5,
  "194E,Non-Resident Sportsman or Sports Association": 20,
  "194EE,Payment for National Savings Scheme": 10,
  "194F,Payment for Repurchase of units": 15,
  "194G,Commission on Sale of Lottery Ticket": 5,
  "194H,Commission": 5,
  "194I,Rent on Land and Building": 10,
  "194I,Rent on Plant and Machinery": 2,
  "194IA,Payment on Transfer of Immoveable Property": 1,
  "194IB,payment on Rent by Individual/HUF": 5,
  "194J,Fees for Professional or Technical Services": 10,
  "194J,remuneration or commission paid to director": 10,
  "194J,Fee for Technical Services": 2,
  "194J,Payments to Call Center Operator": 2,
  "194LA,Payment of Compensation for Immovable Property": 10,
  "194LB,Interest from infrastructure debt fund": 5,
  "194LC,Interest from specified indian company": 5,
  "194K,Payment of Dividend by Mutual Funds": 10,
  "194M,Payment to Contractors/Professional by Individual/HUF": 5,
  "194N,TDS on Cash Withdrawls above 1 Crore": 2,
  "194O,TDS on Ecommerce Participants": 1,
  "195,Payment to NOn-Resident (Long Term Capital Gains)": 20,
  "195,Payment to Non-Resident(Rent)": 30,
  "195,Payment to Non-Resident(Royality)": 50,
  "195,Payment to Non-Resident (Winning from Lottery /Horse Races etc.)": 30,
  "206C,Alcoholic liquor for human consumption": 1,
  "206c,Timber obtained under a forest lease": 2.5,
  "206C,Timber obtained under any mode other than forest lease": 2.5,
  "206C,Any other forest product not being timber or tendu leave": 2.5,
  "206C,Scrap": 1,
  "206C,Parking Lot": 2,
  "206C,Toll Plaza": 2,
  "206C,Minning and Quarrying": 2,
  "206C,Tendu leaves": 2,
  "206C,Minerals, being coal or lignite or iron ore": 1,
  "206C,Bullion, jewelleryor Any other goods or services": 1,
};

const sectionNotes = {
  193: "No TDS is deductible for payments not exceeding Rs. 5000.",
  "194A": "No TDS is deductible for payments not exceeding Rs. 10000 (Banks) & Rs. 5000 (Others)",
  "194B": "No TDS is deductible for payments not exceeding Rs. 10000",
  "194BB": "No TDS is deductible for payments not exceeding Rs. 10000",
  "194C": "No TDS is deductible for payments not exceeding Rs. 30000 Per Contract or Rs. 100000 per Annum",
  "194D": "No TDS is deductible for payments not exceeding Rs. 15000.",
  "194EE": "No TDS is deductible for payments not exceeding Rs. 2500.",
  "194F": "No TDS is deductible for payments not exceeding Rs. 1000.",
  "194G": "No TDS is deductible for payments not exceeding Rs. 15000.",
  "194H": "No TDS is deductible for payments not exceeding Rs. 15000.",
  "194I": "No TDS is deductible for payments not exceeding Rs. 240000",
  "194IA": "No TDS is deductible for payments not exceeding Rs. 5000000",
  "194IB": "No TDS is deductible for payments not exceeding Rs. 50000",
  "194J": "No TDS is deductible for payments not exceeding Rs. 30000",
  "194LA": "No TDS is deductible for payments not exceeding Rs. 250000",
  "194K": "No TDS is deductible for payments not exceeding Rs. 5000",
  "194M": "No TDS is deductible for payments not exceeding Rs. 5000000",
  "194O": "No TDS is deductible for payments not exceeding Rs. 0",
};

function Tds() {
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [section, setSection] = useState("");
  const [panQuoted, setPanQuoted] = useState("Yes");

  const tax = ((rate / 100) * amount).toFixed(2);
  const sectionCode = section.split(",")[0].toUpperCase();

  useEffect(() => {
    if (!section) {
      setRate(0);
      return;
    }

    const baseRate = sectionRates[section] || 0;

    if (sectionCode === "206C") {
      setRate(baseRate);
    } else {
      setRate(panQuoted === "No" ? 20 : baseRate);
    }
  }, [section, panQuoted]);

  return (
    <>
      <Header />
      <Container className="mt-5 mb-5">
        <Card className="shadow border rounded-lg">
          <Card.Header className="text-center bg-primary text-white py-2">
            <h5 className="m-0">TDS Calculator</h5>
          </Card.Header>

          <Card.Body className="bg-light">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Label>Section</Form.Label>
                <Form.Select
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                >
                  <option value="">Select</option>
                  {Object.keys(sectionRates).map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              {!sectionCode.startsWith("206C") && (
                <Col md={6}>
                  <Form.Label>PAN quoted by deductee</Form.Label>
                  <Form.Select
                    value={panQuoted}
                    onChange={(e) => setPanQuoted(e.target.value)}
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Col>
              )}
            </Row>

            <Row className="mb-3 align-items-center">
              <Col md={2}>
                <Form.Label>Rate:</Form.Label>
                <Form.Control type="text" value={rate} readOnly />
              </Col>
              <Col md={1}><span className="fw-bold">%</span></Col>
              <Col md={9}>
                <Form.Range min={0} max={50} step={0.5} value={rate} disabled />
              </Col>
            </Row>

            <Row className="mb-3 align-items-center">
              <Col md={2}>
                <Form.Label>Amount:</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) =>
                    setAmount(parseFloat(e.target.value) || 0)
                  }
                />
              </Col>
              <Col md={1}><span className="fw-bold">0</span></Col>
              <Col md={9}>
                <Form.Range
                  min={0}
                  max={100000}
                  step={1000}
                  value={amount}
                  onChange={(e) =>
                    setAmount(parseFloat(e.target.value))
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Label>Tax:</Form.Label>
                <Form.Control value={tax} readOnly />
              </Col>
            </Row>

            {section ===
              "206C,Bullion, jewelleryor Any other goods or services" && (
              <p className="fw-bold text-dark mt-3">
                Note:- If sale consideration is paid in cash exceeding Rs. 5 lakhs (Jewellery),
                Rs. 2 lakhs (Bullion), or Rs. 2 lakhs (other goods/services where TDS is not deducted)
              </p>
            )}

            {section &&
              section !==
                "206C,Bullion, jewelleryor Any other goods or services" &&
              sectionNotes[sectionCode] && (
                <p className="fw-bold text-dark mt-3">
                  Note:- {sectionNotes[sectionCode]}
                </p>
              )}
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default Tds;


