import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../../stores/lineStore';
import { Or } from '../../commons/utilities';
// @ts-ignore
import { Windmill } from 'react-activity';
import 'react-activity/dist/react-activity.css';

interface Props {
  sampleId?: string;
}

@observer
export default class extends Component<any> {
  static getDerivedStateFromProps(nextProps: Props) {
    console.log(nextProps.sampleId);
    return null;
  }

  render() {
    return (
      <div className="l-container">
        <div> {this.props.text} </div>
        <div>
          {Or(
            store.isFetching,
            <div className="m-modal-form-disable-container">
              <div className="m-room-list-indicator">
                <Windmill size="25px" color="#ff4d4f" speed={1} />
              </div>
            </div>,
            store.lineEvents.map((event, index) => (
              <span key={index}>{JSON.stringify(event)}</span>
            ))
          )}
        </div>
      </div>
    );
  }
}
