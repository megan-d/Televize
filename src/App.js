import React, { Fragment } from 'react';
import './index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/Landing';

function App() {
  return (
    <Fragment >
      <Header />
      <Landing />
      <Footer />
    </Fragment>
  );
}

export default App;
