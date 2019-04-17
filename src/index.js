// These two imports are mandatory to make react work on a webpage
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './theme.scss';
import '#assets/favicon.ico';

// For og:image

import '#assets/images/portfolio.png';

ReactDOM.render(<App />, document.getElementById('root'));
