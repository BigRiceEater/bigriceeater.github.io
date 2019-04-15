import React, { Component } from 'react';
import PortfolioList from './../components/portfolio/portfolio-list';
import AppPage from './../components/layout/app-page';
import PortfolioMapper from '@/modules/portfolio-mapper';

class Portfolio extends Component {
  state = {
    portfolios: [
      ...new PortfolioMapper().get(),
      ...new Array(4).fill({
        title: 'Amazing Project',
        thumbnail:
          'https://dumielauxepices.net/sites/default/files/death-clipart-potion-499435-5062378.jpg',
        description: 'My project is so awesome you must go and check it out!'
      })
    ]
  };
  render() {
    const { portfolios } = this.state;
    return (
      <AppPage>
        <PortfolioList portfolios={portfolios} />
      </AppPage>
    );
  }
}

export default Portfolio;
