import React, { Component, Fragment } from 'react';
import Movies from './movies/Movies';
import Searchbox from './search/Searchbox';
import { key } from '../config';


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    try {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
          .then((response) => response.json())
          //Filter the movie results to inlclude those with specific genres
          .then((data) => this.setState({ movies: data.results.filter(el => el.genre_ids.includes(28)), isLoading: false }));
          
      } catch (error) {
        console.error(error);
      }
  }

  onSearchChangeHandler = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  fetchData = (query) => {
    try {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.results, isLoading: false }));
    } catch (error) {
      console.error(error);
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    await this.fetchData(this.state.searchfield);
  };

  render() {
    return (
      <Fragment>
        <Searchbox
          onSearchChangeHandler={this.onSearchChangeHandler}
          onSubmit={this.onSubmit}
        />
        <p>Popular Action Movies</p>
        <Movies movies={this.state.movies} isLoading={this.state.isLoading} />
      </Fragment>
    );
  }
}

export default Landing;
