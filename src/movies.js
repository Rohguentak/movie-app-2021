import React from "react"
import PropTypes from "prop-types"
import "./movie.css"
function Movies({id, year,title,summary,poster}){
    return <div class="movie">
        <div class="movie_poster">
            <img src={poster} title={title} alt={title}/>
        </div>
        <div class="movie_info">
            <h3 class="movie_title">{title}</h3>
            <h5 class="movie_year">{year}</h5>
            <p class="movie_suppary">{summary}</p>
        </div>
    </div>
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}


export default Movies