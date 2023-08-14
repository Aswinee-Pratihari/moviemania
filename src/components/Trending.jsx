import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import MovieCard from "./MovieCard";
import axios from "axios";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import useTrending from "../hooks/useTrending";
const Trending = () => {
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
  const tabChange = (tab) => {
    // console.log(tab,index)
    setTab(tab.toLowerCase());
  };
  // const [data, setData] = useState([]);
  const [tab, setTab] = useState("movie");
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY5NWZhMTgzZGU5MDIwNjQyZjA3MmUxNjlhNjk3MCIsInN1YiI6IjYyNzdhZTM5OTk3OWQyMzRmZTczODEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiXT9CsUkeaRonvbDXoeOSNbPpKKQOSYzrx6HNRmP-8",
  //     },
  //   };

  //   const fetchData = async () => {
  //     const data = await axios.get(
  //       `https://api.themoviedb.org/3/trending/${
  //         tab ? tab : "movie"
  //       }/day?language=en-US`,
  //       options
  //     );
  //     setData(data?.data?.results);
  //     console.log(data?.data?.results);
  //   };
  //   fetchData();
  // }, [tab]);

  const { data } = useTrending(tab);
  return (
    <div className="bg-black text-white ">
      <div className="container mx-auto py-10">
        <div className="top flex justify-between items-center">
          <h4 className="text-3xl font-bold tracking-wider">Trending</h4>
          {/* <Tab opt1="TV" opt2="MOVIE" tabChange={tabChange} /> */}
        </div>
        <div className="bottom  ">
          <Carousel responsive={responsive}>
            {data.length > 0 &&
              data?.map((item) => {
                return (
                  <div className="flex justify-center" key={item?.id}>
                    <MovieCard card={item} />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Trending;
