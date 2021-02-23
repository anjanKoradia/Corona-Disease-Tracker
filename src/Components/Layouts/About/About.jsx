import React from "react";
import Alert from "../../Shared/Alert/Alert";
import QuickLinks from "../../Shared/QuickLinks/QuickLinks";
import TransmissionDetailCard from "./TransmissionDetailCard/TransmissionDetailCard";
import spreadA from "../../../Assets/Images/spread-a.png";
import spreadB from "../../../Assets/Images/spread-b.png";
import spreadC from "../../../Assets/Images/spread-c.png";
import "./About.modual.css";

function About() {
  return (
    <section className="about_container">
      <div className="about container">
        <div className="title">
          <h1>ABOUT CORONAVIRUS DISEASE</h1>
          <p>
            COVID-19 is a new illness that can affect your lungs and airways.
          </p>
        </div>
        <div className="about_coronaVirus flex">
          <div className="outbreak_situation">
            <h1>Outbreak Situation</h1>
            <div className="about_outbreakSituation">
              <p>
                Coronavirus disease (COVID-19) is an infectious disease caused
                by a newly discovered coronavirus.COVID-19 affects different
                people in different ways. Most infected people will develop mild
                to moderate illness and recover without hospitalization.
              </p>
              <p>
                Most people infected with the COVID-19 virus will experience
                mild to moderate respiratory illness and recover without
                requiring special treatment. Older people, and those with
                underlying medical problems like cardiovascular disease,
                diabetes, chronic respiratory disease, and cancer are more
                likely to develop serious illness.
              </p>
              <p>
                The best way to prevent and slow down transmission is to be well
                informed about the COVID-19 virus, the disease it causes and how
                it spreads. Protect yourself and others from infection by
                washing your hands or using an alcohol based rub frequently and
                not touching your face.
              </p>
              <p>
                The COVID-19 virus spreads primarily through droplets of saliva
                or discharge from the nose when an infected person coughs or
                sneezes, so it’s important that you also practice respiratory
                etiquette (for example, by coughing into a flexed elbow).
              </p>
              <p>
                Standard recommendations to prevent infection spread include
                regular hand washing, covering mouth and nose when coughing and
                sneezing, thoroughly cooking meat and eggs. Avoid close contact
                with anyone showing symptoms of respiratory illness such as
                coughing and sneezing.
              </p>
            </div>
          </div>
          <div className="info_quickLinks">
            <Alert />
            <QuickLinks />
          </div>
        </div>
        <div className="transmission">
          <h1>Transmission Of Covid-19</h1>
          <div className="flex">
            <TransmissionDetailCard
              image={spreadA}
              title="Droplets that from infected person coughs or sneezes"
              detail="The coronavirus is thought to spread mainly from person to
              person. This can happen between people who are in close
              contact with one another."
            />
            <TransmissionDetailCard
              image={spreadB}
              title="Touching or contact with infected surfaces or objects"
              detail="A person can get COVID-19 by touching a surface or object that
            has the virus on it and then touching their own mouth, nose,
            or possibly their eyes."
            />
            <TransmissionDetailCard
              image={spreadC}
              title="Person-to-person spread as close contact with infected"
              detail=" The coronavirus is thought to spread mainly from person to
             person. This can happen between people who are in close
             contact with one another."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
