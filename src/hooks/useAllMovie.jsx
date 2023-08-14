import axios from "axios";
import React, { useEffect, useState } from "react";
const useAllMovie = (page) => {
  const [data, setData] = useState();

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
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&genre=35`,
        options
      );
      setData(data.data.results);
      // console.log(
      //   data.data.results.filter((movie) => movie.genre_ids.includes(35))
      // );
    };
    fetchData();
  }, [page]);
  return { data };
};

export default useAllMovie;
