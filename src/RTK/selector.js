import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) => createSelector(
  state => state.pokemon.data,
  (pokemon) =>
    pokemon.find(el => Number(el.id) === Number(pokemonId))
)

export const selectPokemonByRegExp = (reg) => createSelector(
  state => state.pokemon.data,
  (pokemon) => pokemon.filter(el => el.name.match(reg))
)

export const selectFavoritePokemons = createSelector(
  state => state.pokemon.data,
  state => state.favorite,
  (pokemon, favorite)=>{
    return pokemon.filter(el => favorite.includes(el.id))
  }
)