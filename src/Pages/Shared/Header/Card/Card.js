import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.css";
const CardCompo = ({ data }) => {
  const url = `/doctor/${data.id}`;
  return (
    <div className="col-md-3 card-box">
      <Link to={url}>
        <Card className="card">
          <Card.Img variant="top" src={data.img} />
          <Card.Body>
            <h5>{data.name}</h5>
            <span className="card-category">{data?.category}</span>
            <p>{data.des.slice(0, 80)}...</p>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default CardCompo;
