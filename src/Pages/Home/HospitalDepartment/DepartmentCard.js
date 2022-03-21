import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const DepartmentCard = ({ data }) => {
  const url = `/department/${data.id}`;
  return (
    <div className="col-md-3 card-box">
      <Link to={url}>
        <Card className="card">
          <Card.Img variant="top" src={data.img} />
          <Card.Body>
            <span className="card-category">{data?.title}</span>
            <p>{data.des.slice(0, 80)}...</p>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default DepartmentCard;
