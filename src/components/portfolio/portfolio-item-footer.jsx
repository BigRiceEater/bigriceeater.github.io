import React, { Component } from 'react';
import icons from './../../modules/icon-mapper';

class PortfolioItemFooter extends Component {
  render() {
    const { sourceCodeUrl, demoUrl } = this.props;
    return (
      <footer className='card-footer'>
        <a href={sourceCodeUrl} className='card-footer-item'>
          view code &nbsp;
          {icons.brand.github}
        </a>
        <a href={demoUrl} className='card-footer-item'>
          demo &nbsp;
          {icons.utility.externalLink}
        </a>
      </footer>
    );
  }
}

export default PortfolioItemFooter;
