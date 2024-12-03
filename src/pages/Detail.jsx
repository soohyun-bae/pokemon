import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPokemonById } from '../RTK/selector';
import { DetailCard } from '../component/DetailCard';
import FavoriteButton from '../component/FavoriteButton';
import FlipCard from '../component/FlipCard';

const Detail = () => {
  const { pokemonId } = useParams()
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
  console.log(pokemonId)

  return (
    <DetailCard>
      <FlipCard front={pokemon.front} back={pokemon.back} />
      <div className='flex justify-center text-[30px] pb-[10px]' >{pokemon.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className='w-[340px] flex justify-center pb-[10px]'>{pokemon.description}</div>
    </DetailCard>
  );
};

export default Detail;