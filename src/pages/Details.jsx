import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import Carousel from "react-multi-carousel";
import PeopleCard from "../components/PeopleCard";
import Similar from "../components/Similar";
import Recommended from "../components/Recommended";
import Reviews from "../components/Reviews";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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
  // const { data, loading } = useFetch(`movie/${id}`);
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
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
        `https://api.themoviedb.org/3/movie/${id}`,
        options
      );
      setData(data.data);
      console.log(data.data);
    };
    fetchData();
  }, [id]);
  return (
    <div className="container mx-auto space-y-5">
      {data && (
        <>
          <div className="flex justify-between items-center max-md:flex-col">
            <div className="flex-1">
              {/* <img src={data?.backdrop_path} alt="" /> */}
              <img
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${data?.backdrop_path}`}
                alt=""
                className=" w-full object-contain max-md:w-1/2 mx-auto"
              />
            </div>
            <div className="flex-[2] space-y-4 ml-6">
              <h1 className="font-bold text-4xl">{data?.original_title}</h1>
              <span className="font-bold text-lg text-red-600">
                {data?.tagline}
              </span>
              <div className="flex flex-wrap justify-start  gap-4">
                {data?.genres?.map((genre) => {
                  return (
                    <Link
                      to={`/movie/genre/${genre.id}`}
                      key={genre.id}
                      className="text-sm font-bold bg-pink-700 py-1 rounded-sm px-2"
                    >
                      {genre.name}
                    </Link>
                  );
                })}
              </div>

              <div className="space-y-6">
                <p className="text-lg tracking-wider text-gray-600 font-semibold">
                  {data?.overview}
                </p>

                <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-2">
                  {data?.production_companies?.map((comp) => {
                    return (
                      <div
                        className="  flex flex-col items-center "
                        key={comp.id}
                      >
                        <img
                          src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${
                            comp?.profile_path || comp?.logo_path
                          }`}
                          alt=""
                          className=" h-24 w-24  object-cover rounded-full border-4 bg-white"
                        />

                        <p className="font-semibold ">{comp?.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Reviews id={id} />
          <Similar id={id} />
          <Recommended id={id} />
        </>
      )}
    </div>
  );
};

export default Details;
