import React, { Component, Fragment } from 'react';
import Movies from './movies/Movies';
import Searchbox from './search/Searchbox';
import SearchResults from './search/SearchResults';
import { key } from '../config';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      movies: [],
      action: [],
      comedy: [],
      adventure: [],
      drama: [],
      horror: [],
      isLoading: true,
      isSearching: false,
    };
  }

  componentDidMount() {
    try {
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
    } catch (error) {
      console.error(error);
    }
  }

  onSearchChangeHandler = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  fetchData = (query) => {
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
    await this.fetchData(this.state.searchfield);
  };

  resetSearch = () => {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/top_ratedapi_key=${key}&language=en-US&page=1`,
      )
        .then((response) => response.json())
        //Filter the movie results to inlclude those with specific genres
        .then((data) =>
          this.setState({
            action: data.results.filter((el) => el.genre_ids.includes(28)),
            isLoading: false,
            isSearching: false,
            searchfield: '',
          }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return !this.state.isSearching ? (
      <Fragment>
        <Searchbox
          onSearchChangeHandler={this.onSearchChangeHandler}
          onSubmit={this.onSubmit}
        />
        <Movies
          movies={this.state.action}
          isLoading={this.state.isLoading}
          genre={'Action'}
        />
        <Movies
          movies={this.state.comedy}
          isLoading={this.state.isLoading}
          genre={'Comedy'}
        />
        <Movies
          movies={this.state.adventure}
          isLoading={this.state.isLoading}
          genre={'Adventure'}
        />
        <Movies
          movies={this.state.drama}
          isLoading={this.state.isLoading}
          genre={'Drama'}
        />
        <Movies
          movies={this.state.horror}
          isLoading={this.state.isLoading}
          genre={'Horror'}
        />
      </Fragment>
    ) : (
      <SearchResults
        movies={this.state.movies}
        isLoading={this.state.isLoading}
        isSearching={this.state.isSearching}
        searchfield={this.state.searchfield}
        reset={this.resetSearch}
      />
    );
  }
}

export default Landing;
