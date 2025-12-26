import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
      
        navigate("/dashboard");
      } else {
        setError(data.message); 
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="outer-container">
      <div className="login-container">
        <div className="login-left">
          <div className="branding">
            <h1>
              <span className="logo-icon"></span>Industrimate
            </h1>
            <p>Welcome Back! Please enter your credentials.</p>
          </div>
        </div>
        <div className="login-right">
          <div className="login-form">
               {error && <div className="error-message">{error}</div>}
            <h2>Log in</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  {password && (
                    <span
                      className={`eye-icon ${
                        passwordVisible ? "fa fa-eye-slash" : "fa fa-eye"
                      }`}
                      onClick={togglePasswordVisibility}
                      title={passwordVisible ? "Hide Password" : "Show Password"}
                    ></span>
                  )}
                </div>
              </div>
              <div className="forget__password">
                <a href="/">Forget Password?</a>
              </div>
           
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
