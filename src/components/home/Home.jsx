import React, { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Describe from "./Describe";
import Footer from "../Footer/Footer";
import Signin from "./Signin";
import Signup from "./Signup";
import Forgot from "./Forgot";
function Home() {
    const [currentView, setCurrentView] = useState('signin'); // Default to 'signin'
    const switchview = (view) => {
      
      setCurrentView(view);
    };
  return (
    <div>
      <Header/>
      <div
        className="hometotal"
        style={{
          backgroundImage:
            "url(https://www.evangadi.com/themes/humans/assets/images/misc/bg-svg-f.svg)",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="home">
          <div className="view-container">
            {currentView === "signin" && (
              <Signin  switchView={switchview} />
            )}
            {currentView === "forgot" && <Forgot switchView={switchview} />}
            {currentView === "signup" && <Signup switchView={switchview} />}
          </div>
          <div>
            <Describe/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
