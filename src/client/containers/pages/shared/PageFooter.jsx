import React, { Component } from 'react';
import FACodePen from 'react-icons/lib/fa/codepen';
import FAFire from 'react-icons/lib/fa/fire';
import FAGitHub from 'react-icons/lib/fa/github';
import FATwitter from 'react-icons/lib/fa/twitter';
import PropTypes from 'prop-types';

class PageFooter extends Component {
  render() {
    return (
      <div id="footer">
        <div id="footer-inner">
          <h4>Jim Medlock, MIT License</h4>
          <a href="http://codepen.io/jdmedlock" target="_blank" rel="noopener noreferrer">
            <FACodePen />&nbsp;CodePen</a>
          &nbsp; &nbsp;
          <a href="http://www.freecodecamp.com/jdmedlock" target="_blank" rel="noopener noreferrer">
            (<FAFire />)&nbsp;Freecodecamp</a>
          &nbsp; &nbsp;
          <a href="https://github.com/jdmedlock" target="_blank" rel="noopener noreferrer">
            <FAGitHub />&nbsp;GitHub</a>
          &nbsp; &nbsp;
          <a href="http://twitter.com/jd_medlock" target="_blank" rel="noopener noreferrer">
            <FATwitter />&nbsp;Twitter</a>
        </div>
      </div>
    );
  }
}

export default PageFooter;
