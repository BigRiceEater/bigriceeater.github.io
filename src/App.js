import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navigation/navbar';

import Home from './views/home';
import Portfolio from './views/portfolio';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
        </Router>
      </div>
    );
  }
}

export default App;
