import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/layout/Footer';
import Landing from '../src/components/Landing';
import Details from '../src/components/movies/Details';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Landing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
