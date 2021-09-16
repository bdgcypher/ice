import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Loader />
        <Navbar />
        <Switch>
          <Route path="/ice/" exact  component={Home}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;