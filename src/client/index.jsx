import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Routes
import Routes from './containers/pages/shared/Routes';

const root = document.getElementById('root')
injectTapEventPlugin();
ReactDOM.render(
  <Routes />,
  root,
);

if (module.hot) { 
  module.hot.accept();
}
