import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../component/Card';


const Main = () => {
  const pokemonData = useSelector(state => state.pokemon.data)

  return (
    <>
      {pokemonData.map(el =>
        <Card key={el.id} pokemon={el} />
      )}
    </>
  );
};

export default Main;