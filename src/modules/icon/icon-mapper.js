import webpackIcon from './webpack-icon.jsx';
import sassIcon from './sass-icon.jsx';
import bulmaIcon from './bulma-icon.jsx';

import fontawesomeIcons from './fontawesome/icons';
import * as projectTags from '../../models/project-tags';

export default {
  utility: {
    ...fontawesomeIcons.utility
  },
  brand: {
    ...fontawesomeIcons.brand,
    webpack: webpackIcon,
    sass: sassIcon,
    bulma: bulmaIcon
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
