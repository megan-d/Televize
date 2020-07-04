import React from 'react';
import Button from 'react-bootstrap/Button';
import Landing from '../Landing';

const About = () => {
  return (
    <div className='full-search-page'>
        <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '1.5rem' }}
            variant='outline-warning'
            className='button-top-margin'
            href='/'
          >
            Back Home
          </Button>
      <h1 className='text-center'>About</h1>
    </div>
  );
};

export default About;