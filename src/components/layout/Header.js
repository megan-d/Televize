import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import tv from '../../assets/tv-logo.png';

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const SiteTitle = styled.a`
  font-size: 28px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: 'rgb(14, 13, 13)', minHeight: '8vh' }}>
      <Navbar.Brand>
        <SiteTitle href='/'>
          <Logo src={tv} alt='television'></Logo>
          Televize
        </SiteTitle>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
