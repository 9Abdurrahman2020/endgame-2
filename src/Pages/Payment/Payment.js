import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./payment.css";
const Payment = () => {
  const [visit, setVisit] = useState(1000);
  const paymentHandler = () => {
    alert("Thanks for successfully payment");
  };
  return (
    <div className="text-center">
      <h1>Your appointment visit is {visit}Tk</h1>
      <p>Use this 'coupon' to get 10% discount</p>
      <div className="coupon-box">
        <InputGroup className="mb-3 w-25">
          <FormControl
            placeholder="use your coupon"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2" onClick={() => setVisit(500)}>
            Apply
          </InputGroup.Text>
        </InputGroup>
      </div>
      <button onClick={paymentHandler} className="btn btn-success me-3">
        Payment
      </button>
    </div>
  );
};

export default Payment;
