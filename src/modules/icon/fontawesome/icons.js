import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './library';

export default {
  utility: {
    externalLink: <FontAwesomeIcon icon='external-link-alt' />,
    search: <FontAwesomeIcon icon='search' />,
    unknown: <FontAwesomeIcon icon='question-circle' />,
    code: <FontAwesomeIcon icon='code' />,
    userCircle: <FontAwesomeIcon icon='user-circle' />,
    home: <FontAwesomeIcon icon='home' />
  },
  brand: {
    github: <FontAwesomeIcon icon={['fab', 'github']} />,
    githubSquare: <FontAwesomeIcon icon={['fab', 'github-square']} />,
    react: <FontAwesomeIcon color='#00d8ff' icon={['fab', 'react']} />,
    vue: <FontAwesomeIcon color='#42b883' icon={['fab', 'vuejs']} />,
    js: <FontAwesomeIcon color='#f7df1e' icon={['fab', 'js-square']} />,
    node: <FontAwesomeIcon color='#6cc24a' icon={['fab', 'node-js']} />,
    apple: <FontAwesomeIcon icon={['fab', 'apple']} />,
    windows: <FontAwesomeIcon icon={['fab', 'windows']} />
  }
};
