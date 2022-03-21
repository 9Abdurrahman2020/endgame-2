import React from "react";
import { Button, Nav, Tab } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../context/useAuth";
import "./dashboard.css";

function Dashboard() {
  const { logOut } = useAuth();

  return (
    <>
      <div className="dashboard-menu-container">
        <Tab.Container defaultActiveKey="first">
          <div className="sidebar-container">
            <Nav variant="pills" className="flex-column dashboard-nav-links">
              <Nav.Item className="">
                <Nav.Link>
                  <Link to={`/`} className="dashboard-menu">
                    <span className="logo-style">{}</span>Home
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="first">
                  <Link to={`/dashboard`} className="dashboard-menu">
                    <span className="logo-style">{}</span>Appointments
                  </Link>
                </Nav.Link>
                <Nav.Link eventKey="second">
                  <Link to={`/dashboard/coupon`} className="dashboard-menu">
                    <span className="logo-style">{}</span>Set Coupon
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button onClick={logOut} variant="danger" className="m-3">
                  {}LogOut
                </Button>
              </Nav.Item>
            </Nav>
          </div>

          <div className="border">
            <Outlet></Outlet>
          </div>
        </Tab.Container>
      </div>
      ;
    </>
  );
}

export default Dashboard;
