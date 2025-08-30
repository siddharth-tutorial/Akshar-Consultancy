import React, { useRef, useState } from "react";
import { Container, Table, Form, Button, Row, Col } from "react-bootstrap";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { useReactToPrint } from "react-to-print";

export default function IncomeTaxCalculator() {
  const [inputs, setInputs] = useState({
    salary: "",
    house: "",
    business: "",
    stcgSTT: "",
    stcgOther: "",
    ltcgSTT: "",
    ltcgOther: "",
    lottery: "",
    deductions: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    status: "Individual",
    regime: "old",
    gender: "Male",
    financialYear: "2025-2026",
    seniorCitizen: "Not Senior",
    companyScheme: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "status" && value !== "Company") {
        return { ...prev, [name]: value, companyScheme: "" };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      e.target.type === "number" ? parseFloat(value || 0) : value;
    setInputs((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const handleCalculate = () => {
    const { status, regime, companyScheme } = formData;
    const salary = Math.round(parseFloat(inputs.salary) || 0);
    const house = Math.round(parseFloat(inputs.house) || 0);
    const business = Math.round(parseFloat(inputs.business) || 0);
    const stcgSTT = Math.round(parseFloat(inputs.stcgSTT) || 0);
    const stcgOther = Math.round(parseFloat(inputs.stcgOther) || 0);
    const ltcgSTT = Math.round(parseFloat(inputs.ltcgSTT) || 0);
    const ltcgOther = Math.round(parseFloat(inputs.ltcgOther) || 0);
    const lottery = Math.round(parseFloat(inputs.lottery) || 0);
    const deductions = Math.round(
      regime === "old" ? parseFloat(inputs.deductions) || 0 : 0
    );

    // Total Gross Income
    const grossIncome = salary + house + business + stcgOther + ltcgOther;

    // LTCG STT only taxable above ₹1L
    const taxableLtcgSTT = Math.max(ltcgSTT - 100000, 0);

    // Taxable Income = Gross Income - Deductions (if old regime)
    const taxableIncome = Math.max(grossIncome - deductions, 0);
    let baseTax = 0;
    let rebate = 0;
    let surcharge = 0;
    let surchargeRate = 0;

    // INDIVIDUAL / HUF / AOP / BOI
    if (["Individual", "HUF", "AOP", "BOI"].includes(status)) {
      // --- BASE TAX ---
      if (regime === "old") {
        if (taxableIncome <= 250000) {
          baseTax = 0;
        } else if (taxableIncome <= 500000) {
          baseTax = (taxableIncome - 250000) * 0.05;
        } else if (taxableIncome <= 1000000) {
          baseTax = 12500 + (taxableIncome - 500000) * 0.2;
        } else {
          baseTax = 112500 + (taxableIncome - 1000000) * 0.3;
        }
      } else {
        // NEW REGIME (as per FY 2023-24)
        if (taxableIncome <= 300000) {
          baseTax = 0;
        } else if (taxableIncome <= 600000) {
          baseTax = (taxableIncome - 300000) * 0.05;
        } else if (taxableIncome <= 900000) {
          baseTax = 15000 + (taxableIncome - 600000) * 0.1;
        } else if (taxableIncome <= 1200000) {
          baseTax = 30000 + (taxableIncome - 900000) * 0.15;
        } else if (taxableIncome <= 1500000) {
          baseTax = 45000 + (taxableIncome - 1200000) * 0.2;
        } else {
          baseTax = 60000 + (taxableIncome - 1500000) * 0.3;
        }
      }

      // --- REBATE u/s 87A ---
      if (
        (regime === "old" && taxableIncome <= 500000) ||
        (regime === "new" && taxableIncome <= 700000)
      ) {
        rebate = Math.min(baseTax, 25000); // Max rebate allowed
        baseTax -= rebate;
      }

      // --- SURCHARGE ---
      const incomeAfterRebate = taxableIncome; // based on income, not tax
      if (incomeAfterRebate > 5000000 && incomeAfterRebate <= 10000000) {
        const surcharge10 = baseTax * 0.1;
        const excessIncome = incomeAfterRebate - 5000000;
        surcharge = Math.min(surcharge10, excessIncome);
      }
      // else if (
      //   incomeAfterRebate > 10000000  &&
      //   incomeAfterRebate <= 20000000   //1cr to 2 cr 15%
      // ) {
      //   surchargeRate = 0.15;
      // surcharge = baseTax * surchargeRate;
      // }
      else if (
        incomeAfterRebate > 20000000 && //2cr to 5 cr 25%
        incomeAfterRebate <= 50000000
      ) {
        surchargeRate = 0.07;
        surcharge = baseTax * surchargeRate;
      } else if (incomeAfterRebate > 50000000) {
        surchargeRate = 0.25; //5 cr to above 37%
        surcharge = baseTax * surchargeRate;
      }

      console.log("Surcharge:", surcharge);
    }

    // COMPANY
    function getCompanyRate(scheme) {
      switch (scheme) {
        case "115BA":
          return 0.25;
        case "115BAA":
          return 0.22;
        case "115BAB":
          return 0.15;
        default:
          return 0.3;
      }
    }

    // --- COMPANY LOGIC ---
    if (status === "Company") {
      const companyIncome =
        salary +
        house +
        business +
        stcgSTT +
        stcgOther +
        ltcgSTT +
        ltcgOther +
        lottery;

      // Save companyIncome in state if needed
      baseTax = companyIncome * getCompanyRate(companyScheme);

      if (companyIncome > 10000000 && companyIncome <= 100000000)
        surcharge = 0.07 * baseTax;
      else if (companyIncome > 100000000) surcharge = 0.12 * baseTax;
    }

    // --- ADDITIONAL FLAT TAXES ---
    const stcgTax = stcgSTT * 0.15;
    const ltcgTax = taxableLtcgSTT * 0.1;
    const ltcgOtherTax = ltcgOther * 0.2;
    const lotteryTax = lottery * 0.3;

    // Final tax additions
    const slabTax = baseTax - rebate + surcharge;
    const cess =
      0.04 * (slabTax + stcgTax + ltcgTax + ltcgOtherTax + lotteryTax);
    const totalTax =
      slabTax + stcgTax + ltcgTax + ltcgOtherTax + lotteryTax + cess;

    // setResult({
    //   income: grossIncome,
    //   deductions,
    //   taxableIncome,
    //   baseTax: baseTax.toFixed(2),
    //   rebate: rebate.toFixed(2),
    //   surcharge: surcharge.toFixed(2),
    //   stcgTax: stcgTax.toFixed(2),
    //   ltcgTax: ltcgTax.toFixed(2),
    //   ltcgOtherTax: ltcgOtherTax.toFixed(2),
    //   lotteryTax: lotteryTax.toFixed(2),
    //   cess: cess.toFixed(2),
    //   totalTax: totalTax.toFixed(2),
    // });
    setResult({
      income: Math.round(grossIncome),
      deductions: Math.round(deductions),
      taxableIncome: Math.round(taxableIncome),
      baseTax: Math.round(baseTax),
      rebate: Math.round(rebate),
      surcharge: Math.round(surcharge),
      stcgTax: Math.round(stcgTax),
      ltcgTax: Math.round(ltcgTax),
      ltcgOtherTax: Math.round(ltcgOtherTax),
      lotteryTax: Math.round(lotteryTax),
      cess: Math.round(cess),
      totalTax: Math.round(totalTax),
    });
  };
  // reset button logic
  const handleReset = () => {
    setInputs(inputs); // Or whatever your reset logic is
    setResult(null);
  };
  let rowIndex = 0;
  const getBgColor = () => (rowIndex++ % 2 === 0 ? "#FCFCF5" : "#E2E2DC");

  const printRef = useRef();

  // 🔹 react-to-print function
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Income Tax Calculator",
    pageStyle: `
      @page { size: auto; margin: 20mm; }
      body { -webkit-print-color-adjust: exact; }
    `,
  });

  return (
    <>
      <Header className="no-print" />
      <Container className="py-4">
        <div ref={printRef}>
          <h3 className="text-center mb-4">Income Tax Calculator</h3>
          <Form>
            <Row className="mb-2 align-items-center">
              <Col md={3}>
                <Form.Group controlId="name">
                  <Form.Label className="mb-0">Assessee Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    // defaultValue={0}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId="status">
                  <Form.Label className="mb-0">Status of Tax Payer</Form.Label>
                  <Form.Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option>Individual</option>
                    <option>HUF</option>
                    <option>AOP</option>
                    <option>BOI</option>
                    <option>Company</option>
                  </Form.Select>
                </Form.Group>

                {/* ✅ Show Company Tax Section dropdown only if "Company" and "new" regime selected */}
                {formData.status === "Company" && formData.regime === "new" && (
                  <Form.Group controlId="companyScheme" className="mt-2">
                    <Form.Label className="mb-0">
                      Taxation Under Section
                    </Form.Label>
                    <Form.Select
                      name="companyScheme"
                      value={formData.companyScheme || ""}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="115BA">Section 115BA (25%)</option>
                      <option value="115BAA">Section 115BAA (22%)</option>
                      <option value="115BAB">Section 115BAB (15%)</option>
                    </Form.Select>
                  </Form.Group>
                )}
              </Col>

              <Col md={2}>
                <Form.Group controlId="gender">
                  <Form.Label className="mb-0">Gender</Form.Label>
                  <Form.Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={2}>
                <Form.Group controlId="financialYear">
                  <Form.Label className="mb-0">Financial Year</Form.Label>
                  <Form.Select
                    name="financialYear"
                    value={formData.financialYear}
                    onChange={handleChange}
                  >
                    <option>2025-2026</option>
                    <option>2024-2025</option>
                    <option>2023-2024</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={2}>
                <Form.Group controlId="seniorCitizen">
                  <Form.Label className="mb-0">Senior Citizen</Form.Label>
                  <Form.Select
                    name="seniorCitizen"
                    value={formData.seniorCitizen}
                    onChange={handleChange}
                  >
                    <option>Not Senior</option>
                    <option>Senior</option>
                    <option>Super Senior</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className=" p-2">
              <Col md={12}>
                <Form.Label className="me-3 mb-0">
                  Slab Rate Calculation As Per:
                </Form.Label>
                <Form.Check
                  inline
                  label="Old Regime"
                  name="regime"
                  type="radio"
                  value="old"
                  checked={formData.regime === "old"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="New Regime"
                  name="regime"
                  type="radio"
                  value="new"
                  checked={formData.regime === "new"}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <div className="text-center fw-bold text-muted mt-2">
              Statement of Income and Tax
            </div>
          </Form>

          <Form>
            <Table bordered responsive size="sm" className="mb-4">
              <thead></thead>
              <tbody>
                {/* Income Details */}
                <tr style={{ backgroundColor: getBgColor() }}>
                  <th className="text-lg">Income</th>
                  <th className="text-lg">Rs.</th>
                </tr>

                {formData.status !== "Company" && (
                  <tr style={{ backgroundColor: getBgColor() }}>
                    <td className="text-sm">Salary Income</td>
                    <td>
                      <Form.Control
                        name="salary"
                        value={inputs.salary}
                        defaultValue={0}
                        onChange={handleInputChange}
                        type="number"
                        className="form-control-sm text-end"
                      />
                    </td>
                  </tr>
                )}

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">
                    Income from House Property (Enter Income after Standard
                    Deduction Of 30% as per Sec.24(a))
                  </td>
                  <td>
                    <Form.Control
                      name="house"
                      value={inputs.house}
                      onChange={handleInputChange}
                      type="number"
                      defaultValue={0}
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Business Income</td>
                  <td>
                    <Form.Control
                      name="business"
                      value={inputs.business}
                      onChange={handleInputChange}
                      defaultValue={0}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                {/* Capital Gains */}

                <tr style={{ backgroundColor: getBgColor() }}>
                  <th className="text-sm" colSpan={2}>
                    Capital Gains
                  </th>
                </tr>

                {/* Short Term */}

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="ps-4 py-2">
                    <div className="d-flex align-items-center gap-4">
                      {/* Left label */}
                      <div className="fw-bold" style={{ minWidth: "400px" }}>
                        (a) Short Term
                      </div>

                      {/* STT @20% input */}
                      <div className="d-flex flex-column align-items-end">
                        <label className="text-muted small mb-1">
                          STT @20%
                        </label>
                        <Form.Control
                          type="number"
                          name="stcgSTT"
                          value={inputs.stcgSTT}
                          defaultValue={0}
                          onChange={handleInputChange}
                          className="form-control-sm text-end"
                          style={{ width: "100px" }}
                          // disabled={formData.regime === "new"}
                        />
                      </div>

                      {/* Others input */}
                      <div className="d-flex flex-column align-items-end">
                        <label className="text-muted small mb-1">Others</label>
                        <Form.Control
                          type="number"
                          name="stcgOther"
                          value={inputs.stcgOther}
                          onChange={handleInputChange}
                          className="form-control-sm text-end"
                          defaultValue={0}
                          style={{ width: "100px" }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Total column */}
                  <td className="align-middle">
                    <Form.Control
                      type="number"
                      className="form-control-sm text-end"
                      value={
                        (parseFloat(inputs.stcgSTT) || 0) +
                        (parseFloat(inputs.stcgOther) || 0)
                      }
                      disabled
                    />
                  </td>
                </tr>

                {/* Long Term */}

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="ps-4 py-2">
                    <div className="d-flex align-items-center gap-4">
                      {/* Left label */}
                      <div className="fw-bold" style={{ minWidth: "400px" }}>
                        (b) Long Term
                      </div>
                      <div className="d-flex flex-column align-items-end">
                        <span className="text-muted small">@12.5%</span>
                        <Form.Control
                          type="number"
                          name="ltcgSTT"
                          value={inputs.ltcgSTT}
                          defaultValue={0}
                          onChange={handleInputChange}
                          className="form-control-sm text-end"
                          style={{ width: "100px" }}
                          // disabled={formData.regime === "new"}
                        />
                      </div>

                      <div className="d-flex flex-column align-items-end">
                        <span className="text-muted small">@20%</span>
                        <Form.Control
                          type="number"
                          name="ltcgOther"
                          value={inputs.ltcgOther}
                          onChange={handleInputChange}
                          defaultValue={0}
                          className="form-control-sm text-end "
                          style={{ width: "100px" }}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      className="form-control-sm text-end mt-4"
                      value={
                        (parseFloat(inputs.ltcgSTT) || 0) +
                        (parseFloat(inputs.ltcgOther) || 0)
                      }
                      disabled
                    />
                  </td>
                </tr>

                {/* Other Incomes */}
                <tr style={{ backgroundColor: "#fcfcf5" }}>
                  <th className="text-sm" colSpan={2}>
                    Income from Other Sources
                  </th>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">
                    (a) Incomes (Interest, Dividend etc.)
                  </td>
                  <td>
                    <Form.Control
                      name="otherIncome"
                      value={inputs.otherIncome}
                      onChange={handleInputChange}
                      defaultValue={0}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">(b) Agriculture Income</td>
                  <td>
                    <Form.Control
                      name="agriIncome"
                      value={inputs.agriIncome}
                      onChange={handleInputChange}
                      defaultValue={0}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">(c) Lottery Winnings (30%)</td>
                  <td>
                    <Form.Control
                      name="lottery"
                      value={inputs.lottery}
                      onChange={handleInputChange}
                      type="number"
                      defaultValue={0}
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                {/* Deductions */}
                <tr className="bg-light">
                  <th className="text-sm" colSpan={2}>
                    Deductions under Chapter VIA
                  </th>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">80C/80CCC/80CCD</td>
                  <td>
                    <Form.Control
                      name="deduction80C"
                      value={inputs.deduction80C}
                      onChange={handleInputChange}
                      defaultValue={0}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">80D (Mediclaim)</td>
                  <td>
                    <Form.Control
                      name="deduction80D"
                      value={inputs.deduction80D}
                      onChange={handleInputChange}
                      defaultValue={0}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">80TTA</td>
                  <td>
                    <Form.Control
                      name="deduction80TTA"
                      value={inputs.deduction80TTA}
                      onChange={handleInputChange}
                      defaultValue={0}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Other (Old Regime)</td>
                  <td>
                    <Form.Control
                      name="oldDeduction"
                      value={inputs.oldDeduction}
                      onChange={handleInputChange}
                      defaultValue={0}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Other (New Regime)</td>
                  <td>
                    <Form.Control
                      name="newDeduction"
                      value={inputs.newDeduction}
                      defaultValue={0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                {/* Tax Result Section */}
                {result && (
                  <>
                    <tr className="bg-light fw-bold">
                      <td colSpan={2}>Taxable Income</td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-sm">Normal Income</td>
                      <td className="text-end">
                        {Math.round(inputs.salary || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-sm">Special Income</td>
                      <td className="text-end">
                        {Math.round(
                          (inputs.stcgSTT || 0) + (inputs.ltcgSTT || 0)
                        ).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="fw-bold">
                      <td className="text-center">Total Taxable Income</td>
                      <td className="text-end">
                        {Math.round(result.taxableIncome || 0).toLocaleString()}
                      </td>
                    </tr>

                    <tr className="bg-light fw-bold">
                      <td colSpan={2}>Income Tax</td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-sm">Normal Tax</td>
                      <td className="text-end">
                        {Math.round(result.baseTax || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-sm">Special Tax</td>
                      <td className="text-end">
                        {Math.round(
                          (Number(result?.stcgTax) || 0) +
                            (Number(result?.ltcgTax) || 0) +
                            (Number(result?.ltcgOtherTax) || 0) +
                            (Number(result?.lotteryTax) || 0)
                        ).toLocaleString()}
                        {console.log(
                          result.stcgTax,
                          result.ltcgTax,
                          result.ltcgOtherTax,
                          result.lotteryTax
                        )}
                      </td>
                    </tr>

                    <tr className="fw-semibold">
                      <td className="text-center">Total Income Tax</td>
                      <td className="text-end">
                        {Math.round(result.baseTax || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-center">Rebate u/s 87A</td>
                      <td className="text-end">
                        {Math.round(result.rebate || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-center">Surcharge</td>
                      <td className="text-end">
                        {Math.round(result.surcharge || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: getBgColor() }}>
                      <td className="text-center">Health & Education Cess</td>
                      <td className="text-end">
                        {Math.round(result.cess || 0).toLocaleString()}
                      </td>
                    </tr>
                    <tr className="fw-semibold">
                      <td className="text-center">Total Tax Liability</td>
                      <td className="text-end">
                        {Math.round(result.totalTax || 0).toLocaleString()}
                      </td>
                    </tr>
                  </>
                )}

                {/* Tax Paid */}
                <tr className="bg-light">
                  <th className="text-sm" colSpan={2}>
                    Details of Tax Paid
                  </th>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">TDS (Tax Deducted at Source)</td>
                  <td>
                    <Form.Control
                      name="tds"
                      value={inputs.tds}
                      onChange={handleInputChange}
                      defaultValue={0}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Advance Tax Paid</td>
                  <td>
                    <Form.Control
                      name="advanceTax"
                      value={inputs.advanceTax}
                      defaultValue={0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr style={{ backgroundColor: getBgColor() }}>
                  <td className="text-sm">Self Assessment Tax Paid</td>
                  <td>
                    <Form.Control
                      name="selfAssessment"
                      value={inputs.selfAssessment}
                      defaultValue={0}
                      onChange={handleInputChange}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>

                <tr className="fw-bold">
                  <td className="text-center">Total Tax Paid</td>
                  <td>
                    <Form.Control
                      name="totalPaid"
                      value={inputs.totalPaid}
                      onChange={handleInputChange}
                      defaultValue={0}
                      type="number"
                      className="form-control-sm text-end"
                    />
                  </td>
                </tr>
                {result && (
                  <tr className="fw-bold bg-warning-subtle">
                    <td className="text-center"> Tax Payable</td>
                    <td className="text-end">
                      ₹{Math.round(result.totalTax).toLocaleString()}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Form>
        </div>
        <div className="text-center mt-5 d-flex justify-content-center gap-3">
          <Button
            variant="primary"
            onClick={handleCalculate}
            className="px-4 py-2 fw-semibold shadow-sm animated-btn"
          >
            Calculate Tax
          </Button>
          <Button
            variant="danger"
            onClick={handleReset}
            className="px-4 py-2 fw-semibold shadow-sm animated-btn"
          >
            Reset
          </Button>
          <Button
            type="button"
            variant="success"
            onClick={handlePrint}
            className="px-4 py-2 fw-semibold shadow-sm animated-btn"
          >
            Print
          </Button>
        </div>
      </Container>
      <Footer className="no-print" />
    </>
  );
}
