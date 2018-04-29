import React, { Fragment } from "react";
const MarkerPopUp = ({ selectedPlace: { name, title, position } }) => (
  <div>
    <span>
      <strong>{name}</strong>
    </span>
    <p>{title}</p>
    {typeof position !== "undefined" && (
      <Fragment>
        <span>
          <strong>Latitude: {position.lat} </strong>
        </span>
        <br />
        <span>
          <strong>Longitude: {position.lng} </strong>
        </span>
      </Fragment>
    )}
  </div>
);

export default MarkerPopUp;
