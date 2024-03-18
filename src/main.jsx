import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const warningTitleCSS = 'color: #4db5ff; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;';

console.log('%cหยุดเลย แอบดูหรอ! 🦖', warningTitleCSS);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

