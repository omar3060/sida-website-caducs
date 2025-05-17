import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Partners from "./components/Partners";
import FeaturesTables from "./components/FeaturesTables";
import SidaOffers from "./components/SidaOffers";
import WhoWeServe from "./components/WhoWeServe";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Partners />
      <FeaturesTables />
      <SidaOffers />
      <WhoWeServe />
    </div>
  );
};

export default Home;
