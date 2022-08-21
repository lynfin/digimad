import React from 'react';
import Ratings from 'react-ratings-declarative';

function StarRating({ value, size, spacing, color }) {
  return (
    <Ratings rating={value} widgetDimensions={size} widgetSpacings={spacing}>
      <Ratings.Widget widgetRatedColor={color} />
      <Ratings.Widget widgetRatedColor={color} />
      <Ratings.Widget widgetRatedColor={color} />
      <Ratings.Widget widgetRatedColor={color} />
      <Ratings.Widget widgetRatedColor={color} />
    </Ratings>
  );
}
export default StarRating;
