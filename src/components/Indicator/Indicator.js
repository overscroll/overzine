import React from 'react';

const Indicator = (props) => (
  <div className="indicator" data-index={props.index}>
    <div className="indicator-wrapper">
        <div className="indicator-bar">
        </div>
    </div>
  </div>
);

export default Indicator;