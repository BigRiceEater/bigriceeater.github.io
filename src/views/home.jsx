import React, { Component } from 'react';
import FullStackDeveloper from './../components/home/fullstack-developer';
import GithubSource from './../components/home/github-source';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <FullStackDeveloper />
        <GithubSource />
      </div>
    );
  }
}

export default Home;
