import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams();
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
    formData.for = id;
    formData.status = "pending";
    console.log(formData);
    fetch("http://https://afternoon-brook-80659.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("successfully submitted your review !");
        }
      });
  };
  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name:</Form.Label>
          <Form.Control
            name="name"
            onBlur={handleOnBlur}
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Comments:</Form.Label>
          <Form.Control
            name="comments"
            onBlur={handleOnBlur}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <button type="submit" className="btn btn-success text-center">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Review;
