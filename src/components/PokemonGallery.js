import React from "react";
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "../PokemonCard";
import SearchBox from "./SearchBox";
import "./PokemonGallery.css";

class PokemonGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };
  }

  changeSearchText = event => {
    this.setState({
      searchText: event.target.value,
    });
  };

  getFilteredPokemon(pokemonData, searchText) {
    const filteredPokemon = pokemonData.filter(aPokemon =>
      aPokemon.name.english.toLowerCase().startsWith(searchText.toLowerCase()),
    );

    return filteredPokemon;
  }

  render() {
    const filteredPokemon = this.getFilteredPokemon(
      pokemonData,
      this.state.searchText,
    );

    return (
      <div>
        <div>
          <h1 className="pokemon_gallery__title">Pokedex</h1>
          <SearchBox
            value={this.state.searchText}
            onChange={this.changeSearchText}
          />
          <br></br>
        </div>
        <div></div>
        <div className="pokemon-gallery">
          {filteredPokemon.map(p => {
            return <PokemonCard key={p.id} pokemon={p} />;
          })}
        </div>
      </div>
    );
  }
}

export default PokemonGallery;
