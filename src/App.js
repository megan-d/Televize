import React from 'react';
import './index.css';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Landing from '../src/components/Landing';


function App() {
  return (
    <div className='App'>
        <Header />
        <Landing />
        <Footer />
    </div>
  );
}

export default App;
