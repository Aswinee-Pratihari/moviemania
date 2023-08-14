import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";
import useSimilar from "../hooks/useSimilar";

const Similar = ({ id }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  const { data } = useSimilar(id);
  return (
    <>
      {data.length > 0 && (
        <>
          <h1 className="font-bold text-4xl">Similar Movies</h1>
          <Carousel responsive={responsive}>
            {data?.map((item) => {
              return (
                <div className="flex justify-center" key={item.id}>
                  <MovieCard card={item} />
                </div>
              );
            })}
          </Carousel>
        </>
      )}
    </>
  );
};

export default Similar;
