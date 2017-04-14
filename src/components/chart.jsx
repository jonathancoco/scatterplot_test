import React                from 'react';
import {connect}            from 'react-redux';
import * as actionCreators  from '../lib/action-creators';
import ScatterPlot          from './scatter-plot';

const styles = {
  width   : 500,  //500
  height  : 100,  //300
  padding : 30,
};

const Chart = (props) => {

  return <div>
    <h1>Scatter Plot (Test)</h1>
    <ScatterPlot {...props} {...styles} />
    <div className="controls">
      <button onClick={() => props.week1Data()}>
        Data - Week
      </button>
      <button onClick={() => props.month1Data()}>
        Data - Month
      </button>
      <button onClick={() => props.month3Data()}>
        Data - 3 Month
      </button>
      <button onClick={() => props.month6Data()}>
        Data - 6 Month
      </button>
    </div>
  </div>
};

export default connect((state) => state, actionCreators)(Chart);
