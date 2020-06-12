import React from 'react';
import PropTypes from 'prop-types';

function Searchbox(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type='search'
        placeholder='Search for a movie...'
        onChange={props.onSearchChangeHandler}
      ></input>
      <input type='submit' value='submit'></input>
    </form>
  );
}

Searchbox.propTypes = {
  onSearchChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbox;
