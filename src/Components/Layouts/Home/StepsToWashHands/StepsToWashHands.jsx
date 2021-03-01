import React from "react";

import Carousel from "react-elastic-carousel";
import "./StepsToWashHands.css";

import handWashStap1 from "../../../../Assets/Images/handWash_step1.png";
import handWashStap2 from "../../../../Assets/Images/handWash_step2.png";
import handWashStap3 from "../../../../Assets/Images/handWash_step3.png";
import handWashStap4 from "../../../../Assets/Images/handWash_step4.png";
import handWashStap5 from "../../../../Assets/Images/handWash_step5.png";
import handWashStap6 from "../../../../Assets/Images/handWash_step6.png";
import handWashStap7 from "../../../../Assets/Images/handWash_step7.png";
import handWashStap8 from "../../../../Assets/Images/handWash_step8.png";
import handWashStap9 from "../../../../Assets/Images/handWash_step9.png";
import handWashStap10 from "../../../../Assets/Images/handWash_step10.png";
import handWashStap11 from "../../../../Assets/Images/handWash_step11.png";
import handWashStap12 from "../../../../Assets/Images/handWash_step12.png";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

function StepsToWashHands() {
  return (
    <div className="steps_to_wash_hands container">
      <div className="heading">
        <div className="tag">
          <span>Follow Steps</span>
        </div>
        <h1>Follow steps to wash hands</h1>
      </div>
      <div className="steps">
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          enableAutoPlay={true}
          autoPlaySpeed={2000}
          preventDefaultTouchmoveEvent={true}
        >
          <div className="handwash_step">
            <img src={handWashStap1} alt="" />
            <p>Wet Hands</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap2} alt="" />
            <p>Apply Shop</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap3} alt="" />
            <p>Rub Hands Palm To Palm</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap4} alt="" />
            <p>Lather The Backs Of Your Hands</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap5} alt="" />
            <p>Scrub Between Your Fingers</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap6} alt="" />
            <p>Rub The Backs Of Fingers On The Opposing Plams</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap7} alt="" />
            <p>Clean Thumbs</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap8} alt="" />
            <p>Wash Fingernails And Fingertips</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap9} alt="" />
            <p>Rinse Hannds</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap10} alt="" />
            <p>Dry With Single Use Towel</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap11} alt="" />
            <p>Use The Towel To Turn Off The Faucet</p>
          </div>
          <div className="handwash_step">
            <img src={handWashStap12} alt="" />
            <p>Your Hands Are Clean</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default StepsToWashHands;
