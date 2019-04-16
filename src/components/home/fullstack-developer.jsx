import React, { Component } from 'react';
import Icons from './../../modules/icon/icon-mapper';

class FullStackDeveloper extends Component {
  state = {};
  render() {
    return (
      <section className='hero is-medium is-primary is-bold'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='title'>Full-Stack Javascript {Icons.brand.js}</h1>
            <h2 className='subtitle'>One language to rule them all</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default FullStackDeveloper;
