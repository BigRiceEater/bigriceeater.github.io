import Portfolio from '@/models/portfolio';
import * as tag from '@/models/project-tags';

import searchRestaurantDemo from '#assets/animated/search-restaurant-demo.gif';
import cardSystemDemo from '#assets/animated/card-system-demo.gif';
import portfolioDemo from '#assets/animated/portfolio-demo.gif';

export default class PortfolioMapper {
  constructor() {
    this.portfolios = [
      new Portfolio({
        id: '95ff0dc6-0709-43ee-8827-cdc7ea0f56ee',
        title: 'Big Rice Website',
        thumbnail: portfolioDemo,
        description: 'This site itself was made with React !',
        sourceCodeUrl: 'https://git.io/fjmN4',
        demoUrl: 'https://git.io/fjmSt',
        projectTags: [tag.REACT]
      }),
      new Portfolio({
        id: '3efc05a1-7c2f-4c49-9533-67cd6773bb80',
        title: 'Search Restaurant',
        thumbnail: searchRestaurantDemo,
        description:
          'Search by tags and name of fictional shops to show a list of results.',
        sourceCodeUrl: 'https://git.io/fjmH5',
        demoUrl: 'https://git.io/fjmSX',
        projectTags: [tag.VUE, tag.JS]
      }),
      new Portfolio({
        id: '94cbacfb-5dcf-47a0-bcd9-22d63a8f3ee0',
        title: 'Card System',
        thumbnail: cardSystemDemo,
        description: 'A horizontal scrollable list of cards.',
        sourceCodeUrl: 'https://git.io/fjmdB',
        demoUrl: 'https://git.io/fjmdl',
        projectTags: [tag.VUE, tag.JS]
      })
    ];
  }

  get() {
    return this.portfolios;
  }
}
