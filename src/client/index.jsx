import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

// Routes
import Routes from './pages/shared/Routes';

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
