import React from "react";

const Pokecard = (props) => (
  <div class="card">
    <p>{props.name}</p>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      alt=""
    />
    <small>Type: {props.type}</small>
    <small>EXP: {props.base_experience}</small>
  </div>
);

export default Pokecard;
