import React from 'react';
import axios from 'axios';
import Movies from './movies'
import "./app.css"
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies,isLoading: false}) // 아래와 같은 의미
    //this.setState({movies:movies}) //앞의 movies는 state의 배열 뒤의 movies는 axios로 받아온 movies
  }
  componentDidMount(){
    this.getMovies()
  }
  render(){
    const {isLoading,movies} = this.state
    return (<section class="container">
      {isLoading ? (
        <div class="loader">
          <span class="loader__text">Loading...</span>
        </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movies 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />)
          )}
          </div>
        )}
    </section>
    )
  }
}

export default App;