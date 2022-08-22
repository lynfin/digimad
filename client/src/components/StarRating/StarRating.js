import React from 'react';
import Ratings from 'react-ratings-declarative';

function StarRating({ value, size, spacing, color, changeRating }) {
  return (
    <Ratings
      rating={value}
      widgetDimensions={size}
      widgetSpacings={spacing}
      changeRating={changeRating}
    >
      <Ratings.Widget widgetRatedColor={color} />
      <Ratings.Widget widgetRatedColor={color} />
      <Ratings.Widget widgetRatedColor={color} />
      <Ratings.Widget widgetRatedColor={color} />
      <Ratings.Widget widgetRatedColor={color} />
    </Ratings>
  );
}
export default StarRating;
