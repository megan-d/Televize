import React from 'react';
import tmdblogo from '../../assets/tmdblogo.svg';
import styled from 'styled-components';

const Logo = styled.img`
  width: 90px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 20px;
`;

const StyledFooter = styled.footer`
  background-color: #242323;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        Data and images provided by{' '}
        <FooterLink
          href='https://www.themoviedb.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          TMDb
        </FooterLink>
      </p>
      <Logo src={tmdblogo} alt='logo'></Logo>
    </StyledFooter>
  );
}
