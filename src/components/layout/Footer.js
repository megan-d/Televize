import React from 'react';
import tmdblogo from '../../assets/tmdblogo.svg';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2b2a2a'}}>
      <p>
        Data and images provided by{' '}
        <a
          href='https://www.themoviedb.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          TMDb
        </a>
      </p>
      <img src={tmdblogo} alt='logo' className='tmdb-logo'></img>
    </footer>
  );
}
