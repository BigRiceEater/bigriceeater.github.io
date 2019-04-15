import React, { Component } from 'react';

class PortfolioItem extends Component {
  render() {
    const { id, title, thumbnail, description, demoUrl } = this.props.data;
    return (
      <div className='column is-half'>
        <div className='card' style={this.cardStyle}>
          <div className='card-header'>
            <p className='card-header-title'>{title}</p>
            <a href={demoUrl} target='_blank' class='card-header-icon'>
              demo
            </a>
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
          <div className='card-footer' />
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
