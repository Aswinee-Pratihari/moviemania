import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";
import ReviewCard from "./ReviewCard";

const Reviews = ({ id }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY5NWZhMTgzZGU5MDIwNjQyZjA3MmUxNjlhNjk3MCIsInN1YiI6IjYyNzdhZTM5OTk3OWQyMzRmZTczODEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiXT9CsUkeaRonvbDXoeOSNbPpKKQOSYzrx6HNRmP-8",
      },
    };

    const fetchData = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews`,
        options
      );
      setData(data.data.results);
    };
    fetchData();
  }, [id]);
  return (
    <>
      {data.length > 0 && (
        <>
          <h1 className="font-bold text-4xl">Reviews</h1>
          <Carousel responsive={responsive}>
            {data?.map((item) => {
              return (
                <div className="flex space-x-4" key={item.id}>
                  <ReviewCard id data={item} />
                </div>
              );
            })}
          </Carousel>
        </>
      )}
    </>
  );
};

export default Reviews;
