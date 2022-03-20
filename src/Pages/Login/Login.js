import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";
import "./login.css";
const Login = () => {
  const { googleSignIn, error, loginUsingEmailPass, setEmail, setPass } =
    useAuth();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="text-center">Login</h1>
        <div>
          <p>Email:</p>
          <input type="email" onBlur={emailHandler} />
          <p>Password:</p>
          <input type="password" onBlur={passHandler} />
          <br />
          <p className="text-danger text-center">{error}</p>
          <button
            onClick={loginUsingEmailPass}
            className="btn btn-primary login-btn"
          >
            login
          </button>
          <p className="text-center">
            New User? <Link to="/register">Register</Link>
          </p>
          <p className="text-center">Or Sign Up Using</p>
          <div className="signup-btn-container">
            <button onClick={googleSignIn} className="signup-google-btn">
              Signup with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
