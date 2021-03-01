import React from "react";

import "./WhatToDoInCorona.css";

import Stay_Home from "../../../../Assets/Images/stay_home.png";

function WhatToDoInCorona() {
  return (
    <div className="WhatToDo_In_Corona container">
      <div className="heading">
        <div className="tag">
          <span>What To Do In Corona</span>
        </div>
        <h1>Stay at home to stop coronavirus spreading</h1>
      </div>
      <div className="what_to_do flex">
        <div className="image">
          <img src={Stay_Home} alt="" />
        </div>
        <div className="steps">
          <p>
            Everyone must stay at home to help stop the spread of coronavirus.
            You should only leave the house for very limited purposes:
          </p>
          <ul className="whatToDo_list">
            <li>
              Shopping for basic necessities, for example food and medicine,
              which must be as important.
            </li>
            <li>
              One form of exercise a day, for example a run, walk d– alone or
              with members of your household.
            </li>
            <li>
              Any medical need, including to donate blood, avoid or escape risk
              of injury or harm, or to provide care or to help a vulnerable
              person.
            </li>
            <li>
              Travelling for work purposes, but only where you cannot work from
              home.
            </li>
            <li>
              Most people with COVID-19 have mild illness and can recover at
              home without medical care. Do not leave your home, except to get
              medical care. Do not visit public areas.
            </li>
            <li>
              Get rest and stay hydrated. Take over-the-counter medicines, such
              as acetaminophen, to help you feel better.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhatToDoInCorona;
