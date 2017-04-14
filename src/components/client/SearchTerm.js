import React, { Component } from 'react';

class SearchTerm extends Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.textInput.value);
  }

  render() {
    return (
       <div>
         <form role="search" onSubmit={this.handleSubmit}>
          <br/>
          <label>Search Term(s):</label>
          &nbsp; &nbsp;
          <input name="searchTerms" id="search-terms" required
            type="text" 
            placeholder="Enter term(s) separated by commas"
            ref={(input) => { this.textInput = input; }} 
          />
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