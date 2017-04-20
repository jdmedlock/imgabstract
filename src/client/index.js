import React from 'react';
import ReactDOM from 'react-dom';

// Routes
import Routes from './containers/pages/shared/Routes';

// Material UI functions
import injectTapEventPlugin from 'react-tap-event-plugin';

const root = document.getElementById('root')
injectTapEventPlugin();
ReactDOM.render(
  <Routes />,
  root,
);

if (module.hot) { 
  module.hot.accept();
}
