import React, { useEffect, useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Loader from "../Loader";

const Netprofit = () => {
  const [inputs, setInputs] = useState({
    netProfitBeforeTax: "",
    lossOnSale: "",
    doubtfulDebts: "",
    charityDonations: "",
    miscExpenses: "",
    fixedAssetsWrittenOff: "",
    amortizationLease: "",
    newsPrintWrittenOff: "",
    amalgamationExp: "",
    discountOnCP: "",
    changeInAssetLiabilityPos: "",
    voluntaryCompensation: "",
    otherDeductedExp: "",
    sharePremium: "",
    forfeitedSharesProfit: "",
    capitalNatureProfit: "",
    fixedAssetSaleProfit: "",
    changeInAssetLiabilityNeg: "",
  });

  const [finalNetProfit, setFinalNetProfit] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCalculate = () => {
    const getValue = (key) => parseFloat(inputs[key]) || 0;

    const base = getValue("netProfitBeforeTax");

    const additions = [
      "lossOnSale",
      "doubtfulDebts",
      "charityDonations",
      "miscExpenses",
      "fixedAssetsWrittenOff",
      "amortizationLease",
      "newsPrintWrittenOff",
      "amalgamationExp",
      "discountOnCP",
      "changeInAssetLiabilityPos", // ADD
      "voluntaryCompensation",
      "otherDeductedExp",
    ].reduce((sum, key) => sum + getValue(key), 0);

    const deductions = [
      "sharePremium",
      "forfeitedSharesProfit",
      "capitalNatureProfit",
      "fixedAssetSaleProfit",
      "changeInAssetLiabilityNeg", // SUBTRACT
    ].reduce((sum, key) => sum + getValue(key), 0);

    const result = base + additions - deductions;
    setFinalNetProfit(result);
  };
  const fields = [
    { label: "Net Profit before Tax", key: "netProfitBeforeTax" },
    {
      label: "Loss On Sale of Fixed Assets/Undertaking (Net)",
      key: "lossOnSale",
    },
    { label: "Provision for Doubtful Debts", key: "doubtfulDebts" },
    { label: "Charity & Donations", key: "charityDonations" },
    { label: "Misc Expenses", key: "miscExpenses" },
    { label: "Fixed Assets Written Off", key: "fixedAssetsWrittenOff" },
    {
      label: "Amortization of Lease Hold Land Premium",
      key: "amortizationLease",
    },
    { label: "News Print Claim Written-off", key: "newsPrintWrittenOff" },
    { label: "Amalgamation Expenses Written Off", key: "amalgamationExp" },
    { label: "Discount on Commercial Papers", key: "discountOnCP" },
    {
      label: "Change in carrying amount of an asset/liability (ADD)",
      key: "changeInAssetLiabilityPos",
    },
    { label: "Voluntary Compensation/Damages", key: "voluntaryCompensation" },
    { label: "Other Expenses deducted from profit", key: "otherDeductedExp" },
    { label: "Profit by way of Premium on Shares", key: "sharePremium" },
    {
      label: "Profit on sale of forfeited Shares",
      key: "forfeitedSharesProfit",
    },
    {
      label: "Capital Nature Profit (e.g., sale of undertaking)",
      key: "capitalNatureProfit",
    },
    {
      label: "Profit from sale of immovable property/fixed assets",
      key: "fixedAssetSaleProfit",
    },
    {
      label: "Change in carrying amount of asset/liability (SUBTRACT)",
      key: "changeInAssetLiabilityNeg",
    },
    // { label: "Net Profit", key: "netProfit" },
  ];
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
          <Container className="my-5">
            <Card className="shadow">
              <Card.Header className="bg-dark text-white text-center fs-4">
                Net Profit Detailed Calculator
              </Card.Header>
              <Card.Body>
                <Form>
                  {fields.map((field, index) => (
                    <Row className="align-items-center mb-3" key={index}>
                      <Col md={7}>
                        <Form.Label className="mb-0 fw-medium">
                          {field.label}
                        </Form.Label>
                      </Col>
                      <Col md={5}>
                        <Form.Control
                          type="number"
                          name={field.key}
                          value={inputs[field.key]}
                          onChange={handleChange}
                          placeholder="₹"
                        />
                      </Col>
                    </Row>
                  ))}

                  <div className="text-center mt-4">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleCalculate}
                    >
                      Calculate Net Profit
                    </Button>
                  </div>
                </Form>

                {finalNetProfit !== null && (
                  <Card className="mt-4 border-success">
                    <Card.Body>
                      <h5 className="text-success">
                        Final Net Profit: ₹ {finalNetProfit.toLocaleString()}
                      </h5>
                    </Card.Body>
                  </Card>
                )}
              </Card.Body>
            </Card>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default Netprofit;
