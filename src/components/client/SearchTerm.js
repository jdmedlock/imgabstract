import React, { Component } from 'react';

class SearchTerm extends Component {
  render() {
    return (
       <div>
         <form>
          <br/>
          <label>Search Term(s):</label>
          &nbsp; &nbsp;
          <input id="search-terms" type="text" name="searchTerms" 
            placeholder="Enter term(s) separated by commas" />
          &nbsp;&nbsp;&nbsp;
          <input type="submit" value="Submit"/>
          &nbsp;
          <input type="Reset" value="Reset"/>
        </form>
      </div>
    );
  }
}

export default SearchTerm;