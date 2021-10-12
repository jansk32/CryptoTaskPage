import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './homePage';
import DetailPage from'./detailsPage'
import ErrorComponent from './noResultsComponent';

function App() {
  return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/details/:coinId" component={DetailPage} />
      <Route component={ErrorComponent} />
    </Switch>
  </BrowserRouter>
  )
}

export default App;
