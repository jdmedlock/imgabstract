import React, { Component } from 'react';
import '../css/style.css'

// Application components
import PageHeader from './client/PageHeader';
import SearchTerm from './client/SearchTerm';
import SearchResults from './client/SearchResults';
import PageFooter from './client/PageFooter';

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
