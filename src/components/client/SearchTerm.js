import React, { Component } from 'react';

class SearchTerm extends Component {

  constructor( props ) { 
    super( props ); 
    this.state = { 
      searchTerms: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }

  handleChange(event) {
    this.setState({searchTerms: event.target.value});
  }

  handleSubmit(event) {
    console.log(`${this.state.searchTerms}`);
    event.preventDefault();
  }

  render() {
    return (
       <div>
         <form role="search" onSubmit={this.handleSubmit}>
          <br/>
          <label>Search Term(s):</label>
          &nbsp; &nbsp;
          <input name="searchTerms" id="search-terms" required type="text" 
            value={this.state.value} onChange={this.handleChange}
            placeholder="Enter term(s) separated by commas"
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