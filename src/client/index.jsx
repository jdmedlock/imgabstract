import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import PropTypes from 'prop-types';

// Routes
import Routes from './containers/pages/shared/Routes';

const root = document.getElementById('root')

ReactDOM.render (
  <AppContainer>
    <App />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./App', () => ReactDOM(App));
}
