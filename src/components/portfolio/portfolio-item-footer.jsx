import React, { Component } from 'react';

class PortfolioItemFooter extends Component {
  render() {
    const { tags } = this.props;
    return (
      <footer className='card-footer'>
        {tags.map((fontawesomeJsx) => (
          <div className='card-footer-item'>{fontawesomeJsx}</div>
        ))}
      </footer>
    );
  }
}

export default PortfolioItemFooter;
