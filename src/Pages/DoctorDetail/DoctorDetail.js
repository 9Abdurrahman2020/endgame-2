import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const DoctorDetail = () => {
  const [doctor, setDoctor] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { doctors } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    const thisDoctor = doctors.filter((d) => d.id == id);
    setDoctor(thisDoctor);
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/review/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [id]);
  return (
    <Container>
      <div className="w-50 text-center mx-auto my-5">
        <div>
          <img src={doctor[0]?.img} alt="" />
        </div>
        <div>
          <h3>{doctor[0]?.name}</h3>
          <h6>{doctor[0]?.category}</h6>
          <small>{doctor[0]?.deg}</small>
          <p>
            <b>{doctor[0]?.experience}</b> Years of experiences
          </p>
          <p>
            <b>Appointment Fee:</b> {doctor[0]?.fee}TK
          </p>
          <strong>Doctor's Word : {doctor[0]?.des}</strong>
          <br />
          <Link to="/appointment">
            <button className="btn btn-success my-3">Get Appointment</button>
          </Link>
          <Link to={`/review/${doctor[0]?.id}`}>
            <button className="btn btn-danger my-3 ms-3">Give A Review</button>
          </Link>
        </div>
      </div>
      <h2>Reviews:</h2>
      <Row className="g-3 my-3">
        {reviews.map((r) => {
          if (r.status === "approved") {
            return (
              <div className="col-md-6 col-lg-4 shadow p-3">
                <h5>{r.name}</h5>
                <p>{r.comments}</p>
              </div>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default DoctorDetail;
