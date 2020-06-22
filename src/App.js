import React from 'react';
import './index.css';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Landing from '../src/components/Landing';
import styles, { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#1d1c1c',
  secondary: '#fdc108',
  alert: 'red',
  font: 'Lato, sans-serif',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
       <div className='min-vh-100 d-flex flex-column'>
      <Header />
      <Landing />
      <Footer />
    </div>
    </ThemeProvider>
   
  );
}

export default App;
