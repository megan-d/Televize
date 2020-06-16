import React from 'react';
// import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/themoviedblogo.svg';

function Header() {
  

  return (
    <>
      <Navbar bg='light'>
        <img
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt='React Bootstrap logo'
        />
        <Navbar.Brand>Cinema Search</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
