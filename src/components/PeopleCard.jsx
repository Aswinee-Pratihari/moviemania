import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = ({ card }) => {
  return (
    <div className="  flex flex-col items-center ">
      <Link to={`/people/${card.id}`}>
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${
            card?.profile_path || card?.logo_path
          }`}
          alt=""
          className="w-28 h-28 rounded-full object-cover border-4 bg-white"
        />

        <p className="font-semibold ">{card?.name}</p>
      </Link>
    </div>
  );
};

export default PeopleCard;
