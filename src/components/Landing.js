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
      movies: {
        search: [],
        popular: [],
        nowPlaying: [],
        upcoming: [],
        popularAction: [],
        popularAdventure: [],
        popularComedy: [],
        popularThriller: [],
      },
      tv: {
        search: [],
        popular: [],
        topRated: [],
        airingToday: [],
      },
      isLoading: true,
      isSearching: false,
      isDetails: false,
    };
  }

  componentDidMount() {
    try {
      this.getPopularMovies();
      this.getPopularTv();
    } catch (error) {
      console.error(error);
    }
  }

  getPopularTv = async () => {
    await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    )
      .then((response) => response.json())
      //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
      .then((data) =>
        this.setState({
          tv: {
            popular: [...data.results.filter((el) => el.poster_path)],
          },
        }),
      );
  };

  getPopularMovies = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&include_adult=false&page=1`,
    )
      .then((response) => response.json())
      //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
      .then((data) =>
        this.setState({
          movies: {
            popular: [...data.results.filter((el) => el.poster_path)],
            popularAction: [
              ...data.results.filter((el) => {
                return el.genre_ids.includes(28) && el.poster_path;
              }),
            ],
            popularComedy: [
              ...data.results.filter((el) => el.genre_ids.includes(35)),
            ],
            popularAdventure: [
              ...data.results.filter((el) => el.genre_ids.includes(12)),
            ],
            popularThriller: [
              ...data.results.filter((el) => el.genre_ids.includes(53)),
            ],
          },
          isLoading: false,
          isSearching: false,
          isDetails: false,
          searchfield: '',
        }),
      );
  };

  onSearchChangeHandler = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  fetchMovieSearch = (query) => {
    try {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            movies: {
              //only include the ones that have a poster_path for image
              search: [...data.results.filter((el) => el.poster_path)],
            },
            isLoading: false,
            isSearching: true,
          }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, isSearching: true });
    await this.fetchMovieSearch(this.state.searchfield);
  };

  resetPopular = () => {
    try {
      this.getPopularMovies();
    } catch (error) {
      console.error(error);
    }
  };

  resetSearch = (query) => {
    try {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            movies: data.results,
            isLoading: false,
            isSearching: true,
            isDetails: false,
          }),
        );
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
    return this.state.isDetails ? (
      <Details
        isLoading={this.state.isLoading}
        movie={this.state.movie}
        isSearching={this.state.isSearching}
        resetPopular={this.resetPopular}
        fetchSearch={this.fetchMovieSearch}
        resetSearch={this.resetSearch}
        query={this.state.searchfield}
      />
    ) : !this.state.isSearching ? (
      this.state.isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Searchbox
            onSearchChangeHandler={this.onSearchChangeHandler}
            onSubmit={this.onSubmit}
          />
         <h2 className='genre-heading'>Popular Shows</h2>
          <Movies
            movies={this.state.tv.popular}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
          {/* <h2 className='genre-heading'>Popular Action Movies</h2>
          <Movies
            movies={this.state.movies.popularAction}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
          <h2 className='genre-heading'>Popular Comedy Movies</h2>
          <Movies
            movies={this.state.movies.popularComedy}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
          <h2 className='genre-heading'>Popular Adventure Movies</h2>
          <Movies
            movies={this.state.movies.popularAdventure}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
          <h2 className='genre-heading'>Popular Thriller Movies</h2>
          <Movies
            movies={this.state.movies.popularThriller}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          /> */}
        </Fragment>
      )
    ) : (
      <SearchResults
        movies={this.state.movies.search}
        isLoading={this.state.isLoading}
        isSearching={this.state.isSearching}
        searchfield={this.state.searchfield}
        reset={this.resetPopular}
        getDetails={this.getDetails}
      />
    );
  }
}

export default Landing;
