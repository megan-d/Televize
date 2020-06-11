import React from 'react';
import PropTypes from 'prop-types';

function Searchbox(props) {
  return (
    <div>
      <input
        type='search'
        placeholder='Search for a TV show...'
        onChange={props.onSearchChangeHandler}
      ></input>
      <input type='submit' onClick={props.onSubmit}></input>
    </div>
  );
}

Searchbox.propTypes = {
  onSearchChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbox;
