import React from "react";
import "./Describe.css";
function Describe() {
  return (
    <div className="describe" style={{ paddingTop: "50px" }}>
      <p className="about">About</p>
      <h1 className="title">Evangadi Networks</h1>
      <p>
        No matter what stage of life you are in, whether you’re just starting
        elementary <br /> school or being promoted to CEO of a Fortune 500
        company, you have much to <br /> offer to those who are trying to follow
        in your footsteps.
      </p>
      <br />
      <br />
      <p>
        Wheather you are willing to share your knowledge or you are just looking
        to meet <br /> mentors of your own, please start by joining the network
        here.
      </p>
      <br />
      <button className="describebutton">HOW IT WORKS</button>
    </div>
  );
}

export default Describe;
