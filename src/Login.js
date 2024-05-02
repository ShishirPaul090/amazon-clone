import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { auth, registerAccount, loginRequest } from "./firebase"; // Import auth

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    loginRequest(email, password)
      .then((auth) => {
        if (auth != undefined || auth != null) {
          navigate("/");
        } else {
          alert("user credential not found");
        }
        // Use navigate instead of history.push
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    registerAccount(email, password)
      .then((auth) => {
        if (auth != undefined || auth != null) {
          navigate("/");
        } else {
          alert("user credential not found");
        }
        // Use navigate instead of history.push
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.shutterstock.com/image-vector/amazon-logo-editorial-icon-isolated-260nw-2313339121.jpg"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <div>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signin} className="login_signinButton">
            Sign In
          </button>
        </div>
        <p>
          By signing-in you agree to Amazon's Fake Clone Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interested-Based Ads
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
