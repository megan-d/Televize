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
      tv: {
        shows: [],
        show: [],
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
            shows: [...data.results.filter((el) => el.poster_path)],
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

  fetchTvSearch = async (query) => {
    try {
      await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&page=1&query=${query}&include_adult=false`,
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            tv: {
              //only include the ones that have a poster_path for image
              search: [...data.results.filter((el) => el.poster_path)],
              shows: [...data.results.filter((el) => el.poster_path)],
              
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
    await this.fetchTvSearch(this.state.searchfield);
  };

  resetPopular = () => {
    try {
      this.getPopularTv();
    } catch (error) {
      console.error(error);
    }
  };

  resetSearch = (query) => {
    try {
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&page=1&query=${query}&include_adult=false`,
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            tv: {
              search: [...data.results.filter((el) => el.poster_path)],
              shows: [...data.results.filter((el) => el.poster_path)],
            },
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
        `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`,
      );
      const data = await response.json();
      this.setState({
        tv: {
            show: data,
        },
        isDetails: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return this.state.isDetails ? (
      <Details
        isLoading={this.state.isLoading}
        show={this.state.tv.show}
        isSearching={this.state.isSearching}
        resetPopular={this.resetPopular}
        fetchSearch={this.fetchTvSearch}
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
            shows={this.state.tv.popular}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
          />
        </Fragment>
      )
    ) : (
      <SearchResults
        shows={this.state.tv.search}
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
