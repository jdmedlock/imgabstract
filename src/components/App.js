import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg'
import '../css/style.css'
import { Link } from 'react-router-dom'

//material-ui components
import Paper from 'material-ui/Paper';
import { TextField } from 'material-ui/';

//theme related material-ui
import { MuiThemeProvider,
         getMuiTheme,
         darkBaseTheme } from 'material-ui/styles'

// Application components
import PageHeader from './client/PageHeader';
import SearchTerm from './client/SearchTerm';
import SearchResults from './client/SearchResults';
import PageFooter from './client/PageFooter';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <Paper zDepth={2}>
            <PageHeader />
          </Paper>
          <Paper zDepth={2}>
            <SearchTerm />
            <SearchResults />
          </Paper>
          <Paper zDepth={2}>
            <PageFooter />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
