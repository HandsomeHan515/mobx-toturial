import React from "react";
import ReactDOM from 'react-dom';
import { observable, action, autorun } from 'mobx';
import { observer } from 'mobx-react';

var appState = observable({
  timer: 0
});

console.log(123)

appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

setInterval(action(function tick() {
  appState.timer += 1;
}), 1000);

@observer
class TimerView extends React.Component {
  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.appState.timer}
      </button>
    );
  }

  onReset() {
    this.props.appState.resetTimer();
  }
};

ReactDOM.render(
  <TimerView appState={appState} />,
  document.getElementById('app')
);