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
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const items = [
  { id: 1, img: handWashStap1, title: "Wet Hands" },
  { id: 2, img: handWashStap2, title: "Apply Shop" },
  { id: 3, img: handWashStap3, title: "Rub Hands Palm To Palm" },
  { id: 4, img: handWashStap4, title: "Lather The Backs Of Your Hands" },
  { id: 5, img: handWashStap5, title: "Scrub Between Your Fingers" },
  { id: 6, img: handWashStap6, title: "Rub The Backs Of Fingers" },
  { id: 7, img: handWashStap7, title: "Clean Thumbs" },
  { id: 8, img: handWashStap8, title: "Wash Fingernails And Fingertips" },
  { id: 9, img: handWashStap9, title: "Rinse Hannds" },
  { id: 10, img: handWashStap10, title: "Dry With Single Use Towel" },
  {
    id: 11,
    img: handWashStap11,
    title: "Use The Towel To Turn Off The Faucet",
  },
  { id: 12, img: handWashStap12, title: "Your Hands Are Clean" },
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
          preventDefaultTouchmoveEvent={false}
        >
          {items.map((item) => (
            <div key={item.id} className="handwash_step">
              <img src={item.img} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default StepsToWashHands;
