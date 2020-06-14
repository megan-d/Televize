import React, { Component, Fragment } from 'react';
import Movies from './movies/Movies';
import Searchbox from './search/Searchbox';
import SearchResults from './search/SearchResults';
import Details from './movies/Details';
import Spinner from './layout/Spinner';
import { key } from '../config';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      movie: [],
      movies: [],
      action: [],
      comedy: [],
      adventure: [],
      drama: [],
      horror: [],
      isLoading: true,
      isSearching: false,
      isDetails: false,
    };
  }

  componentDidMount() {
    try {
      this.getPopularMovies();
    } catch (error) {
      console.error(error);
    }
  }

  getPopularMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    )
      .then((response) => response.json())
      //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
      .then((data) =>
        this.setState({
          movies: data.results,
          action: data.results
            .filter((el) => el.genre_ids.includes(28))
            .slice(0, 4),
          comedy: data.results
            .filter((el) => el.genre_ids.includes(35))
            .slice(0, 4),
          adventure: data.results
            .filter((el) => el.genre_ids.includes(12))
            .slice(0, 4),
          drama: data.results
            .filter((el) => el.genre_ids.includes(18))
            .slice(0, 4),
          horror: data.results
            .filter((el) => el.genre_ids.includes(27))
            .slice(0, 4),
          isLoading: false,
          isSearching: false,
          searchfield: '',
        }),
      );
  };

  onSearchChangeHandler = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  fetchSearch = (query) => {
    try {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({ movies: data.results, isLoading: false }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, isSearching: true });
    await this.fetchSearch(this.state.searchfield);
  };

  resetPopular = () => {
    try {
      this.getPopularMovies();
    } catch (error) {
      console.error(error);
    }
  };

  getDetails = async (id) => {
    // const id = e.currentTarget.value;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
      );
      const data = await response.json();
      this.setState({ movie: data, isDetails: true });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return !this.state.isSearching ? (
      this.state.isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Searchbox
            onSearchChangeHandler={this.onSearchChangeHandler}
            onSubmit={this.onSubmit}
          />
          <h2 className='genre-heading'>Popular Action Movies</h2>
          <Movies
            movies={this.state.action}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
          <h2 className='genre-heading'>Popular Comedy Movies</h2>
          <Movies
            movies={this.state.comedy}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
          <h2 className='genre-heading'>Popular Adventure Movies</h2>
          <Movies
            movies={this.state.adventure}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
          <h2 className='genre-heading'>Popular Drama Movies</h2>
          <Movies
            movies={this.state.drama}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
          <h2 className='genre-heading'>Popular Horror Movies</h2>
          <Movies
            movies={this.state.horror}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
        </Fragment>
      )
    ) : (
      <SearchResults
        movies={this.state.movies}
        isLoading={this.state.isLoading}
        isSearching={this.state.isSearching}
        searchfield={this.state.searchfield}
        reset={this.resetPopular}
      />
    );
  }
}

export default Landing;
