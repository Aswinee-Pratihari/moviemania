import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import MovieCard from "../components/MovieCard";

const PersonDetails = () => {
  const { id } = useParams();
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
  const { data } = useFetch(`person/${id}/combined_credits`);
  console.log(data);
  return (
    <>
      <div className="container mx-auto">
        {data?.cast?.length > 0 && (
          <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-2">
            {data?.cast?.map((item) => {
              return <MovieCard card={item} key={item.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default PersonDetails;
