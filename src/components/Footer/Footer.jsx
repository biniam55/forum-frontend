import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footertotal">
        <div className="footerleftside">
          <img
            src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
            alt="footer logo"
          />
          <br />
          <Link>
            {/* {" "} */}
            <FaFacebook
              className="facebook"
              style={{
                color: "white",
                fontSize: "15px",
                borderRadius: "50%",
                border: "1px solid white",
                outline: "none",
                cursor: "pointer",
                padding: "8px",
                marginRight: "20px",
              }}
            />
          </Link>

          <Link>
            {/* {" "} */}
            <FaSquareInstagram
              className="instagram"
              style={{
                color: "white",
                fontSize: "15px",
                borderRadius: "50%",
                border: "1px solid white",
                outline: "none",
                cursor: "pointer",
                padding: "8px",
                marginRight: "20px",
              }}
            />
          </Link>
          <Link>
            {/* {" "} */}
            <IoLogoYoutube
              className="youtube"
              style={{
                color: "white",
                fontSize: "15px",
                borderRadius: "50%",
                border: "1px solid white",
                outline: "none",
                cursor: "pointer",
                padding: "8px",
              }}
            />
          </Link>
        </div>
        <div className="footercenter">
          <h3>Useful Link</h3>
          <ul>
            <li>
              <Link>How it works</Link>
              <Link>Terms of Service</Link>
              <Link>Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="footerrightside">
          <h2>Contact Info</h2>
          <p>Evangadi Networks</p>
          <p>support@evangadi.com</p>
          <p>+1-202-386-2702</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
