import React, { Component } from 'react';
import CardFooter from './card-footer';
import CardHeader from './card-header';
import CardThumbnail from './card-thumbnail';
import CardBody from './card-body';

class CardItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='column is-half'>
        <div className='card' style={this.cardStyle}>
          <CardHeader data={data} />
          <CardThumbnail data={data} />
          <CardBody data={data} />
          <CardFooter data={data} />
        </div>
      </div>
    );
  }

  cardStyle = {
    margin: '20px'
  };
}

export default CardItem;
