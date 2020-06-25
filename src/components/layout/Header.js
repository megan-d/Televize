import React from 'react';
// import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import tv from '../../assets/tv-logo.png';

function Header() {
  return (
    <Navbar style={{ backgroundColor: 'rgb(14, 13, 13)', minHeight: '8vh' }}>
      {/* <img
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt='React Bootstrap logo'
        /> */}
      <Navbar.Brand>
        <a href='/' className='site-title'>
          <img src={tv} alt='television' className='tv-logo'></img>
          TellyVision
        </a>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
