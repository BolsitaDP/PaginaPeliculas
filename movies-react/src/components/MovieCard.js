import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import placeholder from "../placeholder.png";

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
    : placeholder;
  return (
    <div>
      <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
          <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
        </Link>

        <div>{movie.title}</div>
      </li>
    </div>
  );
};

export default MovieCard;
