import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";

function Signin({ switchView }) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://request-response-server.vercel.app/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setSuccess(data.message);
      console.log(data)
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        Navigate("/afterlogin");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ fontFamily: "Lato" }} className="login">
      <h3 className="logincommand">Log in to your account</h3>
      <p className="donthave">
        Don’t have an account?
        <Link onClick={() => switchView("signup")}>Create a new account</Link>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email adress"
        />

        <br />
        <div className="password-container">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={visible ? "text" : "password"}
            placeholder="Password"
            className="password-input"
          />
          {visible ? (
            <IoMdEye onClick={() => setVisible(false)} className="eye-icon" />
          ) : (
            <FaRegEyeSlash
              onClick={() => setVisible(true)}
              className="eye-icon"
            />
          )}
        </div>
        <p style={{ color: "red", fontSize: "15px" }}>{success}</p>
        <br />

        <Link className="forgot" onClick={() => switchView("forgot")}>
          Forgot Password?
        </Link>
        <button className="loginbutton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signin;
