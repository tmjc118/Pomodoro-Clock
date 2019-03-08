import React from 'react';
import * as timerStates from '../../timerStates';

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
}

const TimerDisplay = (props) => (
  <div>
    <div className="row center-block">
      {
        (props.timerState === timerStates.COMPLETE)
        && <img id="timer-finish" className="center-block" height="315" src="https://cdn4.iconfinder.com/data/icons/business-and-e-commerce/64/Finished_timer-512.png" />
      }
    </div>
    <div className="row">
      <h2 className="text-center">
        {`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
      </h2>
    </div>
  </div>
);

export default TimerDisplay;