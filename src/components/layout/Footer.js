import React from 'react';
import tmdblogo from '../../assets/tmdblogo.svg';

export default function Footer() {
  
  return (
    <footer>
      <img src={tmdblogo} alt='logo' className='tmdb-logo'></img>
      <p>Data and images provided by <a href='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'>The Movie DB (TMDB)</a></p>
      
    </footer>
  );
}