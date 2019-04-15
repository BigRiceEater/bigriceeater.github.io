import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faReact,
  faVuejs,
  faJsSquare,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';

const utilityIcons = [faExternalLinkAlt, faSearch];
const brandIcons = [faGithub, faReact, faVuejs, faJsSquare, faNodeJs];

library.add(...utilityIcons, ...brandIcons);
export default {
  utility: {
    externalLink: <FontAwesomeIcon icon='external-link-alt' />,
    search: <FontAwesomeIcon icon='search' />
  },
  brand: {
    github: <FontAwesomeIcon icon={['fab', 'github']} />,
    react: <FontAwesomeIcon icon={['fab', 'react']} />,
    vue: <FontAwesomeIcon icon={['fab', 'vuejs']} />,
    js: <FontAwesomeIcon icon={['fab', 'js-square']} />,
    node: <FontAwesomeIcon icon={['fab', 'node-js']} />
  }
};
