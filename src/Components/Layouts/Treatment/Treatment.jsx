import React from "react";
import ReactPlayer from "react-player";
import Alert from "../../Shared/Alert/Alert";
import QuickLinks from "../../Shared/QuickLinks/QuickLinks";
import "./Treatment.css";

function Treatment() {
  return (
    <section className="treatment_section container">
      <div className="treatment">
        <div className="title">
          <h1>TREATMENT FOR CORONAVIRUS</h1>
          <p>
            Coronavirus disease is an infectious disease caused by a
            newly discovered coronavirus.
          </p>
        </div>
        <div className="corona_treatment flex">
          <div className="treatment_details">
            <p>
              To date, there is no vaccine and no specific antiviral medicine to
              prevent or treat COVID-2019. However, those affected should
              receive care to relieve symptoms. People with serious illness
              should be hospitalized. Most patients recover thanks to supportive
              care.
            </p>
            <p>
              Antibiotics do not help, as they do not work against viruses.
              Treatment aims to relieve the symptoms while your body fights the
              illness. You'll need to stay in isolation, away from other people,
              until you have recovered.
            </p>
            <p>
              Everyone should keep a healthy lifestyle at home. Maintain a
              healthy diet, sleep, stay active, and make social contact with
              loved ones through the phone or internet. Children need extra love
              and attention from adults during difficult times. Keep to regular
              routines and schedules as much as possible.
            </p>
            <div className="treatment_type">
              <div className="self_care">
                <h3>Self Care</h3>
                <p>
                  If you have mild symptoms, stay at home until you’ve
                  recovered. You can relieve your symptoms if you:
                </p>
                <ul>
                  <li>
                    <p>Rest and sleep</p>
                  </li>
                  <li>
                    <p>Keep warm</p>
                  </li>
                  <li>
                    <p>Drink plenty of liquids</p>
                  </li>
                  <li>
                    <p>
                      Use a room humidifier or take a hot shower to help ease a
                      sore throat and cough
                    </p>
                  </li>
                </ul>
              </div>
              <div className="medical_treatment">
                <h3>Medical Treatments</h3>
                <p>
                  If you have mild symptoms and are otherwise healthy,
                  self-isolate and contact your medical provider or a COVID-19
                  information line for advice. Seek medical care if you have a
                  fever, cough, and difficulty breathing. Call in advance.
                </p>
              </div>
            </div>
          </div>
          <div className="info_quickLinks">
            <div className="video_player">
              <ReactPlayer
                url="https://www.youtube.com/embed/bPITHEiFWLc"
                width="450px"
                height="250px"
              />
            </div>
            <Alert />
            <QuickLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Treatment;
