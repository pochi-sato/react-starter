import React, { Component } from 'react';
import { Route, Switch, match } from 'react-router-dom';
import SampleDetail from '../samples/SamplesDetail';
import path from 'path';

interface Props {
  match: match;
}

export default class extends Component<Props> {
  render() {
    const match = this.props.match;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={path.join(match.path, 'samples/:sampleId')}
            render={props => {
              console.log(props);
              return <SampleDetail {...props.match.params} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
