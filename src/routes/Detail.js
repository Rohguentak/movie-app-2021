import React from "react";
import "./detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie_detail">
          <div className="movie_detail_poster">
            <img
              src={location.state.poster}
              title={location.state.title}
              alt={location.state.title}
            />
          </div>
          <div className="movie_detail_info">
            <h1 className="movie_detail_title">{location.state.title}</h1>
            <h2 className="movie_detail_year">{location.state.year}</h2>
            <ul className="detail_genres">
              {location.state.genres.map((genre, index) => (
                <li className="detail_genres__genre" key={index}>
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie_detail_summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
