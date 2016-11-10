require('styles//main.css');
require('styles//mobiscroll.css');
require('styles//swiper-3.2.7.min.css');
window.$ = require("./plugs/jquery");
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

render(
    <App ajaxurl='../'/>,
    document.getElementById('app')
);
