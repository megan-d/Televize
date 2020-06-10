import React from 'react';
import styled from 'styled-components/macro';

const Spinner = () => {
    .spinner {
        border: 10px solid black;
        border-top: 10px solid black;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        animation: spin 1s linear infinite;
        margin: 0 auto;
      }
      
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

  return (
    <div>
      <div className='spinner'></div>
    </div>
      
  );
};

export default Spinner;