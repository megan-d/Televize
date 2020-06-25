import React, { Fragment } from 'react';
import './index.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/Landing';
// import Error from './components/views/Error';
// import About from './components/views/About';

function App() {
  return (
    <Fragment>
      <Header />
      <Landing />
      <Footer />
    </Fragment>
  );
}

export default App;
