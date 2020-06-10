import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
// import Footer from '../src/components/layout/Footer';
import Landing from '../src/components/Landing';
import Show from '../src/components/shows/Show';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Landing} exact />
          <Route path='/details' component={Show} exact />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
