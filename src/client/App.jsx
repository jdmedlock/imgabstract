import React, { Component } from 'react';
import './containers/style.css';

// Application components
import PageHeader from './client/containers/pages/spa/PageHeader';
import SearchTerm from './client/containers/pages/spa/SearchTerm';
import SearchResults from './client/containers/pages/spa/SearchResults';
import PageFooter from './client/containers/pages/spa/PageFooter';

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
