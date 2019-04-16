import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faExternalLinkAlt,
  faQuestionCircle,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faGithubSquare,
  faReact,
  faVuejs,
  faJsSquare,
  faNodeJs,
  faApple,
  faWindows
} from '@fortawesome/free-brands-svg-icons';

const utilityIcons = [faExternalLinkAlt, faSearch, faQuestionCircle, faCode];
const brandIcons = [
  faGithub,
  faGithubSquare,
  faReact,
  faVuejs,
  faJsSquare,
  faNodeJs,
  faApple,
  faWindows
];

library.add(...utilityIcons, ...brandIcons);
