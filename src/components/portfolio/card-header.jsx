import React, { Component } from 'react';
import PortfolioItemFrameworkList from './portfolio-item-framework-list';
import icons from '../../modules/icon/icon-mapper';

class CardHeader extends Component {
  projectIcons = (tags) => {
    if (tags) return tags.map((t) => icons.getProjectIconByTag(t));
    else return [];
  };

  render() {
    const { title, projectTags } = this.props.data;
    return (
      <div className='card-header'>
        <p className='card-header-title'>{title}</p>
        <div className='card-header-icon'>
          <PortfolioItemFrameworkList icons={this.projectIcons(projectTags)} />
        </div>
      </div>
    );
  }
}

export default CardHeader;
