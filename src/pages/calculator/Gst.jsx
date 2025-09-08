import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Button,
  Card,
} from "react-bootstrap";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Loader from "../Loader";

const initialRow = {
  saleType: "Inter State Sale",
  taxRate: "",
  taxableAmount: "",
  totalTax: "",
  igst: "",
  cgst: "",
  sgst: "",
  cessRate: "",
  cessAmount: "",
};

function Gst() {
  const [rows, setRows] = useState(Array(6).fill({ ...initialRow }));

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index] = { ...updatedRows[index], [field]: value };

    const { saleType, taxRate, taxableAmount, cessRate } = updatedRows[index];
    const rate = parseFloat(taxRate) || 0;
    const amount = parseFloat(taxableAmount) || 0;
    const cess = parseFloat(cessRate) || 0;

    const tax = (rate / 100) * amount;
    const cessAmt = (cess / 100) * amount;

    updatedRows[index].totalTax = tax.toFixed(2);
    updatedRows[index].cessAmount = cessAmt.toFixed(2);

    if (saleType === "Inter State Sale") {
      updatedRows[index].igst = tax.toFixed(2);
      updatedRows[index].cgst = "";
      updatedRows[index].sgst = "";
    } else {
      updatedRows[index].cgst = (tax / 2).toFixed(2);
      updatedRows[index].sgst = (tax / 2).toFixed(2);
      updatedRows[index].igst = "";
    }

    setRows(updatedRows);
  };

  const handleReset = () => {
    setRows(Array(6).fill({ ...initialRow }));
  };

  const totals = rows.reduce(
    (acc, row) => {
      acc.amount += parseFloat(row.taxableAmount || 0);
      acc.tax += parseFloat(row.totalTax || 0);
      acc.igst += parseFloat(row.igst || 0);
      acc.cgst += parseFloat(row.cgst || 0);
      acc.sgst += parseFloat(row.sgst || 0);
      acc.cess += parseFloat(row.cessAmount || 0);
      return acc;
    },
    { amount: 0, tax: 0, igst: 0, cgst: 0, sgst: 0, cess: 0 }
  );

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
          <Container className="mt-4">
            <Card className="p-3">
              <h5
                className="text-center mb-4 mx-auto  text-white  py-2 rounded"
                style={{
                  background: "#18427d",
                  width: "100%",
                  maxWidth: "350px",
                }}
              >
                GST Calculator
              </h5>

              <div className="table-responsive">
                <Table bordered responsive size="sm">
                  <thead className="table-light text-center">
                    <tr>
                      <th>Type Of Sale</th>
                      <th>Rate OF Tax</th>
                      <th>Taxable Amount</th>
                      <th>Total Tax Amount</th>
                      <th>IGST</th>
                      <th>CGST</th>
                      <th>SGST</th>
                      <th>Rate of Cess</th>
                      <th>CESS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={index}>
                        <td>
                          <Form.Select
                            size="sm"
                            value={row.saleType}
                            onChange={(e) =>
                              handleChange(index, "saleType", e.target.value)
                            }
                          >
                            <option>Inter State Sale</option>
                            <option>Intra State Sale</option>
                          </Form.Select>
                        </td>
                        <td>
                          <Form.Select
                            size="sm"
                            value={row.taxRate}
                            onChange={(e) =>
                              handleChange(index, "taxRate", e.target.value)
                            }
                          >
                            <option value="">select...</option>
                            <option value="0.25">0.25%</option>
                            <option value="3">3%</option>
                            <option value="5">5%</option>
                            <option value="12">12%</option>
                            <option value="18">18%</option>
                            <option value="28">28%</option>
                          </Form.Select>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            type="number"
                            value={row.taxableAmount}
                            onChange={(e) =>
                              handleChange(
                                index,
                                "taxableAmount",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            readOnly
                            value={row.totalTax}
                          />
                        </td>
                        <td>
                          <Form.Control size="sm" readOnly value={row.igst} />
                        </td>
                        <td>
                          <Form.Control size="sm" readOnly value={row.cgst} />
                        </td>
                        <td>
                          <Form.Control size="sm" readOnly value={row.sgst} />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            type="number"
                            value={row.cessRate}
                            onChange={(e) =>
                              handleChange(index, "cessRate", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            readOnly
                            value={row.cessAmount}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              <Row className="text-center fw-bold mt-3 gy-2">
                <Col xs={12} sm={6} md>
                  Total Amount : {totals.amount.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total Tax : {totals.tax.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total IGST : {totals.igst.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total CGST : {totals.cgst.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total SGST : {totals.sgst.toFixed(2)}
                </Col>
                <Col xs={12} sm={6} md>
                  Total CESS : {totals.cess.toFixed(2)}
                </Col>
              </Row>

              <div className="text-end mt-4">
                <Button variant="danger" size="sm" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </Card>
          </Container>

          <Footer />
        </>
      )}
    </>
  );
}

export default Gst;
