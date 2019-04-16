import React, { Component } from 'react';
import ToolItem from './tool-item';
import Icons from './../../modules/icon/icon-mapper';

class BuildTools extends Component {
  render() {
    const { js, react, vue, webpack, node } = Icons.brand;
    const icons = [
      {
        icon: js,
        label: 'ES6'
      },
      {
        icon: react,
        label: 'React'
      },
      {
        icon: vue,
        label: 'Vue.js'
      },
      {
        icon: webpack,
        label: 'webpack'
      },
      {
        icon: node,
        label: 'NodeJs'
      }
    ];

    return (
      <section className='hero is-dark is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered'>
              I build using modern technologies
            </h1>
            <div className='columns is-centered is-mobile is-vcentered is-multiline'>
              {icons.map((i, idx) => (
                <ToolItem key={idx} icon={i.icon} label={i.label} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BuildTools;
