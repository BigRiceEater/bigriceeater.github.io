import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icons from './../../modules/icon/icon-mapper';

class GithubSource extends Component {
  state = {};
  render() {
    return (
      <section className='hero is-medium has-background-light is-bold'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <span className='fa-8x' style={{ lineHeight: '100%' }}>
              {Icons.brand.githubSquare}
            </span>
            {/* <h1 className='title'>
              Github{' '}
              <a href='https://github.com/BigRiceEater' target='_blank'>
                <span className='fa-sm'>{Icons.utility.externalLink}</span>
              </a>
            </h1> */}
            <h2 className='subtitle'>
              All my code is open source with live demo on github pages
            </h2>
            <Link
              className='button is-rounded is-primary is-large'
              to='/portfolio'>
              View My Portfolio
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default GithubSource;
