import React from 'react';
import tmdblogo from '../../assets/tmdblogo.svg';

export default function Footer() {
  
  return (
    <footer style={{ backgroundColor: '#2b2a2a' }} className='mt-auto'>
      <img src={tmdblogo} alt='logo' className='tmdb-logo'></img>
      <p>Data and images provided by <a href='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'>The Movie DB (TMDB)</a></p>
      
    </footer>
  );
}