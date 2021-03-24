import React, { useState, useEffect } from "react";

import Hero from "./Hero/Hero";
import StepsToWashHands from "./StepsToWashHands/StepsToWashHands";
import WhatToDoInCorona from "./WhatToDoInCorona/WhatToDoInCorona";

function Home() {
  const [totalCasesData, setTotalCasesData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setTotalCasesData(data);
      });
  }, []);

  return (
    <section className="home_container">
      <Hero worldCoronaCases = {totalCasesData}/>
      <WhatToDoInCorona />
      <StepsToWashHands />
    </section>
  );
}

export default Home;
