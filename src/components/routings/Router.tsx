import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SampleRouter from './SampleRouter';

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={SampleRouter} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
