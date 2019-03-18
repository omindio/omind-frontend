import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles.scss';

import Header from './components/common/Header';

import Home from './components/pages/Home';
import Proyects from './components/pages/Proyects';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/proyects' component={Proyects} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
