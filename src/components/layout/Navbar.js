import React from 'react';
import styled from 'styled-components';

function Navbar() {
  const Header = styled.header`
    background: red;
    width: 100%;
    margin: auto;
    min-height: 10vh;
    height: 10vh;
  `;

  return <Header>Cinema Search</Header>;
}

export default Navbar;
