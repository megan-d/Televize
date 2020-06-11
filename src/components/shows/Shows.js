import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Show from './Show';

function Shows(props) {
  return props.isLoading ? (
    <Spinner />
  ) : !props.isLoading && props.shows.length === 0 ? (
    <p>Your search did not return any results. Please try another search.</p>
  ) : (
    !props.isLoading &&
    props.shows.length > 0 && 
    <div className='cards'>
        {props.shows.map((show, index) => {
            return (
                
                    
                <Show 
                    key={index}
                    id={show.show.id}
                    title={show.show.name}
                    summary={show.show.summary}
                    image={show.show.image}
                />
                
            )
        }) }
    </div>
  );
}

Shows.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  shows: PropTypes.array.isRequired,
};

export default Shows;
