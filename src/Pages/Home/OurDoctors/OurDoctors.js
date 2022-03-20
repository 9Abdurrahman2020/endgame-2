import React from "react";
import { Container, Row } from "react-bootstrap";
import "./ourDoctor.css";

const OurDoctors = () => {
  return (
    <Container>
      <div className="our-doctor-section mb-5 py-4">
        <div className="text-center my-4">
          <h1>OUR DOCTORS</h1>
          <h6>
            Our doctors are specialist in their field and have more then 5 years
            of experiences .
          </h6>
          <hr
            style={{ height: "2px" }}
            className="ourdoctors-horizental-line"
          />
        </div>
        <Row>
          <div className="col-md-3">Doctor</div>
          <div className="col-md-3">Doctor</div>
          <div className="col-md-3">Doctor</div>
          <div className="col-md-3">Doctor</div>
        </Row>
      </div>
    </Container>
  );
};

export default OurDoctors;
