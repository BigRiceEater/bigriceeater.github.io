import React, { Component } from 'react';
import icons from '../../modules/icon/icon-mapper';

const FooterItem = (props) => {
  const { children, url } = props;
  return (
    <a href={url} target='_blank' className='card-footer-item'>
      {children}
    </a>
  );
};

class CardFooter extends Component {
  render() {
    const { sourceCodeUrl, demoUrl } = this.props.data;
    return (
      <footer className='card-footer'>
        <FooterItem url={sourceCodeUrl}>
          view code &nbsp;
          {icons.brand.github}
        </FooterItem>
        <FooterItem url={demoUrl}>
          demo &nbsp;
          {icons.utility.externalLink}
        </FooterItem>
      </footer>
    );
  }
}

export default CardFooter;
