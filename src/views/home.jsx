import React, { Component } from 'react';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className='columns  is-variable is-0-mobile is-centered'>
        <div
          className='column is-half'
          style={{ background: 'lightcoral', marginTop: '60px' }}>
          <h1 className='title has-text-centered'>Home</h1>
        </div>
      </div>
    );
  }
}

export default Home;
