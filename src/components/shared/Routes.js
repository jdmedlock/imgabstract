import React from 'react'

//Routes
import NotFound from './NotFound'
import App from './../App';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} /> 
        <Route path="/api/search" component={ImageSearch}/> 
        <Route path="/api/recent" component={ImageHistory}/> 
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes