import React from "react";
import { Link } from "react-router-dom";
import { faArrowRight, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import numeral from "numeral";
import heroImg from "../../../../Assets/Images/hero.png";

import "./Hero.css";

const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
const yesterdayDate = yesterday.toDateString()

function Hero({worldCoronaCases}) {
  return (
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
            The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
            in December 2019, the outbreak was later recognized as a pandemic by
            the World Health Organization (WHO) on 11 March 2020.
          </p>
        </div>
        <div className="hero_buttons flex align_center">
          <Link className="btn btn_1" to="/prevention">
            How To Protect
            <FontAwesomeIcon className="faShieldVirus" icon={faShieldVirus} />
          </Link>
          <Link className="btn btn_2" to="/about">
            About COVID-19
            <FontAwesomeIcon className="faArrowRight" icon={faArrowRight} />
          </Link>
        </div>
        <div className="global_cases">
          <div className="cases flex align_center justify_between">
            <div className="confirmed_cases">
              <p>CONFIRMED CASES</p>
              <h1>{numeral(worldCoronaCases.cases).format("0,0")}</h1>
            </div>
            <div className="deaths">
              <p>DEATHS</p>
              <h1>{numeral(worldCoronaCases.deaths).format("0,0")}</h1>
            </div>
            <div className="recovered">
              <p>RECOVERED</p>
              <h1>{numeral(worldCoronaCases.recovered).format("0,0")}</h1>
            </div>
          </div>
          <p>* Last updated: {yesterdayDate} 06:58 AM India/Kolkata</p>
        </div>
      </div>
      <div className="hero_img">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
