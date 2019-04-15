import React, { Component } from 'react';
import './app-page.scss';

class AppPage extends Component {
  state = {};
  render() {
    return <div className='container app-page'>{this.props.children}</div>;
  }
}

export default AppPage;
