import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faExternalLinkAlt,
  faQuestionCircle,
  faBreadSlice
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faReact,
  faVuejs,
  faJsSquare,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';

const utilityIcons = [faExternalLinkAlt, faSearch, faQuestionCircle];
const brandIcons = [faGithub, faReact, faVuejs, faJsSquare, faNodeJs];

library.add(...utilityIcons, ...brandIcons);

import * as projectTags from './../models/project-tags';

export default {
  utility: {
    externalLink: <FontAwesomeIcon icon='external-link-alt' />,
    search: <FontAwesomeIcon icon='search' />,
    unknown: <FontAwesomeIcon icon='question-circle' />
  },
  brand: {
    github: <FontAwesomeIcon icon={['fab', 'github']} />,
    react: <FontAwesomeIcon icon={['fab', 'react']} />,
    vue: <FontAwesomeIcon icon={['fab', 'vuejs']} />,
    js: <FontAwesomeIcon icon={['fab', 'js-square']} />,
    node: <FontAwesomeIcon icon={['fab', 'node-js']} />
  },
  getProjectIconByTag(tag) {
    console.log('finding ', tag);
    console.log(tag.VUE);
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
