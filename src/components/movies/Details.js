import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Spinner from '../layout/Spinner';
import styled from 'styled-components';

const DetailsBox = styled.div`
  height: 90vh;
  width: 75%;
  background-repeat: no-repeat;
  background-position: top center;
  margin: 5px auto 50px auto;
  z-index: 1;
  position: relative;
  font-family: 'Saira', sans-serif;
`;

const DetailsWrapper = styled.div`
  opacity: 80%;
  background-color: #1d1c1c;
  width: 80%;
  margin: 0 auto;
  z-index: 5;
  border-radius: 3px;
  border: 1px solid slategrey;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  max-height: 80vh;
  position: absolute;
  top: 10%;
  left: 10%;
  overflow: auto;
  justify-content: space-between;
  font-family: 'Saira', sans-serif;
`;

const DetailsHorizontal = styled.hr`
  border: 0.1px solid white;
  width: 25%;
  margin: 2px auto 20px auto;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const DetailsLeft = styled.div`
  flex: 2;
  margin-left: 20px;
`;

const DetailsRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10%;
  margin-right: 5px;
`;

const RatingCircle = styled.div`
  width: 50px;
  height: 53px;
  font-size: 16px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  position: absolute;
  right: 10px;
  top: 10px;
  background: white;
  color: ${(props) =>
    !props.average
      ? 'black'
      : props.average > 7
      ? 'green'
      : props.average < 4
      ? 'red'
      : '#db942c'};
  border: 3px solid
    ${(props) =>
      !props.average
        ? 'black'
        : props.average > 7
        ? 'green'
        : props.average < 4
        ? 'red'
        : '#db942c'};
`;

/* // .details-text,
// .details-overview {
//   font-size: 16px;
// }

// .details-title {
//   font-weight: 700;
//   text-align: center;
//   text-transform: uppercase;
//   font-size: 22px;
//   margin: 5px auto 0 auto;
// }

// .details-list {
//   list-style: none;
// }

// .details-heading {
//   color: #fdc108;
//   padding-right: 7px;
// }


// .genre-heading {
//   font-weight: 500;
//   font-size: 22px;
//   margin-left: 50px;
// }  */

const Details = (props) => {
  //Use hooks instead of media queries so backgroundImage is removed on mobile size
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    //Set event listener for window resize and update state to window width
    window.addEventListener('resize', handleWindowResize);
    //Return a function that removes the event listener
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return props.isLoading ? (
    <Spinner className='full-page' />
  ) : (
    <div className='full-page'>
      <Fragment>
        {//If searching and press back button, re-load the search with the same query. Otherwise, the back button reloads Landing and fetches popular shows, unless it's loaded from a learn more button from findSimilar.
        props.isSearching ? (
          <Button
            size='sm'
            style={{
              maxWidth: '100px',
              marginLeft: '35px',
              marginTop: '20px',
              marginBottom: '5px',
            }}
            variant='outline-warning'
            onClick={() => props.resetSearch(props.query)}
            className='button-text'
          >
            Back
          </Button>
        ) : props.isRec ? (
          //   On button click want to display SearchResults with the recommendations array
          <Button
            size='sm'
            style={{
              maxWidth: '100px',
              marginLeft: '35px',
              marginTop: '20px',
              marginBottom: '5px',
            }}
            variant='outline-warning'
            onClick={() => props.resetRecommendations(props.show.id)}
            className='button-text'
          >
            Back
          </Button>
        ) : (
          <Button
            size='sm'
            style={{
              maxWidth: '100px',
              marginLeft: '35px',
              marginTop: '20px',
              marginBottom: '5px',
            }}
            variant='outline-warning'
            onClick={async () => await props.resetPopular()}
            className='button-top-margin button-text'
          >
            Back Home
          </Button>
        )}

        <DetailsBox
          style={{
            backgroundImage:
              windowWidth > breakpoint
                ? `url(https://image.tmdb.org/t/p/w1280/${props.show.backdrop_path})`
                : null,
          }}
        >
          <DetailsWrapper>
            <p className='details-title'>{props.show.name}</p>
            <DetailsHorizontal></DetailsHorizontal>
            <RatingCircle average={props.show.vote_average}>
              {props.show.vote_average
                ? props.show.vote_average * 10 + '%'
                : 'NR'}
            </RatingCircle>

            <FlexContainer>
              <DetailsLeft>
                <p className='details-overview'>{props.show.overview}</p>
              </DetailsLeft>

              <DetailsRight>
                <ul className='details-text'>
                  <span className='details-heading'>Genres: </span>
                  {props.show.genres.map((show, index) => {
                    return (
                      <li className='details-text details-list' key={index}>
                        {show.name}
                      </li>
                    );
                  })}
                </ul>

                <p className='details-text'>
                  <span className='details-heading'>Number of Episodes: </span>
                  {props.show.number_of_episodes}
                </p>
                <p className='details-text'>
                  <span className='details-heading'>Number of Seasons: </span>
                  {props.show.number_of_seasons}
                </p>
                <p className='details-text'>
                  <span className='details-heading'>User Rating: </span>
                  {props.show.vote_average} / 10
                </p>
              </DetailsRight>
            </FlexContainer>
          </DetailsWrapper>
        </DetailsBox>
      </Fragment>
    </div>
  );
};

Details.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSearching: PropTypes.bool.isRequired,
  isRec: PropTypes.bool.isRequired,
  show: PropTypes.object.isRequired,
  resetSearch: PropTypes.func.isRequired,
  resetPopular: PropTypes.func.isRequired,
  resetRecommendations: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Details;
