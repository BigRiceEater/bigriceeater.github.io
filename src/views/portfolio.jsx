import React, { Component } from 'react';
import PortfolioList from './../components/portfolio/portfolio-list';
import AppPage from './../components/layout/app-page';
import PortfolioMapper from '@/modules/portfolio-mapper';

class Portfolio extends Component {
  state = {
    portfolios: [...new PortfolioMapper().get()]
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
