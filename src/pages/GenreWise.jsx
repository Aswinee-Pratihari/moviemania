import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import error from "../assets/delete.png";
const GenreWise = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const query = Number(id);
  // console.log(typeof id);
  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);
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
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&genre=35`,
        options
      );
      setData(
        data?.data?.results?.filter((movie) =>
          movie.genre_ids.includes(Number(id))
        )
      );
      // console.log(
      //   data.data.results.filter((movie) =>
      //     movie.genre_ids.includes(Number(id))
      //   )
      // );
    };
    fetchData();
  }, [page, id]);
  return (
    <div className="container mx-auto">
      {data?.length > 0 ? (
        <>
          <h1 className="font-bold text-4xl">Movies Picked Up for you</h1>
          <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
            {data?.map((movie) => {
              return (
                <div className="flex justify-center" key={movie.id}>
                  <MovieCard card={movie} />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center ">
            <div className="text-5xl font-bold text-red-500">Oops!</div>
            <div className="text-2xl mt-4">Result Not Found</div>
            <img
              src={error} // Replace with your SVG file path
              alt="Error Illustration"
              className="w-[200px] mt-8"
            />
            <button
              className="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setPage(page + 1)}
            >
              Please look in other pages
            </button>
          </div>
        </>
      )}
      <div className="flex justify-center items-center space-x-6">
        <div>
          <div className="flex items-center space-x-4 my-5">
            {numbers?.map((number) => {
              return (
                <button
                  key={number}
                  onClick={() => {
                    setPage(number);
                  }}
                  className="bg-red-900 p-2 rounded-full"
                >
                  {number}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreWise;
