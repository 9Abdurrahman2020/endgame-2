import React from "react";
import { Container, Row } from "react-bootstrap";
import "./appointment.css";
const Appointment = () => {
  return (
    <div className="appointment-container">
      <Container className="py-5">
        <h2>BOOK APPOINTMENT</h2>
        <hr className="appointment-horizental-line" />
        <Row></Row>
      </Container>
    </div>
  );
};

export default Appointment;
