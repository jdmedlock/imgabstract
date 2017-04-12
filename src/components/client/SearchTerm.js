import React, { Component } from 'react';

class SearchTerm extends Component {
  render() {
    return (
       <div>
         <form>
          <br/>
          <label>Search Term(s):</label>
          &nbsp; &nbsp;
          <input type="text" name="searchTerms" />
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