import React, { Component } from 'react';
import ToolItem from './tool-item';
import Icons from './../../modules/icon/icon-mapper';

class BuildTools extends Component {
  render() {
    const { js, react, vue, webpack, node } = Icons.brand;
    const icons = [js, react, vue, webpack, node];
    return (
      <section className='hero is-dark is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered'>
              I build using modern technology
            </h1>
            <div className='columns is-centered is-mobile is-vcentered is-multiline'>
              {icons.map((i, idx) => (
                <ToolItem key={idx} icon={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BuildTools;
