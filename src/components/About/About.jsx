import React from "react";
import "./About.css";
import about2 from "../img/about2.svg";
import abou3 from "../img/about3.svg";
function About() {
  return (
    <div className="about">
      <div className="aboutDiv1">
        <p className="aboutDiv1Text">About</p>
      </div>

      <div className="aboutDiv2">
        <img src={about2} className="aboutDiv2Img1" />
        <div className="aboutDiv2Text">
          <p className="aboutDiv2Text1">Mobility for the digital era</p>
          <div className="aboutDiv2Text2">
            Getting around should be simple (and even fun!) for everyone. We
            embrace technology to provide low cost, smart access to scooters at
            your fingertips.
          </div>
        </div>
        <img src={about2} className="aboutDiv2Img" />
      </div>

      <div className="div4">
        <img src={abou3} className="div4Img" />
        <div className="div4Text">
          <p className="div4Text1">Better urban living</p>
          <p className="div4Text2">
            We’re helping connect cities and bring people closer together. Our
            scooters are also fully-electric and we offset the minimal carbon
            footprint for each ride.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
