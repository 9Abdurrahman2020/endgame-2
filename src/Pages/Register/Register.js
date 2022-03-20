import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Register = () => {
  const { googleSignIn, registerUser, setEmail, setPass, error } = useAuth();
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h1 className="text-center">Register</h1>
          <div>
            <p>Email:</p>
            <input onChange={emailHandler} type="email" />
            <p>Password:</p>
            <input onChange={passHandler} type="password" />
            <br />
            <p className="text-danger text-center">{error}</p>
            <button
              onClick={registerUser}
              className="btn btn-primary login-btn"
            >
              Register
            </button>
            <p className="text-center">
              Already Registered? <Link to="/login">Login</Link>
            </p>
            <p className="text-center">Or Sign Up with</p>
            <div className="signup-btn-container">
              <button onClick={googleSignIn} className="signup-google-btn">
                Signup with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
