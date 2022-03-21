import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../context/useAuth";
import "./header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand>
          <img
            className="our-logo"
            src="https://www.medilabbd.com/images/Logo.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 nav-link text-center">
            <Link to="/">Home</Link>
            <Link to="/appointment">Book-Appointment</Link>
            {user && (
              <a>
                <i class="fas fa-user"></i>
                {user?.displayName || "Unknown"}
              </a>
            )}
            {user ? (
              <button className="btn btn-danger" onClick={logOut}>
                logOut
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
