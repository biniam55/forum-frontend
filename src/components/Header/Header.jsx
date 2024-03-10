import { React } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="headlogoandlinks">
        <div style={{ cursor: "pointer" }} className="headlogo">
          <img
            src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
            alt=""
          />
        </div>
        <div className="headlinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="https://www.evangadi.com/explained/">How it works</Link>
            </li>
            <Link>
              <li
                style={{
                  color: "white",
                  fontFamily: "Lato",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                className="headsignin"
              >
                SIGN IN
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
