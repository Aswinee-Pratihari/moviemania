import React, { useEffect } from "react";
import HeroBanner from "../components/HeroBanner";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import PopularPeople from "../components/PopularPeople";
import InTheatre from "../components/InTheatre";

const Home = () => {
  return (
    <>
      {/* <HeroBanner /> */}

      <InTheatre />
      <Trending />
      <Popular />
      <PopularPeople />
    </>
  );
};

export default Home;
