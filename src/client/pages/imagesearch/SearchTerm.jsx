import React, { Component } from 'react';

class SearchTerm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerms: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      { searchTerms: event.target.value }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`${this.state.searchTerms}`);
  }

  render() {
    return (
      <div>
        <form role="search" onSubmit={this.handleSubmit}>
          <br />
          <label>Search Term(s):</label>
          &nbsp; &nbsp;
          <input
            name="searchTerms" id="search-terms" required
            type="text"
            placeholder="Enter term(s) separated by spaces"
            value={this.state.value} onChange={this.handleChange} 
          />
          &nbsp;&nbsp;&nbsp;
          <input type="submit" value="Submit" />
          &nbsp;
          <input type="Reset" value="Reset" />
        </form>
      </div>
    );
  }
}

export default SearchTerm;
