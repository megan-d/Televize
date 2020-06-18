import React, { Component, Fragment } from 'react';
import Movies from './movies/Movies';
import Searchbox from './search/Searchbox';
import SearchResults from './search/SearchResults';
import Details from './movies/Details';
import Spinner from './layout/Spinner';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
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
        recommendations: [],
        topRated: [],
        airingToday: [],
      },
      isLoading: true,
      isSearching: false,
      isRec: false,
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
          isRec: false,
          searchfield: '',
        }),
      );
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
              //only include the ones that have a poster_path for image and don't include one with id of 85648 and decent popularity (to filter out certain unwanted movies)
              search: [...data.results.filter((el) => {
                return el.poster_path && el.id !== 85648 && el.popularity >= 6
              })],
              shows: [...data.results.filter((el) => {
                return el.poster_path && el.id !== 85648 && el.popularity >= 6
              })],
            },
            isLoading: false,
            isSearching: true,
            isRec: false
          }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  onSearchChangeHandler = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  onSearchSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, isSearching: true, isRec: false });
    await this.fetchTvSearch(this.state.searchfield);
  };

  resetPopular = () => {
    try {
      this.getPopularTv();
    } catch (error) {
      console.error(error);
    }
  };

  //Reset the search for when searching and click on learn more and then back button is clicked and need to get back to search results.
  resetSearch =  (query) => {
    try {
     fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&page=1&query=${query}&include_adult=false`,
      )
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            tv: {
              search: [...data.results.filter((el) => {
                return el.poster_path && el.id !== 85648 && el.popularity >= 6
              })],
              shows: [...data.results.filter((el) => {
                return el.poster_path && el.id !== 85648 && el.popularity >= 6
              })],
            },
            isLoading: false,
            isSearching: true,
            isDetails: false,
            isRec: false
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
        isRec: false
      });
    } catch (error) {
      console.error(error);
    }
  };

  findSimilar = (id) => {
    try {
        fetch(
           `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${key}&language=en-US&page=1`,
         )
           .then((response) => response.json())
           .then((data) =>
             this.setState({
               tv: {
                 recommendations: [...data.results.filter((el) => {
                   return el.poster_path && el.id !== 85648 && el.popularity >= 6
                 })],
                 shows: [...data.results.filter((el) => {
                   return el.poster_path && el.id !== 85648 && el.popularity >= 6
                 })],
               },
               isLoading: false,
               isSearching: false,
               isDetails: false,
               isRec: true
             }),
           );
       } catch (error) {
         console.error(error);
       }
    }

       findSimilarSearch = (id) => {
        try {
            fetch(
               `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${key}&language=en-US&page=1`,
             )
               .then((response) => response.json())
               .then((data) =>
                 this.setState({
                   tv: {
                     recommendations: [...data.results.filter((el) => {
                       return el.poster_path && el.id !== 85648
                     })],
                     shows: [...data.results.filter((el) => {
                       return el.poster_path && el.id !== 85648
                     })],
                   },
                   isLoading: false,
                   isSearching: true,
                   isDetails: false,
                   isRec: true
                 }),
               );
           } catch (error) {
             console.error(error);
           }
      

}

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
        findSimilar={this.findSimilar}
        findSimilarSearch={this.findSimilarSearch}
      />
    ) : !this.state.isSearching && !this.state.isRec ? (
      this.state.isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Jumbotron fluid style={{backgroundColor: '#2b5d6c'}}>
            <h1 className='text-center'>Your go-to TV reference</h1>
            <p className='text-center'>Browse popular shows, search for shows, and view recommendations</p>
            <Searchbox
            onSearchChangeHandler={this.onSearchChangeHandler}
            onSubmit={this.onSearchSubmit}
          />
          </Jumbotron>
          
          <h2 className='genre-heading'>Popular Shows</h2>
          <Movies
            shows={this.state.tv.popular}
            isLoading={this.state.isLoading}
            getDetails={this.getDetails}
            findSimilar={this.findSimilar}
            findSimilarSearch={this.findSimilarSearch}
          />
        </Fragment>
      )
    ) : this.state.isRec ? (
        <SearchResults
        shows={this.state.tv.recommendations}
        isLoading={this.state.isLoading}
        isSearching={this.state.isSearching}
        isRec={this.state.isRec}
        searchfield={this.state.searchfield}
        reset={this.resetPopular}
        getDetails={this.getDetails}
        findSimilar={this.findSimilar}
        findSimilarSearch={this.findSimilarSearch}
      />
    ) : (
      <SearchResults
        shows={this.state.tv.search}
        isLoading={this.state.isLoading}
        isSearching={this.state.isSearching}
        searchfield={this.state.searchfield}
        reset={this.resetPopular}
        getDetails={this.getDetails}
        isRec={this.state.isRec}
        findSimilar={this.findSimilar}
        findSimilarSearch={this.findSimilarSearch}
      />
    );
  }
}

export default Landing;
