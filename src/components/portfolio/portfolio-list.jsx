import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';

class PortfolioList extends Component {
  render() {
    const { portfolios } = this.props;
    return (
      <div className='columns is-variable is-0-mobile is-centered'>
        <div className='column is-three-quarters'>
          <div className='columns is-variable is-0-mobile is-multiline'>
            {portfolios.map((p, idx) => (
              <PortfolioItem key={idx} data={p} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioList;
