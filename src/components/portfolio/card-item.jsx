import React, { Component } from 'react';
import PortfolioItemFooter from './portfolio-item-footer';
import CardHeader from './card-header';
import CardThumbnail from './card-thumbnail';

class CardItem extends Component {
  render() {
    const { thumbnail, description, demoUrl, sourceCodeUrl } = this.props.data;
    const { data } = this.props;
    return (
      <div className='column is-half'>
        <div className='card' style={this.cardStyle}>
          <CardHeader data={data} />
          <CardThumbnail data={data} />

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
