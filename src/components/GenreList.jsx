import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

const GenreList = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const { data } = useFetch("genre/movie/list");
  // console.log(data);
  const handleOptionChange = (event) => {
    navigate(`/movie/genre/${event.target.value}`);
    setSelectedOption(event.target.value);
  };

  return (
    <div className="md:">
      <div className="flex flex-col ">
        <select
          id="filter"
          className=" text-white  font-semibold tracking-widest p-3 rounded bg-red-700"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option>Filter By Genre</option>
          {data?.genres?.map((genre) => {
            return (
              <option
                value={genre.id}
                className="text-white bg-gray-700 font-semibold z-10"
                key={genre.id}
              >
                {genre.name}
              </option>
              //{" "}
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default GenreList;
