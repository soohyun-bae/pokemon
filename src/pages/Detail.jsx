import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPokemonById } from '../RTK/selector';
import { DetailCard } from '../component/DetailCard';

const Detail = () => {
  const { pokemonId } = useParams()
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
  console.log(pokemonId)

  return (
    <DetailCard>
      <img className='w-[300px] flex justify-center' src={pokemon.front} />
      <div className='flex justify-center text-[30px] pb-[10px]' >{pokemon.name}</div>
      <div className='w-[340px] flex justify-center pb-[10px]'>{pokemon.description}</div>
    </DetailCard>
  );
};

export default Detail;