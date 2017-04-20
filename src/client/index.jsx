import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

// Routes
import Routes from './containers/pages/shared/Routes';

const root = document.getElementById('root')

ReactDOM (
   <AppContainer>
    <App />
  </AppContainer>,
  <Routes />,
 root,
);

if (module.hot) {
  module.hot.accept('./App', () => ReactDOM(App));
}
