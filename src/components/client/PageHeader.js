import React, { Component } from 'react';
import { AppBar } from 'material-ui/';


class PageHeader extends Component {
  render() {
    return (
      <AppBar
        title="FCC Image Search Abstraction API"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default PageHeader;