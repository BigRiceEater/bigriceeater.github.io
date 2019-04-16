import React, { Component } from 'react';
import icons from '../../modules/icon/icon-mapper';
import PortfolioItemFooter from './portfolio-item-footer';
import PortfolioItemFrameworkList from './portfolio-item-framework-list';

class PortfolioItem extends Component {
  projectIcons = (tags) => {
    if (tags) return tags.map((t) => icons.getProjectIconByTag(t));
    else return [];
  };

  render() {
    const {
      id,
      title,
      thumbnail,
      description,
      demoUrl,
      sourceCodeUrl,
      projectTags
    } = this.props.data;
    return (
      <div className='column is-half'>
        <div className='card' style={this.cardStyle}>
          <div className='card-header'>
            <p className='card-header-title'>{title}</p>
            <div className='card-header-icon'>
              <PortfolioItemFrameworkList
                icons={this.projectIcons(projectTags)}
              />
            </div>
          </div>

          <div className='card-image'>
            <figure className='image'>
              <img
                src={thumbnail}
                alt='card image'
                style={{
                  objectFit: 'cover',
                  marginTop: '5px',
                  minHeight: '180px'
                }}
              />
            </figure>
          </div>

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

export default PortfolioItem;
