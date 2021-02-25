import React from "react";
import "./Symptoms.css";
import SymptomCard from "../../Shared/SymptomCard/SymptomCard";
import Fever from "../../../Assets/Images/Fever.png";
import Cough from "../../../Assets/Images/Cough.png";
import Stay_Home from "../../../Assets/Images/stay_home.png";
import Difficulty_Breathing from "../../../Assets/Images/Difficulty-Breathing.png";
import Notice from "../../Shared/Notice/Notice";
import QuickLinks from "../../Shared/QuickLinks/QuickLinks";
import ReactPlayer from "react-player";

function Symptoms() {
  return (
    <section className="symptoms_section container">
      <div className="symptoms">
        <div className="title">
          <h1>SYMPTOMS OF CORONAVIRUS</h1>
          <p>
            There's currently no vaccine to prevent coronavirus disease
            (COVID-19).
          </p>
        </div>
        <div className="top flex">
          <div className="left_side">
            <div className="details">
              <h1>Watch your Symptoms</h1>
              <p>
                The most common symptoms of COVID-19 are fever, tiredness, and
                dry cough. Some patients may have aches and pains, nasal
                congestion, runny nose, sore throat or diarrhea. These symptoms
                are usually mild and begin gradually. Also the symptoms may
                appear 2-14 days after exposure.
              </p>
            </div>
            <div className="major_symptoms">
              <h1>Major & Common Symptoms</h1>
              <SymptomCard
                image={Fever}
                title="Fever"
                detail_title="High Fever – "
                detail="this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign & also may appear in 2-10 days if affected."
              />
              <SymptomCard
                image={Cough}
                title="Cough"
                detail_title="Continuous cough – "
                detail="this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual)."
              />
              <SymptomCard
                image={Difficulty_Breathing}
                title="Shortness of breath"
                detail_title="Difficulty breathing – "
                detail="Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath."
              />
            </div>
            <div className="other_symptoms">
              <h1>Others Symptoms</h1>
              <p>
                Some patients may have aches and pains, nasal congestion, runny
                nose, sore throat or diarrhea. These symptoms are usually mild &
                begin gradually. Some people become infected but don't develop
                any symptoms. Most people (about 80%) recover from the disease
                without needing special treatment.
              </p>
              <p>
                Around 1 out of every 6 people who gets COVID-19 becomes
                seriously ill and develops difficulty breathing. Older people,
                and those with underlying medical problems like high blood
                pressure, heart problems or diabetes, are more likely to develop
                serious illness.
              </p>
            </div>
          </div>
          <div className="right_side">
            <div className="video_player">
              <ReactPlayer url="https://www.youtube.com/embed/bPITHEiFWLc" />
            </div>
            <Notice />
            <QuickLinks />
          </div>
        </div>
        <div className="bottom">
          <div className="title">
            <h1>Symptoms and what to do</h1>
            <p>
              You must do not leave your home if you have any of coronavirus
              symptoms (a high temperature or a new, continuous cough) call your
              medical service.
            </p>
          </div>
          <div className="what_to_do flex align_center justify_between">
            <div className="left_side">
              <h1>Stay at home to stop coronavirus spreading</h1>
              <p>
                Everyone must stay at home to help stop the spread of
                coronavirus. You should only leave the house for very limited
                purposes:
              </p>
              <ul className="whatToDo_list">
                <li>
                  Shopping for basic necessities, for example food and medicine,
                  which must be as important.
                </li>
                <li>
                  One form of exercise a day, for example a run, walk d– alone
                  or with members of your household.
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
                  home without medical care. Do not leave your home, except to
                  get medical care. Do not visit public areas.
                </li>
                <li>
                  Get rest and stay hydrated. Take over-the-counter medicines,
                  such as acetaminophen, to help you feel better.
                </li>
              </ul>
            </div>
            <div className="right_side">
              <img src={Stay_Home} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Symptoms;
