import React from 'react';

const renderCircles = (props) => {
  return (coords, index) => {

    const circleProps = {
      cx: props.xScale(coords.date),
      cy: props.yScale(coords.value),
      r: 4,
      fill: coords.color,
      key: index
    };
    return <circle {...circleProps} />;
  };
};

export default (props) => {
  return <g>{ props.data.map(renderCircles(props)) }</g>
}
