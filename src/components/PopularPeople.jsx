import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import MovieCard from "./MovieCard";
import axios from "axios";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import PeopleCard from "./PeopleCard";
import useFetch from "../hooks/useFetch";
const PopularPeople = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const page = Math.ceil(Math.random() * 20);

  const { data, loading } = useFetch(
    `person/popular?language=en-US&page=${page}`
  );

  return (
    <div className="bg-black text-white ">
      <div className="container mx-auto py-10">
        <div className="top flex justify-between items-center">
          <h4 className="text-3xl font-bold tracking-wider">
            Celebs you might like Watching
          </h4>
        </div>
        <div className="bottom my-5 ">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            autoPlay={true}
            infinite={true}
          >
            {data.results?.length > 0 &&
              data?.results?.map((item) => {
                return (
                  <div className="flex justify-center" key={item?.id}>
                    <PeopleCard card={item} />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PopularPeople;
