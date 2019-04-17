import React, { Component } from 'react';
import PortfolioItemFooter from './portfolio-item-footer';
import CardHeader from './card-header';
import CardThumbnail from './card-thumbnail';
import CardBody from './card-body';

class CardItem extends Component {
  render() {
    const { demoUrl, sourceCodeUrl } = this.props.data;
    const { data } = this.props;
    return (
      <div className='column is-half'>
        <div className='card' style={this.cardStyle}>
          <CardHeader data={data} />
          <CardThumbnail data={data} />
          <CardBody data={data} />

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
