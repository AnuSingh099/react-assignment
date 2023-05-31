import React from "react";
import "./SignIn.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";

const SignInComponent = () => {
  return (
    <div className="container">
      <div className="board">Board</div>
      <div className="row">
        <div className="signin-section">
          <div className="signin-header">
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </div>
          <div className="signin-buttons">
            <button>
              <GoogleIcon /> Sign In with Google
            </button>
            <button>
              <AppleIcon /> Sign In with Apple
            </button>
          </div>
          <div className="input-fields">
            <div className="input-group">
              <label>Email Address:</label>
              <input type="email" />
            </div>
            <div className="input-group">
              <label>Password:</label>
              <input type="password" />
            </div>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <Link to={`/Dashboard`}
           className="signin-button">
            <button>Sign In</button>
            <p>Don't have an account? Register here</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
