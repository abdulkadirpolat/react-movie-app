import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
require("dotenv").config();
class App extends React.Component {
  state = {
    movies: [],
    searchChange: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/4/list/7106878?page=1&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      );  
    this.setState({ movies: response.data.results });
  }

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      (movi) => movi.id !== movie.id
    );

    this.setState({
      movies: newMovieList,
    });
  };

  searchMovie = (e) => {
    this.setState({ searchChange: e.target.value.trim().toLowerCase() });
  };

  render() {
    let filterMov = this.state.movies.filter(
      (movie) =>
        movie.title.toLowerCase().indexOf(this.state.searchChange) !== -1
    );
    return (
      <div className="container px-5"  >
        
        <SearchBar
          inputType="text"
          placeHolder="Search movies"
          searchMovieProps={this.searchMovie}
        />

        <MovieList deleteMovieProps={this.deleteMovie} movies={filterMov} />
      </div>
    );
  }
}

export default App;
