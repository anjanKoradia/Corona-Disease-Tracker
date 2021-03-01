import React from "react";

import Hero from "./Hero/Hero";
import StepsToWashHands from "./StepsToWashHands/StepsToWashHands";
import WhatToDoInCorona from "./WhatToDoInCorona/WhatToDoInCorona";

function Home() {
  return (
    <section className="home_container">
      <Hero />
      <WhatToDoInCorona />
      <StepsToWashHands />
    </section>
  );
}

export default Home;
