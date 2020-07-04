import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Spinner from '../layout/Spinner';
import styled from 'styled-components';

const DetailsBox = styled.div`
  height: 90vh;
  width: 90%;
  background-repeat: no-repeat;
  background-position: top center;
  margin: 5px auto 50px auto;
  z-index: 1;
  position: relative;
  font-family: 'Saira', sans-serif;
  background-image: ${(props) => props.backdrop};
  @media only screen and (max-width: 760px) {
    min-height: 90vh;
    margin: 10px auto;
  }
`;

const DetailsWrapper = styled.div`
  opacity: 0.8;
  -webkit-opacity: 0.8;
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
  @media only screen and (max-width: 1000px) {
    top: 5%;
  }
  @media only screen and (max-width: 760px) {
    min-height: 70vh;
    width: 90%;
    left: 5%;
  }
`;

const DetailsHorizontal = styled.hr`
  border: 0.1px solid white;
  width: 25%;
  margin: 2px auto 20px auto;
`;

const FlexContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const DetailsLeft = styled.div`
  flex: 2;
  margin-left: 20px;
  @media only screen and (max-width: 760px) {
    margin-right: 20px;
  }
`;

const DetailsRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10%;
  margin-right: 5px;
  @media only screen and (max-width: 760px) {
    display: block;
    margin-left: 20px;
    margin-right: 20px;
  }
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
  @media only screen and (max-width: 1000px) {
    position: static;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;

const DetailsUlText = styled.ul`
  font-size: 16px;
`;
const DetailsList = styled.li`
  list-style: none;
  font-size: 16px;
`;

const DetailsText = styled.p`
  font-size: 16px;
`;

const DetailsTitle = styled.p`
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  margin: 5px auto 0 auto;
`;

const DetailsHeading = styled.span`
  color: #fdc108;
  padding-right: 7px;
`;

const Details = (props) => {
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
              marginLeft: '20px',
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
              marginLeft: '20px',
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
              marginLeft: '20px',
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
          backdrop={`url(https://image.tmdb.org/t/p/w1280/${props.show.backdrop_path})`}
        >
          <DetailsWrapper>
            <DetailsTitle>{props.show.name}</DetailsTitle>
            <DetailsHorizontal></DetailsHorizontal>
            <RatingCircle average={props.show.vote_average}>
              {props.show.vote_average
                ? props.show.vote_average * 10 + '%'
                : 'NR'}
            </RatingCircle>

            <FlexContainer>
              <DetailsLeft>
                <DetailsText>{props.show.overview}</DetailsText>
              </DetailsLeft>

              <DetailsRight>
                <DetailsUlText>
                  <DetailsHeading>Genres:</DetailsHeading>
                  {props.show.genres.map((show, index) => {
                    return <DetailsList key={index}>{show.name}</DetailsList>;
                  })}
                </DetailsUlText>

                <DetailsText>
                  <DetailsHeading>Number of Episodes: </DetailsHeading>
                  {props.show.number_of_episodes}
                </DetailsText>
                <DetailsText>
                  <DetailsHeading>Number of Seasons: </DetailsHeading>
                  {props.show.number_of_seasons}
                </DetailsText>
                <DetailsText>
                  <DetailsHeading>User Rating: </DetailsHeading>
                  {props.show.vote_average}
                </DetailsText>
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
