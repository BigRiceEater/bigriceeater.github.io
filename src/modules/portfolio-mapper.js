import Portfolio from '@/models/portfolio';
import * as tag from '@/models/project-tags';

import searchRestaurantThumbnail from './../../assets/images/project-thumbnail-search-restaurant.png';

export default class PortfolioMapper {
  constructor() {
    this.portfolios = [
      new Portfolio({
        id: '3efc05a1-7c2f-4c49-9533-67cd6773bb80',
        title: 'Search Restaurant',
        thumbnail: searchRestaurantThumbnail,
        description:
          'Search by tags and name of fictional shops to show a list of results.',
        sourceCodeUrl: 'https://git.io/fjmH5',
        demoUrl: 'https://git.io/fjmSX',
        projectTags: [tag.VUE, tag.JS]
      })
    ];
  }

  get() {
    return this.portfolios;
  }
}
