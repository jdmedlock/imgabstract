import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './containers/style.css';

// Application components
import PageHeader from './containers/pages/shared/PageHeader';
import SearchTerm from './containers/pages/spa/SearchTerm';
import SearchResults from './containers/pages/spa/SearchResults';
import PageFooter from './containers/pages/shared/PageFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <div id="search">
          <SearchTerm />
          <SearchResults />
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default App;
