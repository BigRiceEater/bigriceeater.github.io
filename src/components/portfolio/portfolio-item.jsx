import React, { Component } from 'react';
import icons from './../../modules/icon-mapper';
import PortfolioItemFooter from './portfolio-item-footer';
import PortfolioItemFrameworkList from './portfolio-item-framework-list';

class PortfolioItem extends Component {
  render() {
    const { id, title, thumbnail, description, demoUrl } = this.props.data;
    return (
      <div className='column is-half'>
        <div className='card' style={this.cardStyle}>
          <div className='card-header'>
            <p className='card-header-title'>{title}</p>
            <div className='card-header-icon'>
              <PortfolioItemFrameworkList
                icons={[icons.brand.js, icons.brand.react]}
              />
            </div>
          </div>

          <div className='card-image'>
            <figure className='image'>
              <img
                src={thumbnail}
                alt='card image'
                style={{ objectFit: 'cover' }}
              />
            </figure>
          </div>

          <div className='card-content'>
            <p>{description}</p>
          </div>

          <PortfolioItemFooter
            tags={[icons.brand.react, icons.brand.js, icons.brand.node]}
          />
        </div>
      </div>
    );
  }

  cardStyle = {
    margin: '20px',
    background: 'transparent'
  };
}

export default PortfolioItem;
