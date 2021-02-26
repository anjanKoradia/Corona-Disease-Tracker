import React from "react";
import { Link } from "react-router-dom";
import { faArrowRight, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImg from "../../../Assets/Images/hero.png";
import "./Home.css";

import Stay_Home from "../../../Assets/Images/stay_home.png";

function Home() {
  return (
    <section className="home_container">
      <div className="hero container flex align_center justify_between">
        <div className="hero_details">
          <div className="tag">
            <span>Stay Home</span>
          </div>
          <div className="title flex align_center">
            <h1>CORONA</h1>
            <div>
              <h3>COVID-19</h3>
              <h2>VIRUS</h2>
            </div>
          </div>
          <div className="detail">
            <p>
              The Coronavirus (COVID-19) was first reported in Wuhan, Hubei,
              China in December 2019, the outbreak was later recognized as a
              pandemic by the World Health Organization (WHO) on 11 March 2020.
            </p>
          </div>
          <div className="hero_buttons flex align_center">
            <Link className="btn btn_1" to="/">
              How To Protect
              <FontAwesomeIcon className="faShieldVirus" icon={faShieldVirus} />
            </Link>
            <Link className="btn btn_2" to="/">
              About COVID-19
              <FontAwesomeIcon className="faArrowRight" icon={faArrowRight} />
            </Link>
          </div>
          <div className="global_cases">
            <div className="cases flex align_center justify_between">
              <div className="confirmed_cases">
                <p>CONFIRMED CASES</p>
                <h1>105,512,828</h1>
              </div>
              <div className="deaths">
                <p>DEATHS</p>
                <h1>2,296,684</h1>
              </div>
              <div className="recovered">
                <p>RECOVERED</p>
                <h1>77,133,136</h1>
              </div>
            </div>
            <p>* Last updated: Feb 05, 2021, 06:58 AM America/Chicago</p>
          </div>
        </div>
        <div className="hero_img">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="WhatToDo_In_Corona container">
        <div className="what_to_do flex align_center justify_between">
          <div className="steps">
            <h1>Stay at home to stop coronavirus spreading</h1>
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
                Any medical need, including to donate blood, avoid or escape
                risk of injury or harm, or to provide care or to help a
                vulnerable person.
              </li>
              <li>
                Travelling for work purposes, but only where you cannot work
                from home.
              </li>
              <li>
                Most people with COVID-19 have mild illness and can recover at
                home without medical care. Do not leave your home, except to get
                medical care. Do not visit public areas.
              </li>
              <li>
                Get rest and stay hydrated. Take over-the-counter medicines,
                such as acetaminophen, to help you feel better.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={Stay_Home} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
