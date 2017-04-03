import React, { Component } from 'react';
import './App.css';
import PageHeader from './client/components/PageHeader';
import SearchTerm from './client/components/SearchTerm';
import SearchResults from './client/components/SearchResults';
import PageFooter from './client/components/PageFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <SearchTerm />
        <SearchResults />
        <PageFooter />
      </div>
    );
  }
}

export default App;
