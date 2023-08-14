import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const BASE_URL = "https://api.themoviedb.org/3/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const data = await axios.get(`${BASE_URL}${url}`, options);
      setData(data?.data);
      // console.log(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { data, loading };
};

export default useFetch;
