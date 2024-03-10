import React from "react";
import "./Home.css"
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const Navigate = useNavigate();
  const handleLogout = () => {
    const token = localStorage.getItem('token');
        console.log('Token before logout:', token); 
    localStorage.removeItem('token'); 
        Navigate('/');
    };
  return (
    <div style={{ fontFamily: "Lato" }} className="header">
      <div className="headlogoandlinks">
        <Link to="/afterlogin">
          <div style={{ cursor: "pointer" }} className="headlogo">
            <img
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
              alt=""
            />
          </div>
        </Link>
        <div className="headlinks">
          <ul>
            <li>
              <Link to="/" ClassName="activeLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" activeClassName="activeLink">
                How it works
              </Link>
            </li>
            <li style={{fontFamily:"Lato",color:"white",cursor:"pointer"}} onClick={handleLogout} className="headsignin">SIGN OUT </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
