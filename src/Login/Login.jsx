import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./login.css"; // Import your CSS file

// Login Component
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // useNavigate for programmatic navigation

  // Check if user is already logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      navigate("/home"); // Redirect to the home page if already logged in
    }
  }, [navigate]);

  // Regular expression for email validation
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      // Simulate login (replace with your actual authentication logic)
      localStorage.setItem("loggedIn", "true"); // Set login status to true
      navigate("/home"); // Redirect to the home page
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
          <a href="/login">Forgot password?</a>
        </div>

        <button type="submit" className="login-button">Login</button>

        <div className="social-login">
          <p>or connect with</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
