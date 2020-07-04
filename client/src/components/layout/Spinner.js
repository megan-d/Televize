import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  border: 10px solid #fdc108;
  border-top: 10px solid black;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }}
`;

const Spinner = () => {
  return (
    <div className='full-page'>
      <StyledSpinner />
    </div>
  );
};

export default Spinner;