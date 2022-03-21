import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../context/useAuth";
import CardCompo from "../../Shared/Header/Card/Card";
import "./ourDoctor.css";

const OurDoctors = () => {
  const { doctors } = useAuth();
  const [page, setPage] = useState(0);
  const [selectedBtn, setSelectedBtn] = useState(1);
  const btn1Handler = () => {
    setPage(0);
    setSelectedBtn(1);
  };
  const btn2Handler = () => {
    setPage(4);
    setSelectedBtn(2);
  };
  return (
    <Container>
      <div className="our-doctor-section mb-5 py-4">
        <div className="text-center my-5">
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
        <Row className="g-3">
          {doctors.slice(page, page + 4).map((d) => (
            <CardCompo key={d._id} data={d} />
          ))}
        </Row>
        <div className="pagination">
          <button
            className={selectedBtn === 1 && "selected"}
            onClick={btn1Handler}
          >
            1
          </button>
          <button
            className={selectedBtn === 2 && "selected"}
            onClick={btn2Handler}
          >
            2
          </button>
        </div>
      </div>
    </Container>
  );
};

export default OurDoctors;
