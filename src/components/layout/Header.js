import React from 'react';
// import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  

  return (
    <div>
      <Navbar style={{ backgroundColor: '#1d1c1c' }}>
        {/* <img
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt='React Bootstrap logo'
        /> */}
        <Navbar.Brand><a href='/' className='site-title'>TVSearch App</a></Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
