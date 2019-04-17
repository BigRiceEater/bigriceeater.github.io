import React, { Component } from 'react';
import CardList from '../components/portfolio/card-list';
import AppPage from './../components/layout/app-page';
import PortfolioMapper from '@/modules/portfolio-mapper';

class Portfolio extends Component {
  state = {
    portfolios: [...new PortfolioMapper().get()]
  };
  render() {
    const { portfolios } = this.state;
    return (
      <AppPage centered>
        <h1 className='title'>Portfolio</h1>
        <p>
          This is a collection of my personal projects ranging from Mobile Apps
          to Single-Page Applications
        </p>
        <CardList portfolios={portfolios} />
      </AppPage>
    );
  }
}

export default Portfolio;
