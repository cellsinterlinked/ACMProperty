import React from "react";

import LandingVideo from "../Components/Visuals/LandingVideo";
import Welcome from "../Components/Welcome";
import Reasons from "../Components/Reaons";

import Glimpse from "../Components/Glimpse";
import Reviews from "../Components/Reviews/Reviews";
import Areas from "../Components/Areas/Areas";

import PreFooter from "../Components/Nav/PreFooter";

function Landing() {
  return (
    <>
      <LandingVideo />
      <Welcome />
      <Reasons />
      <Glimpse />
      {/* <Reviews /> */}
      <Areas />
      <PreFooter />
    </>
  );
}

export default Landing;
