import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../context/useAuth";
import DepartmentCard from "./DepartmentCard";

const HospitalDepartment = () => {
  const { department } = useAuth();
  return (
    <Container>
      <h1 className="text-center">Hospital Department</h1>
      <hr style={{ height: "2px" }} className="ourdoctors-horizental-line" />
      <Row className="g-4">
        {department?.length > 1 &&
          department.map((d) => <DepartmentCard key={d.id} data={d} />)}
      </Row>
    </Container>
  );
};

export default HospitalDepartment;
