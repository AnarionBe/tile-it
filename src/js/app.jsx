import React from 'react'
import {Home} from './containers/index'

import config from '../configs/app.json'

export default () => {
  return (
    <div className="app">
      <Home layout={config.layout} />
    </div>
  );
}