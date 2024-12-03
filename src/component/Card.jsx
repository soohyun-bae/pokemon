import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FavoriteButton from "./FavoriteButton"
import { memo, useState } from "react"

export const CardContainer = styled.section`
  width: 150px;
  border: 2px solid #DD5E57;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
`
export const Card = memo( ({ pokemon }) => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const navigate = useNavigate()
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isImageLoading ? <div className="w-[120px] h-[120px] leading-[120px] text-center">Loading...</div> : null}
      <img onLoad={() => setIsImageLoading(false)} src={pokemon.front} style={{display: isImageLoading ? 'none' : 'block'}}/>
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
        </div>
    </CardContainer>
  )
})
