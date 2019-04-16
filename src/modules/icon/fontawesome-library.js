import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faExternalLinkAlt,
  faQuestionCircle,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faReact,
  faVuejs,
  faJsSquare,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';

const utilityIcons = [faExternalLinkAlt, faSearch, faQuestionCircle, faCode];
const brandIcons = [faGithub, faReact, faVuejs, faJsSquare, faNodeJs];

library.add(...utilityIcons, ...brandIcons);
