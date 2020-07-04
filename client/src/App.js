import React, { Fragment } from 'react';
import './index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/Landing';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyle from './components/GlobalStyle';



function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Landing />
      </ErrorBoundary>
      <Footer />
    </Fragment>
  );
}

export default App;
