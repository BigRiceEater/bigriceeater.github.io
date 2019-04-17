// These two imports are mandatory to make react work on a webpage
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './theme.scss';
import '#assets/favicon.ico';

ReactDOM.render(<App />, document.getElementById('root'));
