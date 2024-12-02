import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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
export const Card = ({ pokemon }) => {
  const navigate = useNavigate()
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.front} />
      <div>{pokemon.name}</div>
    </CardContainer>
  )
}
