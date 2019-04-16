import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import webpackIcon from './webpack-icon.jsx';

import './fontawesome-library';
import * as projectTags from '../../models/project-tags';

export default {
  utility: {
    externalLink: <FontAwesomeIcon icon='external-link-alt' />,
    search: <FontAwesomeIcon icon='search' />,
    unknown: <FontAwesomeIcon icon='question-circle' />,
    code: <FontAwesomeIcon icon='code' />
  },
  brand: {
    github: <FontAwesomeIcon icon={['fab', 'github']} />,
    githubSquare: <FontAwesomeIcon icon={['fab', 'github-square']} />,
    react: <FontAwesomeIcon color='#00d8ff' icon={['fab', 'react']} />,
    vue: <FontAwesomeIcon color='#42b883' icon={['fab', 'vuejs']} />,
    js: <FontAwesomeIcon color='#f7df1e' icon={['fab', 'js-square']} />,
    node: <FontAwesomeIcon color='#6cc24a' icon={['fab', 'node-js']} />,
    webpack: webpackIcon
  },
  getProjectIconByTag(tag) {
    console.log('finding ', tag);
    const { vue, react, js, node } = this.brand;
    switch (tag) {
      case projectTags.VUE:
        return vue;
      case projectTags.REACT:
        return react;
      case projectTags.JS:
        return js;
      case projectTags.NODE:
        return node;
      default:
        return this.utility.unknown;
    }
  }
};
