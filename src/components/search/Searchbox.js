import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Searchbox(props) {
  return (
      <form className='text-center d-flex justify-content-center' onSubmit={props.onSubmit}>
        <input
          type='search'
          style={{verticalAlign: 'middle'}}
          placeholder='Search for a show...'
          onChange={props.onSearchChangeHandler}
          className='mr-2'
          required
        ></input>
        <input className='btn btn-sm btn-warning' type='submit' value='Submit'></input>
      </form>
  );
}

Searchbox.propTypes = {
  onSearchChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbox;
