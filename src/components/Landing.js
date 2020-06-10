import React, { Component } from 'react';
import Spinner from '../components/layout/Spinner';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      shows: '',
      isLoading: false
    };
  }

  onSearchChangeHandler = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  fetchData = (query) => {
    try {
      fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then((response) => response.json())
        .then((data) => this.setState({ shows: data, isLoading: false}));
    } catch (error) {
      console.error(error);
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({isLoading: true});
    await this.fetchData(this.state.searchfield);
  };

  render() {
    return (
        this.state.isLoading? (
            <Spinner />
        ) :
      <div>
        <input
          type='search'
          placeholder='Search for a TV show...'
          onChange={this.onSearchChangeHandler}
        ></input>
        <input type='submit' onClick={this.onSubmit}></input>
      </div>
    );
  }
}

export default Landing;
