import React, { Component } from 'react';
import Icons from './../../modules/icon/icon-mapper';

class GithubSource extends Component {
  state = {};
  render() {
    return (
      <section className='hero has-background-light is-bold'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <span className='fa-8x'>{Icons.brand.githubSquare}</span>
            <h1 className='title'>
              Github{' '}
              <a href='https://github.com/BigRiceEater' target='_blank'>
                <span className='fa-sm'>{Icons.utility.externalLink}</span>
              </a>
            </h1>
            <h2 className='subtitle'>
              All my code is open source with live demo on github pages
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default GithubSource;
