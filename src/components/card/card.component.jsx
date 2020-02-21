import React from "react";

import "./card.styles.scss";

export const Card = props => (
  <div className="card-container">
    <img
      alt="The Monster"
      src={`https://www.robohash.org/${props.monster.id}?set=set2&size=180x180`}
    ></img>
    <h2>{props.monster.name}</h2>
    <p>
      <a href={`mailto:${props.monster.email}`}>{props.monster.email}</a>
    </p>
  </div>
);
