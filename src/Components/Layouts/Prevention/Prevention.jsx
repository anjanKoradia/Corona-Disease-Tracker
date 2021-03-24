import React from "react";
import ReactPlayer from "react-player";
import Alert from "../../Shared/Alert/Alert";
import QuickLinks from "../../Shared/QuickLinks/QuickLinks";
import PreventionStepsCard from "./PreventionStepsCard/PreventionStepsCard";
import home from "../../../Assets/Images/home.png";
import wash_hand from "../../../Assets/Images/wash_hand.png";
import touching_face from "../../../Assets/Images/touching_face.png";
import hygiene from "../../../Assets/Images/hygiene.png";
import CoronaCasesInfo from "../../Shared/CoronaCasesInfo/CoronaCasesInfo";
import "./Prevention.css"

function Prevention() {
  return (
    <section className="prevention_section container">
      <div className="prevention">
        <div className="title">
          <h1>PREVENTIONS OF CORONAVIRUS</h1>
          <p>
            There’s currently no vaccine to prevent coronavirus disease
            (COVID-19).
          </p>
        </div>
        <div className="prevention_for_yourself flex">
          <div className="prevention_setps_for_yourself">
            <h1>Watch your Symptoms</h1>
            <p>
              The most common symptoms of COVID-19 are fever, tiredness, and dry
              cough. Some patients may have aches and pains, nasal congestion,
              runny nose, sore throat or diarrhea. These symptoms are usually
              mild and begin gradually. Also the symptoms may appear 2-14 days
              after exposure.
            </p>
            <PreventionStepsCard
              className="card"
              title="Wash your hands frequently"
              detail1="Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds."
              detail2="Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands."
              image={wash_hand}
            />
            <PreventionStepsCard
              className="card"
              title="Maintain social distancing"
              detail1="Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected."
              detail2="Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease."
              image={home}
            />
            <PreventionStepsCard
              className="card"
              title="Avoid touching face"
              detail1="Do not touch your eyes, nose or mouth if your hands are not clean."
              detail2="Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick."
              image={touching_face}
            />
            <PreventionStepsCard
              className="card"
              title="Practice respiratory hygiene"
              detail1="Make sure you, & the people around you, follow good respiratory hygiene. This means covering your mouth & nose with your bent elbow or tissue when you cough or sneeze."
              detail2="Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19."
              image={hygiene}
            />
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
            <CoronaCasesInfo />
            <QuickLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prevention;
