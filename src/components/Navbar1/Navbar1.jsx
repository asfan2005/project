import React from "react";
import "./Navbar1.css";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "react-bootstrap-icons";
function Navbar1() {
  return (
    <div className="navbar1">
      <div className="navbar1Text">
        <Link to={"/"} className="navbar1Text1">scoot</Link>
        <Link to={"/about"} className="linknav1">
          About
        </Link>
        <Link to={"/location"} className="linknav1">
          Location
        </Link>
        <Link to={"/careers"} className="linknav1">
          Careers
        </Link>
      </div>
      <div className="navbar1Icons">
        <Instagram
          style={{ fontSize: "25px" }}
          color="#FCB72B"
        />
        <Twitter
          style={{ fontSize: "25px" }}
          color="#FCB72B"
        />
        <Facebook
          style={{ fontSize: "25px" }}
          color="#FCB72B"
        />
      </div>
    </div>
  );
}

export default Navbar1;
