import React, { Component, Fragment } from 'react';
import Movies from './movies/Movies';
import Searchbox from './search/Searchbox';
import SearchResults from './search/SearchResults';
import Recommendations from './movies/Recommendations';
import Details from './movies/Details';
import Spinner from './layout/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import tv from '../assets/stock-tv.jpg';
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
        onAir: [],
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
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
    }
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  //Get the popular shows and now airing shows from API. Run getAiringToday method as a callback to ensure state is already set with getPopularTv state update. This method will run on mount for landing page.
  getPopularTv = async () => {
    try {
      await fetch('/api/shows/popular')
        .then((response) => response.json())
        //Filter the show results to inlclude those with specific genres and only include first 4 for each genre
        .then((data) =>
          this.setState(
            {
              tv: {
                ...this.state.tv,
                popular: [
                  ...data.results.filter(
                    (el) => el.poster_path && el.backdrop_path,
                  ),
                ],
                shows: [
                  ...data.results.filter(
                    (el) => el.poster_path && el.backdrop_path,
                  ),
                ],
              },
              isLoading: false,
              isSearching: false,
              isDetails: false,
              isRec: false,
              searchfield: '',
            },
            () => this.getAiringToday(),
          ),
        );
    } catch (error) {
      console.log(error);
    }
  };
  //Get the shows airing today from API. Will run on mount for landing page.
  getAiringToday = async () => {
    try {
      await fetch('/api/shows/airing')
        .then((response) => response.json())
        //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
        .then((data) =>
          this.setState(
            {
              tv: {
                ...this.state.tv,
                airingToday: [
                  ...data.results.filter(
                    (el) =>
                      el.poster_path &&
                      el.backdrop_path &&
                      el.id !== 85648 &&
                      el.popularity >= 4,
                  ),
                ],
              },
              isLoading: false,
              isSearching: false,
              isDetails: false,
              isRec: false,
              searchfield: '',
            },
            () => this.getOnAir(),
          ),
        );
    } catch (error) {
      console.log(error);
    }
  };

  //Get the top rated shows from API. Will run on mount for landing page.
  getOnAir = async () => {
    try {
      await fetch('/api/shows/onair')
        .then((response) => response.json())
        //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
        .then((data) =>
          this.setState({
            tv: {
              ...this.state.tv,
              onAir: [
                ...data.results.filter(
                  (el) =>
                    el.poster_path &&
                    el.backdrop_path &&
                    el.id !== 85648 &&
                    el.popularity >= 50,
                ),
              ],
            },
            isLoading: false,
            isSearching: false,
            isDetails: false,
            isRec: false,
            searchfield: '',
          }),
        );
    } catch (error) {
      console.log(error);
    }
  };

  //Function that runs when a user performs a search for a show
  fetchTvSearch = async (query) => {
    try {
      await fetch(`/api/shows/${query}`)
        .then((response) => response.json())
        //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
        .then((data) =>
          this.setState({
            tv: {
              //only include the ones that have a poster_path for image and don't include one with id of 85648 and decent popularity (to filter out certain unwanted movies)
              ...this.state.tv,
              search: [
                ...data.results.filter((el) => {
                  return (
                    el.poster_path &&
                    el.backdrop_path &&
                    el.id !== 85648 &&
                    el.popularity >= 5
                  );
                }),
              ],
            },
            isLoading: false,
            isSearching: true,
            isRec: false,
            isDetails: false,
          }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  //Update the searchfield state when user changes the search input
  onSearchChangeHandler = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  //Set state and fetch searh when user clicks submit button for search. An empty search is not accepted.
  onSearchSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true, isSearching: true, isRec: false });
    await this.fetchTvSearch(this.state.searchfield);
  };

  //Call the function to get popular shows and airing today shows (to be used when going back to landing page from anotehr page)
  resetPopular = async () => {
    try {
      await this.getPopularTv();
    } catch (error) {
      console.error(error);
    }
  };

  //Reset the search for when searching and click on learn more and then back button is clicked and need to get back to search results.
  resetSearch = async (query) => {
    try {
      await fetch(`/api/shows/${query}`)
        .then((response) => response.json())
        //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
        .then((data) =>
          this.setState({
            tv: {
              ...this.state.tv,
              search: [
                ...data.results.filter((el) => {
                  return (
                    el.poster_path &&
                    el.backdrop_path &&
                    el.id !== 85648 &&
                    el.popularity >= 5
                  );
                }),
              ],
              shows: [
                ...data.results.filter((el) => {
                  return (
                    el.poster_path &&
                    el.backdrop_path &&
                    el.id !== 85648 &&
                    el.popularity >= 5
                  );
                }),
              ],
            },
            isLoading: false,
            isSearching: true,
            isDetails: false,
            isRec: false,
          }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  //Reset the recommendations for when click on learn more and then back button is clicked and need to get back to list of recommendations (in recommendations array)
  resetRecommendations = () => {
    this.setState({
      isLoading: false,
      isDetails: false,
      isRec: true,
    });
  };

  //Get the details of a show by clicking Learn More button (and when not coming from recommendation)
  getDetails = async (id) => {
    try {
      await fetch(`/api/show/${id}`)
        .then((response) => response.json())
        //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
        .then((data) =>
          this.setState({
            tv: {
              ...this.state.tv,
              show: data,
            },
            isDetails: true,
            isRec: false,
          }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  //Get the details of a show by clicking Learn More button when coming from recommendation (because will want to go back to recommendations page)
  getRecDetails = async (id) => {
    try {
      await fetch(`/api/show/${id}`)
        .then((response) => response.json())
        //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
        .then((data) =>
          this.setState({
            tv: {
              ...this.state.tv,
              show: data,
            },
            isDetails: true,
            isRec: true,
          }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  //Find similar shows based on a given show id
  findSimilar = async (id) => {
    try {
      await fetch(`/api/show/${id}/recommendations`)
        .then((response) => response.json())
        //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
        .then((data) =>
          this.setState({
            tv: {
              ...this.state.tv,
              recommendations: [
                ...data.results.filter((el) => {
                  return (
                    el.poster_path &&
                    el.backdrop_path &&
                    el.id !== 85648 &&
                    el.popularity >= 5
                  );
                }),
              ],
              shows: [
                ...data.results.filter((el) => {
                  return (
                    el.poster_path &&
                    el.backdrop_path &&
                    el.id !== 85648 &&
                    el.popularity >= 5
                  );
                }),
              ],
            },
            isLoading: false,
            isSearching: false,
            isDetails: false,
            isRec: true,
          }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  //Find similar shows based on a given id when actively searching
  findSimilarSearch = async (id) => {
    try {
      await fetch(`/api/show/${id}/recommendations`)
        .then((response) => response.json())
        //Filter the movie results to inlclude those with specific genres and only include first 4 for each genre
        .then((data) =>
          this.setState({
            tv: {
              ...this.state.tv,
              recommendations: [
                ...data.results.filter((el) => {
                  return (
                    el.poster_path &&
                    el.backdrop_path &&
                    el.id !== 85648 &&
                    el.popularity >= 5
                  );
                }),
              ],
              shows: [
                ...data.results.filter((el) => {
                  return (
                    el.poster_path &&
                    el.backdrop_path &&
                    el.id !== 85648 &&
                    el.popularity >= 5
                  );
                }),
              ],
            },
            isLoading: false,
            isSearching: true,
            isDetails: false,
            isRec: true,
          }),
        );
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return this.state.isDetails ? (
      <Fragment>
        <Searchbox
          onSearchChangeHandler={this.onSearchChangeHandler}
          onSubmit={this.onSearchSubmit}
        />
        <Details
          isLoading={this.state.isLoading}
          show={this.state.tv.show}
          rec={this.state.tv.recommendations}
          isSearching={this.state.isSearching}
          isRec={this.state.isRec}
          resetPopular={this.resetPopular}
          resetRecommendations={this.resetRecommendations}
          resetRecs={this.resetRecommendations}
          fetchSearch={this.fetchTvSearch}
          resetSearch={this.resetSearch}
          query={this.state.searchfield}
          findSimilar={this.findSimilar}
          findSimilarSearch={this.findSimilarSearch}
          className='grow'
        />
      </Fragment>
    ) : !this.state.isSearching && !this.state.isRec ? (
      this.state.isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Jumbotron
            fluid
            style={{
              backgroundColor: '#2b2a2a',
              height: '60vh',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${tv})`,
            }}
            className='jumbo'
          >
            <h1 className='text-center banner-text'>
              Your <span className='highlight-text'>Go-To</span> TV Reference
            </h1>
            <p className='text-center banner-text subtitle'>
              Browse shows, get details, and view recommendations
            </p>
            <Searchbox
              onSearchChangeHandler={this.onSearchChangeHandler}
              onSubmit={this.onSearchSubmit}
            />
          </Jumbotron>

          <h2 className='genre-heading'>Popular</h2>
          <Movies
            shows={this.state.tv.popular}
            isLoading={this.state.isLoading}
            isRec={this.state.isRec}
            isSearching={this.state.isSearching}
            getDetails={this.getDetails}
            getRecDetails={this.getRecDetails}
            findSimilar={this.findSimilar}
            findSimilarSearch={this.findSimilarSearch}
          />
          <hr></hr>
          <h2 className='genre-heading'>Airing Today</h2>
          <Movies
            shows={this.state.tv.airingToday}
            isLoading={this.state.isLoading}
            isRec={this.state.isRec}
            isSearching={this.state.isSearching}
            getDetails={this.getDetails}
            getRecDetails={this.getRecDetails}
            findSimilar={this.findSimilar}
            findSimilarSearch={this.findSimilarSearch}
          />
          <hr></hr>
          <h2 className='genre-heading'>Currently On Air</h2>
          <Movies
            shows={this.state.tv.onAir}
            isLoading={this.state.isLoading}
            isRec={this.state.isRec}
            isSearching={this.state.isSearching}
            getDetails={this.getDetails}
            getRecDetails={this.getRecDetails}
            findSimilar={this.findSimilar}
            findSimilarSearch={this.findSimilarSearch}
          />
        </Fragment>
      )
    ) : this.state.isRec ? (
      <Fragment>
        <Searchbox
          onSearchChangeHandler={this.onSearchChangeHandler}
          onSubmit={this.onSearchSubmit}
        />
        <Recommendations
          shows={this.state.tv.recommendations}
          isLoading={this.state.isLoading}
          isSearching={this.state.isSearching}
          isRec={this.state.isRec}
          searchfield={this.state.searchfield}
          reset={this.resetPopular}
          resetRec={this.resetRecommendations}
          getDetails={this.getDetails}
          getRecDetails={this.getRecDetails}
          findSimilar={this.findSimilar}
          findSimilarSearch={this.findSimilarSearch}
        />
      </Fragment>
    ) : (
      <Fragment>
        <Searchbox
          onSearchChangeHandler={this.onSearchChangeHandler}
          onSubmit={this.onSearchSubmit}
        />
        <SearchResults
          shows={this.state.tv.search}
          isLoading={this.state.isLoading}
          isSearching={this.state.isSearching}
          searchfield={this.state.searchfield}
          reset={this.resetPopular}
          resetRec={this.resetRecommendations}
          getDetails={this.getDetails}
          getRecDetails={this.getRecDetails}
          isRec={this.state.isRec}
          findSimilar={this.findSimilar}
          findSimilarSearch={this.findSimilarSearch}
        />
      </Fragment>
    );
  }
}

export default Landing;
