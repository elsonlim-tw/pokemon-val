import React from "react";
import "./PokemonCard.css";
import { PokemonType } from "./PokemonType.js";
import "./PokemonType.css";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return (
    <div className="pokemon-card">
      <div className="pokemon-card__div">
        <img
          className="pokemon-card__image"
          src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`}
          alt={name.english}
        ></img>
      </div>
      <div className="pokemon-card__name">{name.english}</div>
      <div className="pokemon-card__type">
        {type.map(t => (
          <PokemonType key={t} type={t}></PokemonType>
        ))}
      </div>
      {Object.entries(base).map(eachBase => {
        return (
          <p key={eachBase[0]} className="pokemon-card__base">
            {eachBase[0] + ": " + eachBase[1]}
          </p>
        );
      })}
    </div>
  );
}

export default PokemonCard;
