import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function Searchbox(props) {
  return (
    <Fragment>
      <form className='text-center' onSubmit={props.onSubmit}>
        <input
          type='search'
          style={{verticalAlign: 'middle'}}
          placeholder='Search for a show...'
          onChange={props.onSearchChangeHandler}
          required
        ></input>
        <input className='btn btn-sm btn-warning' type='submit' value='Submit'></input>
      </form>
    </Fragment>
  );
}

Searchbox.propTypes = {
  onSearchChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbox;
