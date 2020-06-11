import React, { Component, Fragment } from 'react';
import Shows from './shows/Shows';
import Searchbox from './search/Searchbox';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      shows: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    try {
        fetch(`http://api.tvmaze.com/search/shows?q=family`)
          .then((response) => response.json())
          .then((data) => this.setState({ shows: data, isLoading: false }));
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
        .then((data) => this.setState({ shows: data, isLoading: false }));
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
        <p>Example search...</p>
        <Shows shows={this.state.shows} isLoading={this.state.isLoading} />
      </Fragment>
    );
  }
}

export default Landing;
