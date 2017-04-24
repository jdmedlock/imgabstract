import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pages/shared/style.css';

// Application components
import PageHeader from './pages/shared/PageHeader';
import SearchTerm from './pages/imagesearch/SearchTerm';
import SearchResults from './/pages/imagesearch/SearchResults';
import PageFooter from './pages/shared/PageFooter';

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
