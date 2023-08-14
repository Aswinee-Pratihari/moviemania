import axios from "axios";
import React, { useEffect, useState } from "react";

const usePopular = (tab) => {
  //   console.log(id);
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
        `https://api.themoviedb.org/3/${tab}/top_rated?language=en-US&page=1`,
        options
      );
      setData(data.data.results);
    };
    fetchData();
  }, [tab]);
  return { data };
};

export default usePopular;
