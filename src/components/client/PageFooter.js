import React, {Component} from 'react';
import FACodePen from 'react-icons/lib/fa/codepen'

class PageFooter extends Component {
  render() {
    return (
      <div id="footer">
        <div id="footer-inner">
          <h5>Jim Medlock, MIT License</h5>
          <a href="http://codepen.io/jdmedlock" target="_blank">
            <FACodePen />&nbsp;CodePen</a>
        </div>
      </div>
    );
  }
}

export default PageFooter;