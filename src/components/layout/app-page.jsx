import React, { Component } from 'react';
import './app-page.scss';

class AppPage extends Component {
  bodyClassStyles = () => {
    const { centered } = this.props;
    let classes = 'container app-page';
    if (centered) classes += ' has-text-centered';
    return classes;
  };
  render() {
    return (
      <section className='section'>
        <div className={this.bodyClassStyles()}>{this.props.children}</div>
      </section>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
}

export default AppPage;
