import React, { Component } from 'react';
import FullStackDeveloper from './../components/home/fullstack-developer';
import GithubSource from './../components/home/github-source';
import BuildTools from './../components/home/build-tools';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <FullStackDeveloper />
        <GithubSource />
        <BuildTools />
      </div>
    );
  }
}

export default Home;
