import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { List, XLg } from "react-bootstrap-icons";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function getMenyu() {
    setIsOpen(true);
  }
  function closeMenyu() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="navbar">
        <div className="divNavbar">
          <div className="divNavbar1">
            <List onClick={() => getMenyu()} className="list" />
            <Link to={"/"} className="logo">scoot</Link>
            <Link to={"/about"} className="link">
              About
            </Link>
            <Link to={"/location"} className="link">
              Location
            </Link>
            <Link to={"/careers"} className="link">
              Careers
            </Link>
          </div>
          <button className="btnNavbar">Get Scootin</button>
        </div>
      </div>
      {isOpen && (
        <div className="div">
          <XLg onClick={() => closeMenyu()} className="lg" />
          <div className="divLink">
          <Link to={"/about"} className="link1">
              About
            </Link> <br /> <br />
            <Link to={"/location"} className="link1">
              Location
            </Link> <br /> <br />
            <Link to={"/careers"} className="link1">
              Careers
            </Link>
          </div>
          <button className="mobilBtn">Get Scootin</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
