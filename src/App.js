import React, { Component } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
