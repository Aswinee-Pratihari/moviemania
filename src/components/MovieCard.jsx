import dayjs from "dayjs";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
const MovieCard = ({ card }) => {
  return (
    <div className="w-48">
      <Link to={`/movie/${card.id}`}>
        <div className="relative my-5">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${card?.poster_path}`}
            alt=""
            className="h-64 w-full rounded-lg shadow-xl object-fill"
          />
          {card?.vote_average && (
            <CircularProgressbar
              value={card?.vote_average?.toFixed(1)}
              maxValue={10}
              text={`${card?.vote_average.toFixed(1)}`}
              styles={buildStyles({
                pathColor: `${
                  card?.vote_average.toFixed(1) < 3
                    ? "red"
                    : card?.vote_average.toFixed(1) < 6
                    ? "orange"
                    : "green"
                }`,
                textSize: "30px",
                textColor: "black",
              })}
              className="w-14 h-14 bg-white rounded-full absolute -bottom-0 -left-5"
            />
          )}
        </div>
        <h4 className="text-lg font-bold">
          {card?.original_title || card?.original_name}
        </h4>
        <span>{dayjs(card?.release_date).format("MMM D, YYYY")}</span>
      </Link>
    </div>
  );
};

export default MovieCard;
