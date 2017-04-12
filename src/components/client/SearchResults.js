import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    return (
      <div>
        <div>
          <br/>
          <label>Search Results:</label>
          <br/>
          <input type="text" name="searchTerms" disabled />
        </div>
      </div>
    );
  }
}

export default SearchResults;