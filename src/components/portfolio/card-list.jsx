import React, { Component } from 'react';
import ListContainer from './list-container';
import CardItem from './card-item';

class CardList extends Component {
  render() {
    const { portfolios } = this.props;
    return (
      <ListContainer>
        <div className='columns is-variable is-0-mobile is-multiline'>
          {portfolios.map((p, idx) => (
            <CardItem key={idx} data={p} />
          ))}
        </div>
      </ListContainer>
    );
  }
}

export default CardList;
