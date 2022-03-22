import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SetCoupon = () => {
  const [formData, setFromData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...formData };
    newData[field] = value;
    setFromData(newData);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    formData.email = "9abdurrahman2020@gmail.com";
    fetch("http://https://afternoon-brook-80659.herokuapp.com/coupon", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("successfully set coupon code and discount !");
        }
      });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
          <Form.Label>Put coupon Code:</Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            name="coupon"
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
          <Form.Label>Put coupon percentage:</Form.Label>
          <Form.Control
            onBlur={handleOnBlur}
            name="percentage"
            type="number"
            required
          />
        </Form.Group>
        <button type="submit" className="btn btn-success">
          Set
        </button>
      </form>
    </div>
  );
};

export default SetCoupon;
