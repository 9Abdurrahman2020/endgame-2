import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import useAuth from "../../context/useAuth";
import "./appointment.css";
const Appointment = () => {
  const { user } = useAuth();
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
    const data = { ...formData };

    data.status = "pending";
    data.email = user.email;
    console.log(data);
    fetch("https://afternoon-brook-80659.herokuapp.com/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("successfully submited your appointment !");
        }
      });
  };
  return (
    <div className="appointment-container">
      <Container className="py-5">
        <h2>BOOK APPOINTMENT</h2>
        <hr className="appointment-horizental-line" />
        <form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onBlur={handleOnBlur}
              name="name"
              type="text"
              placeholder=""
              defaultValue={user?.displayName}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleOnBlur}
              name="email"
              type="email"
              placeholder=""
              disabled
              defaultValue={user?.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onBlur={handleOnBlur}
              name="number"
              type="number"
              placeholder=""
              defaultValue={user?.phone}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Visit Day</Form.Label>
            <Form.Control
              onBlur={handleOnBlur}
              name="date"
              type="date"
              placeholder=""
              required
            />
          </Form.Group>
          <button className="btn btn-danger" type="submit">
            SUBMIT
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Appointment;
