import React from 'react'
import ReactDom from 'react-dom'

import App from './js/app.jsx'

import './style/index.scss'

const container = document.getElementById('app');

container ? ReactDom.render(<App />, container) : false;