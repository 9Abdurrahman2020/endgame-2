import React, { useEffect, useRef, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./payment.css";
const Payment = () => {
  const couponRef = useRef();
  const [visit, setVisit] = useState(1000);
  const [coupon, setCoupon] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [applied, setApplied] = useState(false);
  const paymentHandler = () => {
    alert("Thanks for successfully payment");
    couponRef.current.value = "";
  };
  useEffect(() => {
    fetch("http://localhost:5000/coupon")
      .then((res) => res.json())
      .then((data) => {
        setCoupon(data[0].coupon);
        setPercentage(parseInt(data[0].percentage));
      });
  }, []);
  const couponHandler = () => {
    if (couponRef.current.value === coupon) {
      if (!applied) {
        const newAmount = visit - visit * (percentage / 100);
        setVisit(newAmount);
        setApplied(true);
      } else {
        alert("You already used coupon once !");
      }
    }
  };

  return (
    <div className="text-center">
      <h1>Your appointment visit is {visit}Tk</h1>
      <p>
        Use this '{coupon}' to get {percentage}% discount
      </p>
      <div className="coupon-box">
        <InputGroup className="mb-3 w-25">
          <FormControl
            ref={couponRef}
            placeholder="use your coupon"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2" onClick={couponHandler}>
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
