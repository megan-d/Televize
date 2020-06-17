import React from 'react';
// import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  

  return (
    <div>
      <Navbar bg='light'>
        {/* <img
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt='React Bootstrap logo'
        /> */}
        <Navbar.Brand>TV Search</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
