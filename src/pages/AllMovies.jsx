import axios from "axios";
import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import useAllMovie from "../hooks/useAllMovie";

const AllMovies = () => {
  const [page, setPage] = useState(1);
  const { data } = useAllMovie(page);
  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="container mx-auto">
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
      <div className="flex justify-center items-center space-x-6">
        <div>
          <div className="flex items-center space-x-4">
            {numbers?.map((number) => {
              return (
                <button
                  key={number}
                  onClick={() => {
                    setPage(number);
                  }}
                  className="bg-red-400 px-2 rounded-full"
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

export default AllMovies;
