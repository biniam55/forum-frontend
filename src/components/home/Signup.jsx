import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";
function Signup({ switchView }) {
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await axios.post(
        "https://request-response-server.vercel.app/api/users/register",
        data,
        {
          headers: {
            "content-Type": "application/json",
          },
        }
      );
      setSuccess(response.data.message);
      if (response.status === 200 || response.status === 201) {
        // console.log("user registered successfully")
        setTimeout(() => {
          switchView("signin");
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        setSuccess(`Error: - ${error.response.data.message}`);
      } else if (error.request) {
        setSuccess("No response received from the server.");
      } else {
        setSuccess("An unexpected error occurred.");
      }
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  }
  return (
    <div style={{ fontFamily: "Lato" }} className="signup">
      <h3 className="signupcommand">Join the network</h3>
      <p className="donthave">
        Already have an account?
        <Link
          style={{ cursor: "pointer" }}
          onClick={() => switchView("signin")}
          className="signin"
        >
          Sign in
        </Link>
        {/* {" "} */}
      </p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email adress" name="email" />
        <div className="firstlast">
          <input placeholder="First name" name="firstname" /> <br />
          <input type="text" placeholder="last name" name="lastname" /> <br />
        </div>
        <input placeholder="Username" name="username" /> <br />
        <div className="password-container">
          <input
            name="password"
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
        <p className="success">{success}</p>
        <br />
        <p className="termsandpolicy">
          I agree to the <Link>privacy policy</Link> and{" "}
          <Link>terms of service</Link> .
        </p>
        <button className="signupbutton" type="submit">
          Agree and Join
        </button>
      </form>
      <p className="already">
        {" "}
        <Link onClick={() => switchView("signin")}>
          Already have an account?
        </Link>
      </p>
      {/* {" "} */}
    </div>
  );
}

export default Signup;
