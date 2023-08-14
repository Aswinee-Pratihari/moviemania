import React from "react";

const MovieShimmer = () => {
  return (
    <div className="flex overflow-hidden items-center justify-between my-5 drop-shadow-md ">
      <div className="w-48 h-64 bg-gray-400 rounded-lg animate-pulse"></div>
      <div className="w-48 h-64 bg-gray-400 rounded-lg animate-pulse"></div>
      <div className="w-48 h-64 bg-gray-400 rounded-lg animate-pulse"></div>
      <div className="w-48 h-64 bg-gray-400 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default MovieShimmer;
