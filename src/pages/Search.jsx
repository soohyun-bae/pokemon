import { getRegExp } from 'korean-regexp';
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectPokemonByRegExp } from '../RTK/selector';
import { Card } from '../component/Card';


const Search = () => {
  const [searchParams] = useSearchParams()
  const param = searchParams.get('pokemon')
  console.log(param)
  const reg = getRegExp(param)

  const pokemon = useSelector(selectPokemonByRegExp(reg))
  console.log(pokemon)
  return (
    <>
      {pokemon.map(el =>
        <Card key={el.id} pokemon={el} />
      )}
    </>
  );
};

export default Search;