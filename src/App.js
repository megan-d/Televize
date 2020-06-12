import React from 'react';
import './App.css';
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
        <Switch>
          <Route path='/' component={Landing} exact />
          <Route path='/details' component={Details} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
