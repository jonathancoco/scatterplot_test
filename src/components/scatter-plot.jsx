import React        from 'react';
import d3           from 'd3';
import DataCircles  from './data-circles';
import XYAxis       from './x-y-axis';

const xMax   = (data)  => d3.extent(data, (d) => d.date);
const yMax   = (data)  => d3.max(data, (d) => d.value);


// step #2 set the length of the range and and scale the range of the data based on the actual nput
const xScale = (props) => {
  return d3.time.scale()
    .domain(xMax(props.data))
    .range([props.padding, props.width - props.padding * 2])

};
const yScale = (props) => {
  return d3.scale.linear()
    .domain([0, yMax(props.data)])
    .range([props.height - props.padding, props.padding]);
};

const marshalProps = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return Object.assign({}, props, scales);
};

export default (props) => {
  // this will setup the following:
  // 1) Set the ranges and the type of data for the X / Y Axis
  // 2)
  const d3Props = marshalProps(props);

  return <svg width={d3Props.width} height={d3Props.height}>
    <DataCircles {...d3Props}/>
    <XYAxis {...d3Props}/>
  </svg>
}
