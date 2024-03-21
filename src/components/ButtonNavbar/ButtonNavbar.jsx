import React from "react";
import "./ButtonNavbar.css";
import gply from "../img/gply.svg";
import appst from "../img/appst.svg";
function ButtonNavbar() {
  return (
    <div className="buttonNavbar">
      <div className="btnNavbarText">Sign up and Scoot off today</div>
      <div className="divPlay">
         <img src={gply} alt="" />
         <img src={appst} alt="" />
      </div>
    </div>
  );
}

export default ButtonNavbar;
