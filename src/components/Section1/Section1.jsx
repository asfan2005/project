import React from "react";
import "./Section1.css";
import sec2 from "../img/sec12.svg";
import box1 from "../img/box1.svg";
import div2_1 from "../img/div21.svg";
import div2_2 from "../img/div22.svg";
import div2_3 from "../img/div23.svg";
import div3 from "../img/div3.svg";
import div4 from "../img/div4.svg";
import div5 from "../img/div5.svg";
function Section1() {
  return (
    <div className="section1">
      <div className="div1">
        <div className="div1Text">
          <p>Scooter sharing made simple</p>
        </div>
        <div className="divDiv">
          <div className="divBox1"></div>
          <div className="divBoxText">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away! <br />
            <button className="btnBox">Get Scootin</button>
          </div>
          <div className="divStyle">
            <img className="divBoxImg" src={sec2} alt="" />
            <div className="divBoxBox">
              <img src={box1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="div2">
        <div className="div2_1">
          <img src={div2_1} alt="" />
          <div className="divStyle1">
            <div className="p1">Locate with app</div>
            <div className="p2">
              Use the app to find the nearest scooter to you. We are
              continuously placing scooters in the areas with most demand, so
              one should never be too far away.
            </div>
          </div>
        </div>
        <div className="div2_1">
          <img src={div2_2} alt="" />
          <div className="divStyle1">
            <div className="p1">Pick your scooter</div>
            <div className="p2">
              We show the most important info for the scooters closest to you.
              So you know how much charge they have left and can see roughly how
              much it will cost.
            </div>
          </div>
        </div>
        <div className="div2_1">
          <img src={div2_3} alt="" />
          <div className="divStyle1">
            <div className="p1">Enjoy the ride</div>
            <div className="p2">
              Scan the QR code and the bike will unlock. Retract the cable lock,
              put on a helmet, and you’re off! Always lock bikes away from
              walkways and accessibility ramps.
            </div>
          </div>
        </div>
      </div>

      <div className="div3">
        <img src={div3} className="div3Img1" />
        <div className="div3Text">
          <p className="div3Text1">Easy to use riding telemetry</p>
          <p className="div3Text2">
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app.
          </p>
          <button className="div3Btn">Learn More</button>
        </div>
        <img src={div3} className="div3Img" />
      </div>

      <div className="div4">
        <img src={div4} className="div4Img" />
        <div className="div4Text">
          <p className="div4Text1">Coming to a city near you</p>
          <p className="div4Text2">
            Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year.
          </p>
          <button className="div4Btn">Learn More</button>
        </div>
      </div>

      <div className="div5">
      <img src={div5} className="div5Img1" alt="" />
        <div className="div5Text">
          <p className="div5Text1">Zero hassle payments</p>
          <p className="div5Text2">
            Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month.
          </p>
          <button className="div5Btn">Learn More</button>
        </div>
        <img src={div5} className="div5Img" alt="" />
      </div>
      
    </div>
  );
}

export default Section1;
