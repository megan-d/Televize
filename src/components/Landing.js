import React, { Component, Fragment } from 'react';
import Movies from './movies/Movies';
import Searchbox from './search/Searchbox';



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
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=&language=en-US&page=1`)
          .then((response) => response.json())
          .then((data) => this.setState({ movies: data.results, isLoading: false }));
          
      } catch (error) {
        console.error(error);
      }
  }

  onSearchChangeHandler = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  fetchData = (query) => {
    try {
      fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data, isLoading: false }));
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
        <p>Upcoming Movies</p>
        <Movies movies={this.state.movies} isLoading={this.state.isLoading} />
      </Fragment>
    );
  }
}

export default Landing;
