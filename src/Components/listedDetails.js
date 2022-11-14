import React from "react";

const ListedDetails = (props) => {
  console.log();

  return (
    <div>
      <ul className="list">
        <li className="orengeRed">{props.list.main}</li>
        <li>
          {Math.ceil(props.moreDetails.temp_max)}°C/
          {Math.ceil(props.moreDetails.temp_min)}°C
        </li>
        <li>Feels like {Math.ceil(props.moreDetails.feels_like)}°C</li>
      </ul>
    </div>
  );
};

export default ListedDetails;
