import React, { Component } from 'react';

import PortfolioItemFooter from './portfolio-item-footer';
import CardHeader from './card-header';

class CardItem extends Component {
  render() {
    const { thumbnail, description, demoUrl, sourceCodeUrl } = this.props.data;
    return (
      <div className='column is-half'>
        <div className='card' style={this.cardStyle}>
          <CardHeader data={this.props.data} />
          <div className='card-image'>
            <figure className='image'>
              <img
                src={thumbnail}
                alt='card image'
                style={{
                  objectFit: 'cover',
                  marginTop: '5px',
                  minHeight: '180px'
                }}
              />
            </figure>
          </div>

          <div
            className='card-content'
            style={{ height: '120px', overflowY: 'auto' }}>
            <p>{description}</p>
          </div>

          <PortfolioItemFooter
            sourceCodeUrl={sourceCodeUrl}
            demoUrl={demoUrl}
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

export default CardItem;
