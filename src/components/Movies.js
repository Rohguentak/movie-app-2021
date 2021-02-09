import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./movie.css";

function Movies({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          id,
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <div className="movie_poster">
          <img src={poster} title={title} alt={title} />
        </div>
        <div className="movie_info">
          <h3 className="movie_title">{title}</h3>
          <h4 className="movie_year">{year}</h4>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li className="genres__genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie_suppary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
