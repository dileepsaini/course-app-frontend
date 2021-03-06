import React from 'react';
import Routes from './Routes';
import ReactDom from 'react-dom';
import * as firebase from 'firebase';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import 'antd/dist/antd.css';
import './styles/antCarousel.css';

ReactDom.render(<Routes/>,document.getElementById("root"));