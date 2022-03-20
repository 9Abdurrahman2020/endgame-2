import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../context/useAuth";
import Card from "../../Shared/Header/Card/Card";
import "./ourDoctor.css";

const OurDoctors = () => {
  const { doctors } = useAuth();
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
          {doctors.slice(0, 4).map((d) => (
            <Card key={d._id} data={d} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default OurDoctors;
